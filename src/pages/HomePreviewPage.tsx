import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Components
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import ProductsSection from '../components/ProductsSection';

import GallerySection from '../components/GallerySection';
import Footer from '../components/Footer';
import BulkOrderSection from '../components/BulkOrderSection';
import SplashCursor from '../blocks/Animations/SplashCursor/SplashCursor';
import IndiaMapExplorer from '../components/IndiaMap/IndiaMapExplorer';
import { allProducts } from '../data/stateProducts';

import spicesBowl from '../img/spices-bowl.png';

const floatingProductNames = allProducts.map((p) => p.name);

const HomePreviewPage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    document.body.style.fontFamily = 'Poppins, sans-serif';
    document.body.style.backgroundColor = '#000';
    document.body.style.color = '#ffffff';

    const timer = setTimeout(() => setShowContent(true), 300);

    return () => {
      document.head.removeChild(link);
      clearTimeout(timer);
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

      {/* ===== HERO SECTION — Spice Discovery Portal ===== */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

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
        {/* Layer 0: Subtle tech grid background */}
        <div
          className="absolute inset-0 z-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,165,0,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,165,0,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Layer 0.5: Light spread behind the map */}
        <div className="absolute z-[4] pointer-events-none" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
          {/* Core bright glow */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 500,
              height: 500,
              left: -250,
              top: -250,
              background: 'radial-gradient(circle, rgba(255,120,0,0.2) 0%, rgba(255,69,0,0.1) 40%, transparent 70%)',
            }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Wide ambient spread */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 900,
              height: 900,
              left: -450,
              top: -450,
              background: 'radial-gradient(ellipse at center, rgba(255,100,0,0.12) 0%, rgba(200,50,0,0.06) 35%, rgba(139,0,0,0.03) 55%, transparent 75%)',
            }}
            animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Vertical light streak */}
          <motion.div
            className="absolute"
            style={{
              width: 300,
              height: 800,
              left: -150,
              top: -400,
              background: 'radial-gradient(ellipse at center, rgba(255,150,0,0.08) 0%, transparent 70%)',
            }}
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
          {/* Horizontal light streak */}
          <motion.div
            className="absolute"
            style={{
              width: 800,
              height: 300,
              left: -400,
              top: -150,
              background: 'radial-gradient(ellipse at center, rgba(255,80,0,0.06) 0%, transparent 70%)',
            }}
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
        </div>

       

        {/* Layer 1: Floating spice dust particles */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={`dust-${i}`}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 4 + 1,
                height: Math.random() * 4 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: ['#FF6B00', '#FFD700', '#FF4500', '#FFA500', '#DC143C'][Math.floor(Math.random() * 5)],
              }}
              animate={{
                y: [0, -(Math.random() * 200 + 100)],
                x: [0, (Math.random() - 0.5) * 100],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0.5],
              }}
              transition={{
                duration: Math.random() * 6 + 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>

        {/* Layer 2: Orbiting rings around the map */}
        <div className="absolute z-[2] pointer-events-none" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
          {/* Ring 1 — Large outer orbit */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 700,
              height: 700,
              left: -350,
              top: -350,
              border: '1.5px solid transparent',
              background: 'linear-gradient(#000, #000) padding-box, linear-gradient(135deg, rgba(255,69,0,0.35), rgba(220,38,38,0.15), rgba(255,165,0,0.3), rgba(220,38,38,0.15)) border-box',
              opacity: 0.6,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            <motion.div
              className="absolute w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_10px_#F59E0B]"
              style={{ top: -4, left: '50%', marginLeft: -4 }}
            />
          </motion.div>

          {/* Ring 2 — Medium orbit, reverse */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 550,
              height: 550,
              left: -275,
              top: -275,
              border: '1.5px solid transparent',
              background: 'linear-gradient(#000, #000) padding-box, linear-gradient(45deg, rgba(251,146,60,0.4), rgba(239,68,68,0.15), rgba(245,158,11,0.35), rgba(239,68,68,0.15)) border-box',
              opacity: 0.55,
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          >
            <motion.div
              className="absolute w-1.5 h-1.5 bg-orange-400 rounded-full shadow-[0_0_8px_#FB923C]"
              style={{ top: -3, left: '50%', marginLeft: -3 }}
            />
            <motion.div
              className="absolute w-1.5 h-1.5 bg-red-400 rounded-full shadow-[0_0_8px_#F87171]"
              style={{ bottom: -3, left: '50%', marginLeft: -3 }}
            />
          </motion.div>

          {/* Ring 3 — Inner glow ring */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 420,
              height: 420,
              left: -210,
              top: -210,
              border: '1.5px solid transparent',
              background: 'linear-gradient(#000, #000) padding-box, linear-gradient(135deg, rgba(255,100,0,0.4), rgba(220,38,38,0.2), rgba(255,165,0,0.35), rgba(220,38,38,0.2)) border-box',
              opacity: 0.5,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          />

          {/* Ring 4 — Outermost orbit */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 850,
              height: 850,
              left: -425,
              top: -425,
              border: '1.5px solid transparent',
              background: 'linear-gradient(#000, #000) padding-box, linear-gradient(180deg, rgba(220,38,38,0.3), rgba(255,69,0,0.15), rgba(245,158,11,0.25), rgba(220,38,38,0.1)) border-box',
              opacity: 0.45,
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          >
            <motion.div
              className="absolute w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_10px_#EF4444]"
              style={{ top: -3, left: '50%', marginLeft: -3 }}
            />
            <motion.div
              className="absolute w-1 h-1 bg-amber-300 rounded-full shadow-[0_0_6px_#FCD34D]"
              style={{ bottom: -2, right: '20%' }}
            />
          </motion.div>

          {/* Ring 5 — Tight inner orbit */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 300,
              height: 300,
              left: -150,
              top: -150,
              border: '1.5px solid transparent',
              background: 'linear-gradient(#000, #000) padding-box, linear-gradient(225deg, rgba(245,158,11,0.4), rgba(251,146,60,0.2), rgba(255,69,0,0.35), rgba(251,146,60,0.15)) border-box',
              opacity: 0.5,
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          >
            <motion.div
              className="absolute w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-[0_0_8px_#FACC15]"
              style={{ top: -3, left: '30%' }}
            />
          </motion.div>
        </div>

        {/* Layer 3: Floating product name tags — hidden on mobile */}
        <div className="absolute inset-0 z-[3] pointer-events-none hidden md:block">
          {floatingProductNames.map((name, i) => {
            const angle = (i / floatingProductNames.length) * Math.PI * 2;
            const radius = 280 + Math.random() * 150;
            const x = 50 + (Math.cos(angle) * radius / 10);
            const y = 50 + (Math.sin(angle) * radius / 8);
            return (
              <motion.span
                key={name}
                className="absolute text-[10px] md:text-xs font-medium tracking-widest capitalize"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  color: ['#FF6B00', '#FFD700', '#FF4500', '#FFA500', '#DC143C', '#FF8C00'][i % 6],
                }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.4, 0.15, 0.4, 0],
                  y: [0, -20, 0, 20, 0],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: 'easeInOut',
                }}
              >
                {name}
              </motion.span>
            );
          })}
        </div>

        {/* Layer 5: India Map — Centered, full prominence */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={showContent ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-[6] w-full h-[65vh] md:h-[80vh] lg:h-[85vh] flex items-center justify-center mt-8"
        >
          <IndiaMapExplorer className="w-full h-full max-w-3xl lg:max-w-4xl mx-auto" />
        </motion.div>

        {/* Layer 6: Bottom CTA hint */}
        <motion.div
          className="absolute bottom-8 right-8 z-[7] flex flex-col items-center gap-2 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={showContent ? { opacity: 1 } : {}}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-amber-500/60" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Click a state to explore
          </span>
          <motion.div
            className="w-5 h-8 rounded-full border-2 border-amber-500/30 flex justify-center pt-1.5"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div className="w-1 h-1.5 bg-amber-500/50 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Horizontal scan line effect */}
        <motion.div
          className="absolute left-0 w-full h-[1px] z-[3] pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,165,0,0.15), rgba(255,69,0,0.1), transparent)',
          }}
          animate={{ top: ['10%', '90%', '10%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </section>

      <AboutSection />
      <motion.div className="" />
      <ProductsSection />
      <section id="products" className="relative">
        <img src={spicesBowl} alt="" className="w-full h-full object-cover opacity-90" />
      </section>
      <GallerySection />
      <BulkOrderSection />
      <Footer />
    </motion.div>
  );
};

export default HomePreviewPage;
