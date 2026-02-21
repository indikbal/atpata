import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CheckoutForm from '../components/CheckoutForm';

const CartPage = () => {
  const { state, removeFromCart, updateQuantity, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const formatPrice = (price: string) => {
    return parseFloat(price.replace('₹ ', ''));
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-24">
          <div className="container mx-auto px-4 md:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <ShoppingBag size={120} className="mx-auto text-gray-600 mb-8" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-600">
                Your Cart is Empty
              </h1>
              <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
                Looks like you haven't added any delicious masalas to your cart yet.
              </p>
              <Link to="/products">
                <motion.button
                  className="bg-gradient-to-r from-amber-600 to-red-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:from-amber-500 hover:to-red-500 transition-all duration-300 flex items-center gap-2 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Shopping
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-24">
        <div className="container mx-auto px-4 md:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            ref={ref}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-600">
              Shopping Cart
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-red-500 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Review your selected items and proceed to checkout when ready.
            </p>
          </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items Table */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-900/50 backdrop-blur-md rounded-xl border border-gray-800/50 overflow-hidden"
            >
              <div className="p-6 border-b border-gray-800/50">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-white">Cart Items ({state.totalItems})</h2>
                  <button
                    onClick={clearCart}
                    className="text-red-400 hover:text-red-300 transition-colors duration-300 flex items-center gap-2"
                  >
                    <Trash2 size={18} />
                    Clear All
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800/50">
                    <tr>
                      <th className="text-left p-4 text-gray-300 font-medium">Product</th>
                      <th className="text-center p-4 text-gray-300 font-medium">Price</th>
                      <th className="text-center p-4 text-gray-300 font-medium">Quantity</th>
                      <th className="text-center p-4 text-gray-300 font-medium">Total</th>
                      <th className="text-center p-4 text-gray-300 font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.items.map((item, index) => (
                      <motion.tr
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="border-b border-gray-800/30 hover:bg-gray-800/20 transition-colors"
                      >
                        <td className="p-4">
                          <div className="flex items-center gap-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-contain rounded-lg bg-gray-800/50"
                            />
                            <div>
                              <h3 className="text-white font-medium">{item.name}</h3>
                              <p className="text-gray-400 text-sm">{item.description}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <span className="text-amber-400 font-medium">{item.price}</span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              className="bg-gray-700 hover:bg-gray-600 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="text-white font-medium w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              className="bg-gray-700 hover:bg-gray-600 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <span className="text-amber-400 font-medium">
                            ₹ {(formatPrice(item.price) * item.quantity).toFixed(0)}
                          </span>
                        </td>
                        <td className="p-4 text-center">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-400 hover:text-red-300 transition-colors duration-300"
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-900/50 backdrop-blur-md rounded-xl border border-gray-800/50 p-6 sticky top-24"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Subtotal ({state.totalItems} items)</span>
                  <span className="text-white font-medium">₹ {state.totalPrice.toFixed(0)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Shipping</span>
                  <span className="text-green-400 font-medium">Free</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Tax</span>
                  <span className="text-white font-medium">₹ {(state.totalPrice * 0.18).toFixed(0)}</span>
                </div>
                <hr className="border-gray-700" />
                <div className="flex justify-between items-center text-lg">
                  <span className="text-white font-bold">Total</span>
                  <span className="text-amber-400 font-bold">₹ {(state.totalPrice * 1.18).toFixed(0)}</span>
                </div>
              </div>

              <motion.button
                onClick={() => setShowCheckout(true)}
                className="w-full bg-gradient-to-r from-amber-600 to-red-600 text-white py-3 rounded-lg text-lg font-medium hover:from-amber-500 hover:to-red-500 transition-all duration-300 flex items-center justify-center gap-2 mb-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Proceed to Checkout
                <ArrowRight size={20} />
              </motion.button>

              <Link to="/products">
                <button className="w-full bg-transparent border border-amber-500 text-amber-400 py-3 rounded-lg text-lg font-medium hover:bg-amber-500/10 transition-all duration-300">
                  Continue Shopping
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
        </div>
      </div>
      <Footer />
      
      {/* Checkout Modal */}
      {showCheckout && (
        <CheckoutForm onClose={() => setShowCheckout(false)} />
      )}
    </div>
  );
};

export default CartPage;
