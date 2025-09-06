import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const TermsAndConditions = () => {
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
            Terms and Conditions
          </motion.h1>
          <motion.div 
            className="flex items-center justify-center space-x-2 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span>Home</span>
            <ChevronRight size={18} />
            <span>Terms and Conditions</span>
          </motion.div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-950/10 backdrop-blur-md rounded-2xl shadow-xl border border-gray-700/50 p-8 md:p-12">
            <h1 className="text-4xl font-bold text-white mb-2">Terms and Conditions</h1>
            <p className="text-gray-300 mb-8">Last updated on Sep 3 2025</p>
            
            <div className="prose prose-lg max-w-none text-gray-200 space-y-6">
              <p>
                For the purpose of these Terms and Conditions, The term "we", "us", "our" used anywhere on this page shall mean <strong>BLOOMRUSH FOODS PRIVATE LIMITED</strong>, whose registered/operational office is 165 AGS LAYOUT, RMV 2ND STAGE Bengaluru KARNATAKA 560094. "you", "your", "user", "visitor" shall mean any natural or legal person who is visiting our website and/or agreed to purchase from us.
              </p>
              
              <p>
                Your use of the website and/or purchase from us are governed by following Terms and Conditions:
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-700/50 border border-gray-600/30 p-4 rounded-lg">
                  <p>
                    The content of the pages of this website is subject to change without notice.
                  </p>
                </div>
                
                <div className="bg-gray-700/50 border border-gray-600/30 p-4 rounded-lg">
                  <p>
                    Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
                  </p>
                </div>
                
                <div className="bg-gray-700/50 border border-gray-600/30 p-4 rounded-lg">
                  <p>
                    Your use of any information or materials on our website and/or product pages is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through our website and/or product pages meet your specific requirements.
                  </p>
                </div>
                
                <div className="bg-gray-700/50 border border-gray-600/30 p-4 rounded-lg">
                  <p>
                    Our website contains material which is owned by or licensed to us. This material includes, but are not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
                  </p>
                </div>
                
                <div className="bg-gray-700/50 border border-gray-600/30 p-4 rounded-lg">
                  <p>
                    All trademarks reproduced in our website which are not the property of, or licensed to, the operator are acknowledged on the website.
                  </p>
                </div>
                
                <div className="bg-gray-700/50 border border-gray-600/30 p-4 rounded-lg">
                  <p>
                    Unauthorized use of information provided by us shall give rise to a claim for damages and/or be a criminal offense.
                  </p>
                </div>
                
                <div className="bg-gray-700/50 border border-gray-600/30 p-4 rounded-lg">
                  <p>
                    From time to time our website may also include links to other websites. These links are provided for your convenience to provide further information.
                  </p>
                </div>
                
                <div className="bg-gray-700/50 border border-gray-600/30 p-4 rounded-lg">
                  <p>
                    You may not create a link to our website from another website or document without BLOOMRUSH FOODS PRIVATE LIMITED's prior written consent.
                  </p>
                </div>
                
                <div className="bg-gray-700/50 border border-gray-600/30 p-4 rounded-lg">
                  <p>
                    Any dispute arising out of use of our website and/or purchase with us and/or any engagement with us is subject to the laws of India.
                  </p>
                </div>
                
                <div className="bg-gray-700/50 border border-gray-600/30 p-4 rounded-lg">
                  <p>
                    We, shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-600/50">
                <p className="text-center text-gray-300">
                  If you have any questions about these Terms and Conditions, please contact us at{' '}
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

export default TermsAndConditions;
