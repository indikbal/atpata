import emailjs from '@emailjs/browser';
import { OrderData } from './firebaseService';

// EmailJS configuration
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID_CUSTOMER = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CUSTOMER;
const EMAILJS_TEMPLATE_ID_ADMIN = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ADMIN;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;

// Initialize EmailJS
export const initializeEmailJS = () => {
  if (EMAILJS_PUBLIC_KEY) {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }
};

// Format order items for email
const formatOrderItems = (items: OrderData['items']): string => {
  return items.map(item => {
    // Remove ₹ symbol and any spaces, then parse as number
    const price = parseFloat(item.price.replace(/₹\s*/g, ''));
    const totalPrice = price * item.quantity;
    return `• ${item.name} - Quantity: ${item.quantity} - ₹${totalPrice.toFixed(2)}`;
  }).join('\n');
};

// Send customer order confirmation email
export const sendCustomerConfirmationEmail = async (orderData: OrderData): Promise<void> => {
  try {
    const templateParams = {
      to_email: orderData.customerInfo.email,
      customer_name: orderData.customerInfo.name,
      order_id: orderData.paymentId,
      order_items: formatOrderItems(orderData.items),
      total_amount: `₹${orderData.orderSummary.total}`,
      subtotal: `₹${orderData.orderSummary.subtotal.toFixed(2)}`,
      tax: `₹${orderData.orderSummary.tax.toFixed(2)}`,
      delivery_address: orderData.customerInfo.address,
      phone: orderData.customerInfo.phone,
      order_date: new Date().toLocaleDateString('en-IN'),
      company_name: 'Atpata Spices',
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_CUSTOMER,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Customer confirmation email sent successfully');
  } catch (error) {
    console.error('Error sending customer confirmation email:', error);
    throw error;
  }
};

// Send admin order notification email
export const sendAdminNotificationEmail = async (orderData: OrderData): Promise<void> => {
  try {
    const templateParams = {
      to_email: ADMIN_EMAIL,
      order_id: orderData.paymentId,
      customer_name: orderData.customerInfo.name,
      customer_email: orderData.customerInfo.email,
      customer_phone: orderData.customerInfo.phone,
      delivery_address: orderData.customerInfo.address,
      order_items: formatOrderItems(orderData.items),
      total_amount: `₹${orderData.orderSummary.total}`,
      subtotal: `₹${orderData.orderSummary.subtotal.toFixed(2)}`,
      tax: `₹${orderData.orderSummary.tax.toFixed(2)}`,
      total_items: orderData.orderSummary.totalItems,
      order_date: new Date().toLocaleDateString('en-IN'),
      order_time: new Date().toLocaleTimeString('en-IN'),
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_ADMIN,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Admin notification email sent successfully');
  } catch (error) {
    console.error('Error sending admin notification email:', error);
    throw error;
  }
};

// Send both customer and admin emails
export const sendOrderEmails = async (orderData: OrderData): Promise<void> => {
  try {
    // Send emails in parallel for better performance
    await Promise.all([
      sendCustomerConfirmationEmail(orderData),
      sendAdminNotificationEmail(orderData)
    ]);
    
    console.log('All order emails sent successfully');
  } catch (error) {
    console.error('Error sending order emails:', error);
    // Don't throw error to prevent order flow interruption
  }
};
