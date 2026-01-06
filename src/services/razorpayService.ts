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
  subtotal: number;
  tax: number;
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

// Track payment state to prevent duplicate payments
let isPaymentInProgress = false;

export const isPaymentProcessing = (): boolean => isPaymentInProgress;

// Initialize Razorpay payment
export const initiatePayment = async (
  orderData: OrderData,
  onSuccess: () => void
): Promise<void> => {
  // Prevent duplicate payments
  if (isPaymentInProgress) {
    throw new Error('Payment is already in progress. Please wait.');
  }
  const isScriptLoaded = await loadRazorpayScript();
  
  if (!isScriptLoaded) {
    throw new Error('Razorpay SDK failed to load. Please check your internet connection.');
  }

  if (!RAZORPAY_KEY_ID) {
    throw new Error('Razorpay key not configured. Please check environment variables.');
  }

  isPaymentInProgress = true;

  const options: RazorpayOptions = {
    key: RAZORPAY_KEY_ID,
    amount: Math.round(orderData.totalAmount * 100), // Amount in paise
    currency: 'INR',
    name: 'Atpata Spices',
    description: `Order for ${orderData.items.length} items`,
    handler: (response: RazorpayResponse) => {
      isPaymentInProgress = false;
      onSuccess(); // Clear cart only after successful payment
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
        isPaymentInProgress = false;
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
    // Prepare order data for Firebase - use pre-calculated values for precision
    const firebaseOrderData = {
      paymentId: response.razorpay_payment_id,
      // Only include orderId if it exists, otherwise omit it
      ...(response.razorpay_order_id && { orderId: response.razorpay_order_id }),
      // Only include signature if it exists, otherwise omit it
      ...(response.razorpay_signature && { signature: response.razorpay_signature }),
      items: orderData.items,
      customerInfo: orderData.customerInfo,
      orderSummary: {
        subtotal: orderData.subtotal,
        tax: orderData.tax,
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

// Minimum order amount in INR
const MINIMUM_ORDER_AMOUNT = 100;

// Validate customer information
export const validateCustomerInfo = (
  customerInfo: OrderData['customerInfo'],
  subtotal?: number
): string[] => {
  const errors: string[] = [];
  
  // Minimum order validation
  if (subtotal !== undefined && subtotal < MINIMUM_ORDER_AMOUNT) {
    errors.push(`Minimum order amount is ₹${MINIMUM_ORDER_AMOUNT}`);
  }
  
  if (!customerInfo.name.trim()) {
    errors.push('Name is required');
  } else if (customerInfo.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters');
  }
  
  if (!customerInfo.email.trim()) {
    errors.push('Email is required');
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(customerInfo.email)) {
    errors.push('Please enter a valid email address');
  }
  
  if (!customerInfo.phone.trim()) {
    errors.push('Phone number is required');
  } else {
    const digitsOnly = customerInfo.phone.replace(/\D/g, '');
    // Accept 10-digit Indian numbers or international numbers (10-15 digits)
    if (digitsOnly.length < 10 || digitsOnly.length > 15) {
      errors.push('Please enter a valid phone number (10-15 digits)');
    }
  }
  
  if (!customerInfo.address.trim()) {
    errors.push('Address is required');
  } else if (customerInfo.address.trim().length < 10) {
    errors.push('Please enter a complete delivery address (at least 10 characters)');
  }
  
  return errors;
};
