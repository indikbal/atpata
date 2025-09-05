import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';
import { CartItem } from '../contexts/CartContext';

export interface OrderData {
  paymentId: string;
  orderId?: string;
  signature?: string;
  items: CartItem[];
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  orderSummary: {
    subtotal: number;
    tax: number;
    total: number;
    totalItems: number;
  };
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt?: any; // Firestore timestamp
  updatedAt?: any; // Firestore timestamp
}

// Save order to Firebase with localStorage backup
export const saveOrderToFirebase = async (orderData: Omit<OrderData, 'createdAt' | 'updatedAt'>): Promise<void> => {
  const orderWithTimestamp: OrderData = {
    ...orderData,
    status: 'confirmed',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  // Always save to localStorage first as backup
  saveOrderToLocalStorage(orderWithTimestamp);

  try {
    const orderRef = doc(db, 'orders', orderData.paymentId);
    await setDoc(orderRef, orderWithTimestamp);
  } catch (error) {
    console.error('Error saving order to Firebase:', error);
    // Don't throw error - localStorage backup is available
  }
};

// Get order from Firebase by payment ID with offline fallback
export const getOrderFromFirebase = async (paymentId: string): Promise<OrderData | null> => {
  try {
    const orderRef = doc(db, 'orders', paymentId);
    const orderSnap = await getDoc(orderRef);

    if (orderSnap.exists()) {
      const data = orderSnap.data() as OrderData;
      return {
        ...data,
        paymentId: orderSnap.id, // Ensure paymentId is included
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching order from Firebase:', error);
    
    // Try localStorage fallback for any Firebase error
    const fallbackOrder = getOrderFromLocalStorage(paymentId);
    if (fallbackOrder) {
      return fallbackOrder;
    }
    
    throw new Error('Order not found. Please ensure you have a valid payment confirmation.');
  }
};

// Fallback: Get order from localStorage
const getOrderFromLocalStorage = (paymentId: string): OrderData | null => {
  try {
    const stored = localStorage.getItem(`order_${paymentId}`);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error reading from localStorage:', error);
  }
  return null;
};

// Save order to localStorage as backup
const saveOrderToLocalStorage = (orderData: OrderData): void => {
  try {
    localStorage.setItem(`order_${orderData.paymentId}`, JSON.stringify(orderData));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};


// Update order status
export const updateOrderStatus = async (paymentId: string, status: OrderData['status']): Promise<void> => {
  try {
    const orderRef = doc(db, 'orders', paymentId);
    await setDoc(orderRef, {
      status,
      updatedAt: serverTimestamp(),
    }, { merge: true });
    
    console.log('Order status updated:', paymentId, status);
  } catch (error) {
    console.error('Error updating order status:', error);
    throw new Error('Failed to update order status.');
  }
};

// Generate order receipt number
export const generateOrderReceiptNumber = (): string => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  return `ATP${timestamp}${random}`;
};

// Validate payment ID format
export const isValidPaymentId = (paymentId: string): boolean => {
  // Razorpay payment ID format: pay_xxxxxxxxxx (starts with 'pay_')
  return /^pay_[A-Za-z0-9]{14}$/.test(paymentId);
};
