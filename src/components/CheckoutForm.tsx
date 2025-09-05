import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, CreditCard, AlertCircle } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { initiatePayment, validateCustomerInfo, OrderData } from '../services/razorpayService';

interface CheckoutFormProps {
  onClose: () => void;
}

const CheckoutForm = ({ onClose }: CheckoutFormProps) => {
  const { state, clearCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const subtotal = state.totalPrice;
  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  const handleInputChange = (field: string, value: string) => {
    setCustomerInfo(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const handlePayment = async () => {
    // Validate customer information
    const validationErrors = validateCustomerInfo(customerInfo);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    setErrors([]);

    try {
      const orderData: OrderData = {
        items: state.items,
        totalAmount: total,
        customerInfo,
      };

      await initiatePayment(orderData);
      
      // Clear cart after successful payment initiation
      clearCart();
      onClose();
      
    } catch (error) {
      console.error('Payment initiation failed:', error);
      setErrors([error instanceof Error ? error.message : 'Payment failed. Please try again.']);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-gray-900 rounded-xl border border-gray-800 max-w-md w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Checkout</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Order Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Subtotal ({state.totalItems} items)</span>
                <span className="text-white">₹ {subtotal.toFixed(0)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Tax (18%)</span>
                <span className="text-white">₹ {tax.toFixed(0)}</span>
              </div>
              <hr className="border-gray-700" />
              <div className="flex justify-between font-bold">
                <span className="text-white">Total</span>
                <span className="text-amber-400">₹ {total.toFixed(0)}</span>
              </div>
            </div>
          </div>

          {/* Error Messages */}
          {errors.length > 0 && (
            <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle size={16} className="text-red-400" />
                <span className="text-red-400 font-medium">Please fix the following errors:</span>
              </div>
              <ul className="text-red-300 text-sm space-y-1">
                {errors.map((error, index) => (
                  <li key={index}>• {error}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Customer Information Form */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Customer Information</h3>
            
            <div className="relative">
              <User size={18} className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Full Name"
                value={customerInfo.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-gray-400"
              />
            </div>

            <div className="relative">
              <Mail size={18} className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                placeholder="Email Address"
                value={customerInfo.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-gray-400"
              />
            </div>

            <div className="relative">
              <Phone size={18} className="absolute left-3 top-3 text-gray-400" />
              <input
                type="tel"
                placeholder="Phone Number"
                value={customerInfo.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-gray-400"
              />
            </div>

            <div className="relative">
              <MapPin size={18} className="absolute left-3 top-3 text-gray-400" />
              <textarea
                placeholder="Delivery Address"
                value={customerInfo.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                rows={3}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
              />
            </div>
          </div>

          {/* Payment Button */}
          <div className="mt-6 space-y-3">
            <motion.button
              onClick={handlePayment}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-amber-600 to-red-600 text-white py-3 rounded-lg text-lg font-medium hover:from-amber-500 hover:to-red-500 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Processing...
                </>
              ) : (
                <>
                  <CreditCard size={20} />
                  Pay ₹ {total.toFixed(0)}
                </>
              )}
            </motion.button>

            <button
              onClick={onClose}
              className="w-full bg-transparent border border-gray-600 text-gray-300 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition-all duration-300"
            >
              Cancel
            </button>
          </div>

          {/* Security Note */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-400">
              🔒 Secured by Razorpay • Your payment information is encrypted and secure
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CheckoutForm;
