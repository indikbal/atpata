import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';


import Logo from '../img/logo.svg';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { state } = useCart();

  // Debug: Log cart state in navbar
  console.log('Navbar - Cart state:', state);
  console.log('Navbar - Total items:', state.totalItems);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/20 backdrop-blur-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-white font-bold text-2xl"
          >
            <Link to="/"><img src={Logo} alt="Atpata Logo" className="w-32 mx-auto mb-4" /></Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <motion.a
                href="/"
                className="text-white hover:text-amber-500 transition-colors duration-300 "
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
               Home
              </motion.a> 
              <motion.a
                href={`/about`}
                className="text-white hover:text-amber-500 transition-colors duration-300 "
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
               About
              </motion.a> 
                <motion.a
                href={`/products`}
                className="text-white hover:text-amber-500 transition-colors duration-300 "
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
               Products
              </motion.a> 
            <motion.a
                href={`/story`}
                className="text-white hover:text-amber-500 transition-colors duration-300 "
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
               Story
              </motion.a> 
              <motion.a
                href={`/ourteam`}
                className="text-white hover:text-amber-500 transition-colors duration-300 "
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
               The brains behind atpata
              </motion.a> 

            <motion.a
                href={`/gallery`}
                className="text-white hover:text-amber-500 transition-colors duration-300 "
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
               Gallery
              </motion.a> 
              <motion.a
                href={`/contact`}
                className="text-white hover:text-amber-500 transition-colors duration-300 "
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
               Contact
              </motion.a> 

            {/* <motion.a
              href={`/bulkorder`}
              className="bg-gradient-to-r from-amber-600 to-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-amber-500 hover:to-red-500 transition-all"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              Bulk Order
            </motion.a> */}
            <motion.a
              href={`/cart`}
              className="bg-gradient-to-r from-amber-600 to-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-amber-500 hover:to-red-500 transition-all relative"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <ShoppingCart size={20} />
              {state.totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {state.totalItems}
                </span>
              )}
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-md"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
               <a
                href={"/"}
                className="text-white hover:text-amber-500 py-2 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href={"/about"}
                className="text-white hover:text-amber-500 py-2 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href={"/products"}
                className="text-white hover:text-amber-500 py-2 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </a>
              <a
                href={"/story"}
                className="text-white hover:text-amber-500 py-2 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Story
              </a>
              <a
                href={"/ourteam"}
                className="text-white hover:text-amber-500 py-2 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                The brains behind atpata
              </a>
              <a
                href={"/gallery"}
                className="text-white hover:text-amber-500 py-2 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a
                href={"/bulkorder"}
                className="text-white hover:text-amber-500 py-2 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Bulk Order
              </a>
            <a
                href={`#contact`}
                className="text-white hover:text-amber-500 transition-colors duration-300 "
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href={`/cart`}
                className="text-white hover:text-amber-500 transition-colors duration-300 relative flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ShoppingCart size={20} />
                {state.totalItems > 0 && (
                  <span className="ml-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {state.totalItems}
                  </span>
                )}
                <span className="ml-2">Cart</span>
              </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
