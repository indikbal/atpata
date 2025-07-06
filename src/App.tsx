import { useEffect } from 'react';
import { motion } from 'framer-motion';
import './index.css';

// Components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import StorySection from './components/StorySection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';
import BulkOrderSection from './components/BulkOrderSection';
import SplashCursor from './blocks/Animations/SplashCursor/SplashCursor';

export function App() {
  useEffect(() => {
    // Add Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Apply fonts to body
    document.body.style.fontFamily = 'Poppins, sans-serif';
    
    // Set dark mode background
    document.body.style.backgroundColor = '#121212';
    document.body.style.color = '#ffffff';
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white overflow-x-hidden bg-gradient-to-t from-red-950/10  to-orange-950/40"
    >
      <SplashCursor />

      <Navbar />
      <HeroSection />
      <AboutSection />
      <motion.div className="">
       
      </motion.div>
      <ProductsSection />
      <StorySection />
      <section id="products" className="relative">
        <img src="../src/img/spices-bowl.png" alt="" className="w-full h-full object-cover opacity-90"/>
        </section>
      <GallerySection />
      <BulkOrderSection />
      <Footer />
    </motion.div>
  );
}

export default App;
