import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CircleCheck, Package } from 'lucide-react';

const CTASection = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send the form data to a server here
    console.log('Form submitted:', formData);
    
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to Spice Up Your Business?
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-red-500 mb-6"></div>
              <p className="text-gray-300 mb-8">
                We offer bulk ordering options for restaurants, catering services, and retail stores. Get in touch to discuss how Atpata can add a burst of flavor to your culinary offerings.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CircleCheck className="text-amber-500 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-300">Custom packaging available for business partners</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CircleCheck className="text-amber-500 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-300">Volume discounts for regular bulk orders</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CircleCheck className="text-amber-500 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-300">Chef consultations for menu integration</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CircleCheck className="text-amber-500 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-300">Fast and reliable nationwide shipping</p>
                </div>
              </div>
              
              <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700">
                <div className="flex items-center space-x-3 mb-3">
                  <Package className="text-amber-500" size={24} />
                  <h3 className="text-xl font-medium text-white">Minimum Order: 50 Units</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  We specialize in fulfilling large orders for businesses. For smaller quantities, please check our retail partners or online store.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 md:p-8 shadow-xl border border-gray-800">
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CircleCheck className="text-green-500" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-gray-300 mb-4">
                    We've received your inquiry and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', company: '', message: '' });
                    }}
                    className="text-amber-500 hover:text-amber-400 transition-colors"
                  >
                    Submit another inquiry
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-white mb-6">Get a Quote</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white resize-none"
                        ></textarea>
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full py-3 px-6 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white font-medium rounded-md transition-all duration-300 shadow-lg hover:shadow-amber-500/20"
                      >
                        Send Inquiry
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
