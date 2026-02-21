import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { useCart } from '../contexts/CartContext';


import jar1 from '../img/jar1.png';
import jar2 from '../img/jar2.png';
import jar3 from '../img/jar3.png';
import jar4 from '../img/jar4.png';
import jar5 from '../img/jar5.png';
import jar6 from '../img/jar6.png';
import jar7 from '../img/jar7.png';
import jar8 from '../img/jar8.png';


const products = [
  {
    id: 1,
    name: 'Achari Aloo Dum',
    description: 'Spice up your potatoes with bold, tangy achari magic — in just one step',
    image: jar1,
    color: 'from-amber-500 to-red-500',
    price: '₹ 299',
  },
  {
    id: 2,
    name: 'Eggplant Preserve',
    description: 'Smoky, spiced brinjal pickle that transforms any simple meal.',
    image: jar2,
    color: 'from-green-500 to-amber-500',
    price: '₹ 299',
  },
  {
    id: 3,
    name: 'Kali Mirch Paneer',
    description: 'Peppery, creamy paneer — gourmet-style and effortlessly made. ',
    image:  jar3,
    color: 'from-red-600 to-red-800',
    price: '₹ 299',
    },
  {
    id: 4,
    name: 'Saucy Papad Premix',
    description: 'Your papad’s spicy, tangy upgrade — ready in seconds! ',
    image: jar4,
    color: 'from-amber-400 to-yellow-600',
    price: '₹ 299',
      },
  {
    id: 5,
    name: 'Moringa Paneer',
    description: 'Healthy meets tasty with this moringa-powered paneer blend. ',
    image: jar5,
    color: 'from-red-500 to-red-900',
    price: '₹ 299',
    },
  {
    id: 6,
    name: 'Bihari Litti Premix',
    description: 'Authentic litti flavour, no grinding, roasting, or hassle',
    image: jar6,
    color: 'from-yellow-500 to-amber-600',
    price: '₹ 299',
    },
  {
    id: 7,
    name: 'Bitter Melon Preserve',
    description: 'Karela like never before — sweet, bitter, bold, and addictive. ',
    image: jar7,
    color: 'from-yellow-500 to-amber-600',
    price: '₹ 299',
    },
  {
    id: 8,
    name: 'Navratna Kadhi Premix',
    description: 'Nine spices, one soul-soothing kadhi — comfort in a spoon. ',
    image: jar8,
    color: 'from-yellow-500 to-amber-600',
    price: '₹ 299',
    },
];

const ProductsSection = () => {
  const [activeProduct, setActiveProduct] = useState<number | null>(null);
  const { state, addToCart, updateQuantity } = useCart();

  // Get quantity of item in cart
  const getCartQuantity = (productId: number) => {
    const item = state.items.find(item => item.id === productId);
    return item?.quantity || 0;
  };
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      description: product.description,
      image: product.image,
      price: product.price,
    });
  };

  return (
    <section className="py-20 relative bg-[url('../src/img/spices-bg.jpg')] bg-cover bg-center bg-no-repeat">
       <motion.div 
        className="absolute -left-40 top-40 w-96 h-96 bg-gradient-to-br from-amber-600/50 to-red-800/10 rounded-full blur-3xl z-10"
        animate={{ 
          scale: [1, 1.5, 1], 
          opacity: [0.5, 0.7, 0.5] 
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      ></motion.div>
      <div className="container mx-auto px-4 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-600">Our Flavor Collection</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-red-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover our range of premium instant masalas, crafted to bring authentic flavors to your kitchen in minutes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-orange-950/20 backdrop-blur-md backdrop-filter rounded-xl overflow-hidden border border-gray-800/50 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              onMouseEnter={() => setActiveProduct(product.id)}
              onMouseLeave={() => setActiveProduct(null)}
            >
              <Link to={`/product/${product.name.toLowerCase().replace(/ /g, '-')}`}>
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-10 mix-blend-multiply`}
                  ></div>
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain transform transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </Link>
              
              <div className="p-6">
                <Link to={`/product/${product.name.toLowerCase().replace(/ /g, '-')}`}>
                  <h3 className="text-xl font-bold mb-2 text-white opacity-80 hover:text-amber-400 transition-colors">{product.name}</h3>
                  <p className="text-white text-sm mb-4 opacity-60">{product.description}</p>
                  <p className="text-amber-500 text-xl font-bold mb-4 opacity-60">Price: {product.price}</p>
                </Link>
                
                <div className="flex items-center justify-between">
                  <motion.div
                    className={`flex-1 h-1 bg-gradient-to-r ${product.color} rounded-full origin-left mr-4`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeProduct === product.id ? 1 : 0.3 }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                  
                  {getCartQuantity(product.id) > 0 ? (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="flex items-center gap-1 bg-gray-800/80 rounded-lg p-1"
                    >
                      <motion.button
                        onClick={(e) => {
                          e.preventDefault();
                          const currentQty = getCartQuantity(product.id);
                          updateQuantity(product.id, currentQty - 1);
                        }}
                        className="bg-gradient-to-r from-amber-600 to-red-600 text-white w-8 h-8 rounded-lg flex items-center justify-center hover:from-amber-500 hover:to-red-500 transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Minus size={14} />
                      </motion.button>
                      
                      <span className="text-white font-bold w-8 text-center text-sm">
                        {getCartQuantity(product.id)}
                      </span>
                      
                      <motion.button
                        onClick={(e) => {
                          e.preventDefault();
                          handleAddToCart(product);
                        }}
                        className="bg-gradient-to-r from-amber-600 to-red-600 text-white w-8 h-8 rounded-lg flex items-center justify-center hover:from-amber-500 hover:to-red-500 transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Plus size={14} />
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.button
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddToCart(product);
                      }}
                      className="bg-gradient-to-r from-amber-600 to-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-amber-500 hover:to-red-500 transition-all duration-300 flex items-center gap-2 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ShoppingCart size={16} />
                      Add to Cart
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
