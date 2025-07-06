import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const products = [
  {
    id: 1,
    name: 'Achari Aloo Dum',
    description: 'A tangy and spicy blend that transforms potatoes into a pickle-flavored delight.',
    image: '../src/img/jar1.png',
    color: 'from-amber-500 to-red-500',
  },
  {
    id: 2,
    name: 'Eggplant Preserve',
    description: 'A Eggplant Preserve that transforms potatoes into a pickle-flavored delight.',
    image: '../src/img/jar2.png',
    color: 'from-green-500 to-amber-500',
  },
  {
    id: 3,
    name: 'Kali Mirch Paneer',
    description: 'A Kali Mirch Paneer that transforms potatoes into a pickle-flavored delight.',
    image: '../src/img/jar3.png',
    color: 'from-red-600 to-red-800',
  },
  {
    id: 4,
    name: 'Saucy Papad Premix',
    description: 'A Saucy Papad Premix that transforms potatoes into a pickle-flavored delight.',
    image: '../src/img/jar4.png',
    color: 'from-amber-400 to-yellow-600',
  },
  {
    id: 5,
    name: 'Moringa Paneer',
    description: 'A Moringa Paneer that transforms potatoes into a pickle-flavored delight.',
    image: '../src/img/jar5.png',
    color: 'from-red-500 to-red-900',
  },
  {
    id: 6,
    name: 'Bihari Litti Premix',
    description: 'A Bihari Litti Premix that transforms potatoes into a pickle-flavored delight.',
    image: '../src/img/jar6.png',
    color: 'from-yellow-500 to-amber-600',
  },
  {
    id: 7,
    name: 'Bitter Melon Preserve',
    description: 'A Bitter Melon Preserve that transforms potatoes into a pickle-flavored delight.',
    image: '../src/img/jar7.png',
    color: 'from-yellow-500 to-amber-600',
  },
  {
    id: 8,
    name: 'Navratna Kadhi Premix',
    description: 'A Navratna Kadhi Premix that transforms potatoes into a pickle-flavored delight.',
    image: '../src/img/jar8.png',
    color: 'from-yellow-500 to-amber-600',
  },
];

const ProductsSection = () => {
  const [activeProduct, setActiveProduct] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="products" className="py-20 relative bg-[url('../src/img/spices-bg.jpg')] bg-cover bg-center bg-no-repeat">
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
              <div className="relative h-64 overflow-hidden">
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-10 mix-blend-multiply`}
                ></div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain transform transition-transform duration-700 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white opacity-80">{product.name}</h3>
                <p className="text-white text-sm mb-4 opacity-60">{product.description}</p>
                <motion.div
                  className={`w-full h-1 bg-gradient-to-r ${product.color} rounded-full origin-left`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeProduct === product.id ? 1 : 0.3 }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
