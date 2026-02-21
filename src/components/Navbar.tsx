import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

import Logo from '../img/logo.svg';

const navLinks: { href: string; label: string; num: string; highlight?: boolean }[] = [
  { href: '/', label: 'Home', num: '01' },
  { href: '/about', label: 'About', num: '02' },
  { href: '/products', label: 'Products', num: '03' },
  { href: '/story', label: 'Story', num: '04' },
  { href: '/ourteam', label: 'The brains behind atpata', num: '05' },
  { href: '/gallery', label: 'Gallery', num: '06' },
  { href: '/contact', label: 'Contact', num: '07' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);
  const { state } = useCart();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/20 backdrop-blur-lg py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/">
                <img src={Logo} alt="Atpata Logo" className="w-24 md:w-32" />
              </Link>
            </motion.div>

            {/* Custom Animated Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative w-11 h-11 flex items-center justify-center rounded-full border border-white/15 hover:border-amber-500/40 transition-all duration-300 group"
              style={{
                background: menuOpen
                  ? 'linear-gradient(135deg, rgba(255,69,0,0.15), rgba(220,38,38,0.1))'
                  : 'rgba(255,255,255,0.03)',
              }}
            >
              {/* Animated bars → X */}
              <div className="relative w-5 h-4 flex flex-col justify-between">
                <motion.span
                  className="block h-[2px] rounded-full origin-left"
                  style={{ background: 'linear-gradient(90deg, #FF6B00, #FFD700)' }}
                  animate={menuOpen
                    ? { rotate: 45, width: '100%', y: 0 }
                    : { rotate: 0, width: '60%', y: 0 }
                  }
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block h-[2px] rounded-full"
                  style={{ background: 'linear-gradient(90deg, #FFD700, #FF4500)' }}
                  animate={menuOpen
                    ? { opacity: 0, x: 10 }
                    : { opacity: 1, x: 0, width: '100%' }
                  }
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block h-[2px] rounded-full origin-left"
                  style={{ background: 'linear-gradient(90deg, #FF4500, #FF6B00)' }}
                  animate={menuOpen
                    ? { rotate: -45, width: '100%', y: 0 }
                    : { rotate: 0, width: '80%', y: 0 }
                  }
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Cart badge */}
              {state.totalItems > 0 && !menuOpen && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-500 to-red-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold"
                >
                  {state.totalItems}
                </motion.span>
              )}

              {/* Glow ring on hover */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: '0 0 15px rgba(255,107,0,0.2), 0 0 30px rgba(255,69,0,0.1)',
                }}
              />
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Immersive Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex"
          >
            {/* Background */}
            <motion.div
              className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Background decorative glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute w-[500px] h-[500px] rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(255,107,0,0.08) 0%, transparent 70%)',
                  right: '-10%',
                  top: '10%',
                }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute w-[400px] h-[400px] rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(220,38,38,0.06) 0%, transparent 70%)',
                  left: '5%',
                  bottom: '10%',
                }}
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-center px-8 md:px-16 lg:px-24 pt-20">
              {/* Left side — Navigation links */}
              <div className="flex-1 flex flex-col justify-center">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ delay: 0.08 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    onMouseEnter={() => setHoveredLink(i)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center gap-4 py-3 md:py-4 relative"
                    >
                      {/* Number */}
                      <span className="text-[11px] font-mono text-white/20 w-6 group-hover:text-amber-500/50 transition-colors duration-300">
                        {link.num}
                      </span>

                      {/* Divider dot */}
                      <motion.span
                        className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-amber-500 transition-colors duration-300"
                        animate={hoveredLink === i ? { scale: [1, 1.5, 1] } : {}}
                        transition={{ duration: 0.4 }}
                      />

                      {/* Label */}
                      <span
                        className={`text-2xl md:text-3xl lg:text-4xl font-light tracking-tight transition-all duration-300 ${
                          link.highlight
                            ? 'text-amber-400 group-hover:text-amber-300'
                            : 'text-white/60 group-hover:text-white'
                        }`}
                      >
                        {link.label}
                      </span>

                      {/* Arrow on hover */}
                      <motion.span
                        className="text-amber-500/70 ml-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={hoveredLink === i ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight size={20} />
                      </motion.span>

                      {/* Hover line */}
                      <motion.div
                        className="absolute bottom-1 left-10 right-0 h-[1px] origin-left"
                        style={{ background: 'linear-gradient(90deg, rgba(255,107,0,0.3), transparent)' }}
                        initial={{ scaleX: 0 }}
                        animate={hoveredLink === i ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                ))}

                {/* Cart — inline at bottom */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  className="mt-8 pt-6 border-t border-white/5"
                >
                  <Link
                    to="/cart"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-amber-500/20 hover:border-amber-500/50 bg-amber-500/5 hover:bg-amber-500/10 transition-all duration-300 group"
                  >
                    <ShoppingCart size={18} className="text-amber-500" />
                    <span className="text-white/80 group-hover:text-white font-medium transition-colors">Cart</span>
                    {state.totalItems > 0 && (
                      <span className="bg-gradient-to-r from-amber-500 to-red-500 text-white text-xs rounded-full px-2 py-0.5 font-bold">
                        {state.totalItems}
                      </span>
                    )}
                  </Link>
                </motion.div>
              </div>

              {/* Right side — decorative text */}
              <motion.div
                className="hidden lg:flex flex-col items-end justify-end pb-16 pr-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <span
                  className="text-[8rem] xl:text-[10rem] font-black leading-none select-none"
                  style={{
                    WebkitTextStroke: '1px rgba(255,107,0,0.08)',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  atpata
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
