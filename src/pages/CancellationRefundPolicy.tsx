import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const CancellationRefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-800 to-orange-900">
      <Navbar />

      <section className="relative pb-20 pt-40 bg-gray-950 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-red-800/10 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Cancellation & Refund Policy
          </motion.h1>
          <motion.div 
            className="flex items-center justify-center space-x-2 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span>Home</span>
            <ChevronRight size={18} />
            <span>Cancellation & Refund Policy</span>
          </motion.div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-950/10 backdrop-blur-md rounded-2xl shadow-xl border border-gray-700/50 p-8 md:p-12">
            <h1 className="text-4xl font-bold text-white mb-2">Cancellation & Refund Policy</h1>
            <p className="text-gray-300 mb-8">Last updated on Sep 3 2025</p>
            
            <div className="prose prose-lg max-w-none text-gray-200 space-y-6">
              <p>
                <strong>BLOOMRUSH FOODS PRIVATE LIMITED</strong> believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-700/50 border border-gray-600/30 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-400 mb-3">Cancellation Policy</h3>
                  <p className="mb-3">
                    Cancellations will be considered only if the request is made within <strong>30 days of placing the order</strong>. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.
                  </p>
                  <p>
                    BLOOMRUSH FOODS PRIVATE LIMITED does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.
                  </p>
                </div>
                
                <div className="bg-gray-700/50 border border-gray-600/30 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-400 mb-3">Damaged or Defective Items</h3>
                  <p>
                    In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within <strong>30 days of receipt of the products</strong>.
                  </p>
                </div>
                
                <div className="bg-gray-700/50 border border-gray-600/30 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-400 mb-3">Product Quality Issues</h3>
                  <p>
                    In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within <strong>30 days of receiving the product</strong>. The Customer Service Team after looking into your complaint will take an appropriate decision.
                  </p>
                </div>
                
                <div className="bg-gray-700/50 border border-gray-600/30 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-400 mb-3">Warranty Products</h3>
                  <p>
                    In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them.
                  </p>
                </div>
                
                <div className="bg-gray-700/50 border border-gray-600/30 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-400 mb-3">Refund Processing</h3>
                  <p>
                    In case of any Refunds approved by the BLOOMRUSH FOODS PRIVATE LIMITED, it'll take <strong>30 days</strong> for the refund to be processed to the end customer.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-600/50">
                <p className="text-center text-gray-300">
                  If you have any questions about this Cancellation & Refund Policy, please contact us at{' '}
                  <a href="mailto:hello@atpata.in" className="text-amber-400 hover:text-amber-300 font-medium">
                    hello@atpata.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CancellationRefundPolicy;
