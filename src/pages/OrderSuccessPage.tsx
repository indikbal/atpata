import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Package, Truck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getOrderFromFirebase, isValidPaymentId } from '../services/firebaseService';
import type { OrderData } from '../services/firebaseService';

const OrderSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrderData = async () => {
      const paymentId = searchParams.get('paymentId');
      
      // Check if paymentId exists and is valid
      if (!paymentId) {
        setError('No payment ID provided');
        setLoading(false);
        return;
      }

      if (!isValidPaymentId(paymentId)) {
        setError('Invalid payment ID format');
        setLoading(false);
        return;
      }

      try {
        const order = await getOrderFromFirebase(paymentId);
        if (order) {
          setOrderData(order);
        } else {
          setError('Order not found');
        }
      } catch (err) {
        console.error('Error fetching order:', err);
        setError('Failed to load order details');
      } finally {
        setLoading(false);
      }
    };

    fetchOrderData();
  }, [searchParams]);

  // Loading state
  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-20 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mx-auto mb-4"></div>
            <h1 className="text-2xl text-white mb-4">Loading order details...</h1>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Error state
  if (error || !orderData) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl text-white mb-4">{error || 'Order not found'}</h1>
            <p className="text-gray-400 mb-6">
              {error === 'No payment ID provided' 
                ? 'Please access this page through a valid payment confirmation.'
                : 'The order you are looking for does not exist or has been removed.'
              }
            </p>
            <Link to="/" className="text-amber-400 hover:text-amber-300 underline">
              Return to Home
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const orderDate = orderData.createdAt 
    ? new Date(orderData.createdAt.seconds * 1000).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    : new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-20">
        <div className="container mx-auto px-4 md:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Success Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6"
              >
                <CheckCircle size={40} className="text-white" />
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-amber-400">
                Order Confirmed!
              </h1>
              
              <p className="text-gray-300 text-lg mb-6">
                Thank you for your order! We've received your payment and will start preparing your spices.
              </p>
              
              <div className="bg-gray-900/50 backdrop-blur-md rounded-xl border border-gray-800/50 p-6 inline-block">
                <p className="text-gray-400 text-sm">Payment ID</p>
                <p className="text-white font-mono text-lg">{orderData.paymentId}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Order Details */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gray-900/50 backdrop-blur-md rounded-xl border border-gray-800/50 p-6"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Order Details</h2>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-gray-400 text-sm">Order Date</p>
                    <p className="text-white">{orderDate}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-400 text-sm">Total Amount</p>
                    <p className="text-amber-400 text-xl font-bold">₹ {orderData.orderSummary.total.toFixed(0)}</p>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Items Ordered</h3>
                  <div className="space-y-3">
                    {orderData.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div>
                          <p className="text-white font-medium">{item.name}</p>
                          <p className="text-gray-400 text-sm">Qty: {item.quantity}</p>
                        </div>
                        <p className="text-amber-400">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Delivery Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gray-900/50 backdrop-blur-md rounded-xl border border-gray-800/50 p-6"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Delivery Information</h2>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-gray-400 text-sm">Delivery Address</p>
                    <p className="text-white">{orderData.customerInfo.name}</p>
                    <p className="text-gray-300">{orderData.customerInfo.address}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-400 text-sm">Contact</p>
                    <p className="text-white">{orderData.customerInfo.phone}</p>
                    <p className="text-white">{orderData.customerInfo.email}</p>
                  </div>
                </div>

                {/* Order Status Timeline */}
                <div className="border-t border-gray-700 pt-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Order Status</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Order Confirmed</p>
                        <p className="text-gray-400 text-sm">Payment received successfully</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                        <Package size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Preparing Order</p>
                        <p className="text-gray-400 text-sm">Your spices are being prepared</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                        <Truck size={16} className="text-gray-400" />
                      </div>
                      <div>
                        <p className="text-gray-400 font-medium">Out for Delivery</p>
                        <p className="text-gray-500 text-sm">Expected in 3-5 business days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mt-12 space-y-4"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/products">
                  <motion.button
                    className="bg-gradient-to-r from-amber-600 to-red-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:from-amber-500 hover:to-red-500 transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Continue Shopping
                    <ArrowRight size={20} />
                  </motion.button>
                </Link>
                
                <Link to="/">
                  <button className="bg-transparent border border-amber-500 text-amber-400 px-8 py-3 rounded-lg text-lg font-medium hover:bg-amber-500/10 transition-all duration-300">
                    Back to Home
                  </button>
                </Link>
              </div>
              
              <p className="text-gray-400 text-sm">
                You will receive order updates via email and SMS
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderSuccessPage;
