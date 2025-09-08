import { CartItem } from '../contexts/CartContext';
import { saveOrderToFirebase } from './firebaseService';
import { sendOrderEmails } from './emailService';

// Razorpay configuration
const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID;

export interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id?: string;
  handler: (response: RazorpayResponse) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  notes: {
    address: string;
  };
  theme: {
    color: string;
  };
  modal: {
    ondismiss: () => void;
  };
}

export interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
  razorpay_signature?: string;
}

export interface OrderData {
  items: CartItem[];
  totalAmount: number;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
}

// Load Razorpay script dynamically
export const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

// Initialize Razorpay payment
export const initiatePayment = async (orderData: OrderData): Promise<void> => {
  const isScriptLoaded = await loadRazorpayScript();
  
  if (!isScriptLoaded) {
    throw new Error('Razorpay SDK failed to load. Please check your internet connection.');
  }

  if (!RAZORPAY_KEY_ID) {
    throw new Error('Razorpay key not configured. Please check environment variables.');
  }

  const options: RazorpayOptions = {
    key: RAZORPAY_KEY_ID,
    amount: Math.round(orderData.totalAmount * 100), // Amount in paise
    currency: 'INR',
    name: 'Atpata Spices',
    description: `Order for ${orderData.items.length} items`,
    handler: (response: RazorpayResponse) => {
      handlePaymentSuccess(response, orderData);
    },
    prefill: {
      name: orderData.customerInfo.name,
      email: orderData.customerInfo.email,
      contact: orderData.customerInfo.phone,
    },
    notes: {
      address: orderData.customerInfo.address,
    },
    theme: {
      color: '#D97706', // Amber color matching your theme
    },
    modal: {
      ondismiss: () => {
        console.log('Payment modal dismissed');
      },
    },
  };

  const razorpay = new (window as any).Razorpay(options);
  razorpay.open();
};

// Handle successful payment
const handlePaymentSuccess = async (response: RazorpayResponse, orderData: OrderData) => {
  try {
    // Prepare order data for Firebase
    const firebaseOrderData = {
      paymentId: response.razorpay_payment_id,
      // Only include orderId if it exists, otherwise omit it
      ...(response.razorpay_order_id && { orderId: response.razorpay_order_id }),
      // Only include signature if it exists, otherwise omit it
      ...(response.razorpay_signature && { signature: response.razorpay_signature }),
      items: orderData.items,
      customerInfo: orderData.customerInfo,
      orderSummary: {
        subtotal: orderData.totalAmount / 1.18, // Remove tax to get subtotal
        tax: orderData.totalAmount - (orderData.totalAmount / 1.18),
        total: orderData.totalAmount,
        totalItems: orderData.items.reduce((sum, item) => sum + item.quantity, 0),
      },
      status: 'confirmed' as const,
    };

    // Save order to Firebase
    await saveOrderToFirebase(firebaseOrderData);
    
    // Send order confirmation emails
    await sendOrderEmails(firebaseOrderData);
    
    // Redirect to success page with payment ID
    window.location.href = `/order-success?paymentId=${response.razorpay_payment_id}`;
    
  } catch (error) {
    console.error('Error saving order:', error);
    // Still redirect to success page even if Firebase save fails
    window.location.href = `/order-success?paymentId=${response.razorpay_payment_id}`;
  }
};

// Generate order receipt number
export const generateOrderId = (): string => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  return `ATP${timestamp}${random}`;
};

// Calculate total with tax
export const calculateOrderTotal = (subtotal: number, taxRate: number = 0.18): number => {
  return subtotal * (1 + taxRate);
};

// Validate customer information
export const validateCustomerInfo = (customerInfo: OrderData['customerInfo']): string[] => {
  const errors: string[] = [];
  
  if (!customerInfo.name.trim()) {
    errors.push('Name is required');
  }
  
  if (!customerInfo.email.trim()) {
    errors.push('Email is required');
  } else if (!/\S+@\S+\.\S+/.test(customerInfo.email)) {
    errors.push('Please enter a valid email address');
  }
  
  if (!customerInfo.phone.trim()) {
    errors.push('Phone number is required');
  } else if (!/^\d{10}$/.test(customerInfo.phone.replace(/\D/g, ''))) {
    errors.push('Please enter a valid 10-digit phone number');
  }
  
  if (!customerInfo.address.trim()) {
    errors.push('Address is required');
  }
  
  return errors;
};
