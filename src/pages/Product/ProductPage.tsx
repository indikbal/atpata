import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

// Components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BulkOrderSection from '../../components/BulkOrderSection';

// Assuming you have a type definition for your product
interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  color: string;
}

interface ProductPageProps {
  product: Product;
  steps?: { title: string; description: string }[];
}

const ProductPage: React.FC<ProductPageProps> = ({ product, steps }) => {
  useEffect(() => {
    // Add Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Apply fonts to body
    document.body.style.fontFamily = 'Poppins, sans-serif';
    
    // Set dark mode background
    document.body.style.backgroundColor = '#000';
    document.body.style.color = '#ffffff';
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="bg-black">
      <Navbar />

      {/* Inner Banner Section */}
      <section className="relative pt-40 pb-20 bg-gray-900/50 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-red-800/10 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.h1 
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {product.name}
          </motion.h1>
          <motion.div 
            className="flex items-center justify-center space-x-2 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span>Home</span>
            <ChevronRight size={18} />
            <span>Products</span>
            <ChevronRight size={18} />
            <span className="text-amber-500">{product.name}</span>
          </motion.div>
        </div>
      </section>

      {/* About This Product Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src={product.image} alt={product.name} className="w-[400px] h-auto object-contain rounded-lg shadow-lg transform rotate-6" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-white">About This Product</h2>
              <div className={`w-20 h-1 bg-gradient-to-r ${product.color} mb-6`}></div>
              <p className="text-gray-300 mb-4">
              {product.description
                .split(/\n\s*\n/) // Split by double line breaks (paragraphs)
                .map((para, idx) => (
                  <p className="text-gray-300 mb-4" key={idx}>
                    {para}
                  </p>
                ))}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Use Process Section */}
      <section className="py-20 bg-gray-900/20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-white">How to Use</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-red-500 mx-auto"></div>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {(steps ?? [
              { title: `Step 1`, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum.' },
              { title: `Step 2`, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum.' },
              { title: `Step 3`, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum.' },
            ]).map((step, idx) => (
              <motion.div 
                key={idx}
                className="bg-orange-950/20 p-8 rounded-lg border border-gray-800/50"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx + 1) * 0.2 }}
              >
                <div className="text-4xl font-bold text-amber-500 mb-4">{`0${idx + 1}`}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BulkOrderSection />
      <Footer />
    </div>
  );
};

export default ProductPage;
