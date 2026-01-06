import emailjs from '@emailjs/browser';
import { OrderData } from './firebaseService';

// EmailJS configuration
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID_CUSTOMER = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CUSTOMER;
const EMAILJS_TEMPLATE_ID_ADMIN = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ADMIN;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;

// Check if EmailJS is properly configured
export const isEmailConfigured = (): boolean => {
  const configured = !!(EMAILJS_SERVICE_ID && EMAILJS_PUBLIC_KEY && EMAILJS_TEMPLATE_ID_CUSTOMER);
  if (!configured) {
    console.warn('EmailJS not fully configured. Missing:', {
      serviceId: !EMAILJS_SERVICE_ID,
      publicKey: !EMAILJS_PUBLIC_KEY,
      customerTemplate: !EMAILJS_TEMPLATE_ID_CUSTOMER,
      adminTemplate: !EMAILJS_TEMPLATE_ID_ADMIN,
      adminEmail: !ADMIN_EMAIL,
    });
  }
  return configured;
};

// Initialize EmailJS
export const initializeEmailJS = () => {
  if (EMAILJS_PUBLIC_KEY) {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    console.log('EmailJS initialized successfully');
  } else {
    console.error('EmailJS PUBLIC_KEY is missing - emails will not work');
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
  // Validate configuration before attempting to send
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID_CUSTOMER || !EMAILJS_PUBLIC_KEY) {
    console.error('EmailJS customer email config missing:', {
      serviceId: !!EMAILJS_SERVICE_ID,
      templateId: !!EMAILJS_TEMPLATE_ID_CUSTOMER,
      publicKey: !!EMAILJS_PUBLIC_KEY,
    });
    throw new Error('EmailJS configuration incomplete for customer emails');
  }

  try {
    console.log('Sending customer confirmation email to:', orderData.customerInfo.email);
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

    console.log('Customer confirmation email sent successfully to:', orderData.customerInfo.email);
  } catch (error: any) {
    console.error('Error sending customer confirmation email:', {
      error: error?.text || error?.message || error,
      status: error?.status,
      toEmail: orderData.customerInfo.email,
    });
    throw error;
  }
};

// Send admin order notification email
export const sendAdminNotificationEmail = async (orderData: OrderData): Promise<void> => {
  // Validate configuration before attempting to send
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID_ADMIN || !EMAILJS_PUBLIC_KEY || !ADMIN_EMAIL) {
    console.error('EmailJS admin email config missing:', {
      serviceId: !!EMAILJS_SERVICE_ID,
      templateId: !!EMAILJS_TEMPLATE_ID_ADMIN,
      publicKey: !!EMAILJS_PUBLIC_KEY,
      adminEmail: !!ADMIN_EMAIL,
    });
    throw new Error('EmailJS configuration incomplete for admin emails');
  }

  try {
    console.log('Sending admin notification email to:', ADMIN_EMAIL);
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

    console.log('Admin notification email sent successfully to:', ADMIN_EMAIL);
  } catch (error: any) {
    console.error('Error sending admin notification email:', {
      error: error?.text || error?.message || error,
      status: error?.status,
      toEmail: ADMIN_EMAIL,
    });
    throw error;
  }
};

// Send both customer and admin emails
export const sendOrderEmails = async (orderData: OrderData): Promise<void> => {
  // Check if email is configured before attempting
  if (!isEmailConfigured()) {
    console.error('EmailJS is not configured - skipping email notifications');
    return;
  }

  const results = await Promise.allSettled([
    sendCustomerConfirmationEmail(orderData),
    sendAdminNotificationEmail(orderData)
  ]);

  // Log results for debugging
  const customerResult = results[0];
  const adminResult = results[1];

  if (customerResult.status === 'rejected') {
    console.error('Customer email failed:', customerResult.reason);
  }
  if (adminResult.status === 'rejected') {
    console.error('Admin email failed:', adminResult.reason);
  }

  const successCount = results.filter(r => r.status === 'fulfilled').length;
  console.log(`Order emails: ${successCount}/2 sent successfully`);
};
