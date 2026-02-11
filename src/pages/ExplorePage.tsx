import { useEffect } from 'react';
import { motion } from 'framer-motion';
import IndiaMapExplorer from '../components/IndiaMap/IndiaMapExplorer';
import SplashCursor from '../blocks/Animations/SplashCursor/SplashCursor';

const ExplorePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.backgroundColor = '#000';
    document.body.style.color = '#ffffff';
    // Prevent scrolling on this page
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-black text-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -left-40 top-20 w-[500px] h-[500px] bg-gradient-to-br from-amber-600/20 to-red-800/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -right-40 bottom-20 w-[500px] h-[500px] bg-gradient-to-br from-red-600/15 to-amber-800/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <div className="absolute inset-0  z-0">
        <div className="absolute inset-0 opacity-20">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-40 h-40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: ['#FF4500', '#8B0000', '#FF8C00', '#B22222'][Math.floor(Math.random() * 2)],
                mixBlendMode: 'color-dodge',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.5, 1],
                opacity: [0, 0.3, 0.1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <SplashCursor />

      {/* Full Screen Map Explorer */}
      <IndiaMapExplorer className="w-full h-full" />
    </motion.div>
  );
};

export default ExplorePage;
