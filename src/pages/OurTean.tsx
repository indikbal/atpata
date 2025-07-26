import { useEffect } from 'react';
import { motion } from 'framer-motion';

// Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BulkOrderSection from '../components/BulkOrderSection';
import TeamSection from '../components/TeamSection';
import SplashCursor from '../blocks/Animations/SplashCursor/SplashCursor';
import { ChevronRight } from 'lucide-react';

const OurTeamPage = () => {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white overflow-x-hidden"
    >
      <SplashCursor />

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
            Our Team
          </motion.h1>
          <motion.div 
            className="flex items-center justify-center space-x-2 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span>Home</span>
            <ChevronRight size={18} />
            <span>Our Team</span>
          </motion.div>
        </div>
      </section>



      <TeamSection />
      <BulkOrderSection />
      <Footer />
    </motion.div>
  );
};

export default OurTeamPage;
