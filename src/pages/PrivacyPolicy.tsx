import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const PrivacyPolicy = () => {
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
            Privacy Policy
          </motion.h1>
          <motion.div 
            className="flex items-center justify-center space-x-2 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span>Home</span>
            <ChevronRight size={18} />
            <span>Privacy Policy</span>
          </motion.div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-950/10 backdrop-blur-md rounded-2xl shadow-xl border border-gray-700/50 p-8 md:p-12">
            <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
            <p className="text-gray-300 mb-8">Last updated on Sep 3 2025</p>
            
            <div className="prose prose-lg max-w-none text-gray-200 space-y-6">
              <p>
                This privacy policy sets out how <strong>BLOOMRUSH FOODS PRIVATE LIMITED</strong> uses and protects any information that you give BLOOMRUSH FOODS PRIVATE LIMITED when you visit their website and/or agree to purchase from them.
              </p>
              
              <p>
                BLOOMRUSH FOODS PRIVATE LIMITED is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, and then you can be assured that it will only be used in accordance with this privacy statement.
              </p>
              
              <p>
                BLOOMRUSH FOODS PRIVATE LIMITED may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you adhere to these changes.
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-700/50 border border-gray-600/30 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-400 mb-3">Information We Collect</h3>
                  <p className="mb-2">We may collect the following information:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Name</li>
                    <li>Contact information including email address</li>
                    <li>Demographic information such as postcode, preferences and interests, if required</li>
                    <li>Other information relevant to customer surveys and/or offers</li>
                  </ul>
                </div>
                
                <div className="bg-gray-700/50 border border-gray-600/30 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-400 mb-3">How We Use Your Information</h3>
                  <p className="mb-3">We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Internal record keeping</li>
                    <li>We may use the information to improve our products and services</li>
                    <li>We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided</li>
                    <li>From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail</li>
                    <li>We may use the information to customise the website according to your interests</li>
                  </ul>
                </div>
                
                <div className="bg-gray-700/50 border border-gray-600/30 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-400 mb-3">Data Security</h3>
                  <p>
                    We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure we have put in suitable measures.
                  </p>
                </div>
                
                <div className="bg-gray-700/50 border border-gray-600/30 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-400 mb-3">How We Use Cookies</h3>
                  <p className="mb-3">
                    A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.
                  </p>
                  <p className="mb-3">
                    We use traffic log cookies to identify which pages are being used. This helps us analyze data about webpage traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.
                  </p>
                  <p className="mb-3">
                    Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.
                  </p>
                  <p>
                    You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
                  </p>
                </div>
                
                <div className="bg-gray-700/50 border border-gray-600/30 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-400 mb-3">Controlling Your Personal Information</h3>
                  <p className="mb-3">You may choose to restrict the collection or use of your personal information in the following ways:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
                    <li>Whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes</li>
                    <li>If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at <a href="mailto:bloomrushfoods@gmail.com" className="text-amber-400 hover:text-amber-300">bloomrushfoods@gmail.com</a></li>
                  </ul>
                  <p className="mb-3">
                    We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.
                  </p>
                  <p>
                    If you believe that any information we are holding on you is incorrect or incomplete, please write to <strong>165 AGS LAYOUT, RMV 2ND STAGE Bengaluru KARNATAKA 560094</strong> or contact us at <strong>9971873128</strong> or <a href="mailto:bloomrushfoods@gmail.com" className="text-amber-400 hover:text-amber-300">bloomrushfoods@gmail.com</a> as soon as possible. We will promptly correct any information found to be incorrect.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-600/50">
                <p className="text-center text-gray-300">
                  If you have any questions about this Privacy Policy, please contact us at{' '}
                  <a href="mailto:bloomrushfoods@gmail.com" className="text-amber-400 hover:text-amber-300 font-medium">
                    bloomrushfoods@gmail.com
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

export default PrivacyPolicy;
