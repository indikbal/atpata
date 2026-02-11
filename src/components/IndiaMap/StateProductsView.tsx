import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Plus, Minus, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import indiaMap from '@svg-maps/india';
import { getStateData, StateData } from '../../data/stateProducts';
import { useCart } from '../../contexts/CartContext';

interface StateProductsViewProps {
  stateId: string;
  onBack: () => void;
}

const StateProductsView = ({ stateId, onBack }: StateProductsViewProps) => {
  const stateData = getStateData(stateId);
  const { state: cartState, addToCart, updateQuantity } = useCart();

  // Get the state path from the library
  const statePath = useMemo(() => {
    return indiaMap.locations.find((loc: any) => loc.id === stateId);
  }, [stateId]);

  if (!stateData || !statePath) {
    return null;
  }

  const getCartQuantity = (productId: number) => {
    const item = cartState.items.find((item) => item.id === productId);
    return item?.quantity || 0;
  };

  const handleAddToCart = (product: StateData['products'][0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      description: product.description,
      image: product.image,
      price: product.price,
    });
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${stateData.bgGradient} relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, ${stateData.themeColor}40 0%, transparent 50%),
                            radial-gradient(circle at 75% 75%, ${stateData.themeColor}30 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Floating Spice Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: stateData.themeColor,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Back Button */}
        <motion.button
          onClick={onBack}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-white/80 hover:text-white mb-8 group"
        >
          <motion.div
            whileHover={{ x: -5 }}
            className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors"
          >
            <ArrowLeft size={20} />
          </motion.div>
          <span className="font-medium">Back to Map</span>
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: State Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* State Mini Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-6 lg:mb-8"
            >
              <svg viewBox="0 0 200 200" className="w-24 h-24 md:w-32 md:h-32 mx-auto lg:mx-0">
                <defs>
                  <filter id="stateGlow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {/* Render the state shape centered and scaled */}
                <g transform="translate(100, 100) scale(0.25) translate(-306, -348)">
                  <motion.path
                    d={statePath.path}
                    fill={stateData.themeColor}
                    stroke="#FCD34D"
                    strokeWidth="4"
                    style={{ filter: 'url(#stateGlow)' }}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </g>
              </svg>
            </motion.div>

            {/* State Name & Tagline */}
            <div className="flex items-center gap-3 mb-2">
              <MapPin style={{ color: stateData.themeColor }} size={24} />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {stateData.name}
              </h1>
            </div>
            <p
              className="text-lg md:text-xl lg:text-2xl font-medium mb-4 lg:mb-6"
              style={{ color: stateData.themeColor }}
            >
              {stateData.tagline}
            </p>

            {/* Story */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-base lg:text-lg leading-relaxed mb-6 lg:mb-8"
            >
              {stateData.story}
            </motion.p>

            {/* Famous For Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-white/60 text-sm uppercase tracking-wider mb-3">
                Famous For
              </h3>
              <div className="flex flex-wrap gap-2">
                {stateData.famousFor.map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium"
                    style={{
                      backgroundColor: `${stateData.themeColor}30`,
                      color: stateData.themeColor,
                      border: `1px solid ${stateData.themeColor}50`,
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Products */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
              Available Products
            </h2>

            <div className="space-y-4 md:space-y-6">
              {stateData.products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-black/30 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Product Image */}
                    <Link
                      to={`/product/${product.slug}`}
                      className="sm:w-1/3 p-4 md:p-6 flex items-center justify-center bg-gradient-to-br from-black/20 to-transparent"
                    >
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        className="w-24 h-32 md:w-32 md:h-40 object-contain"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      />
                    </Link>

                    {/* Product Info */}
                    <div className="flex-1 p-4 md:p-6">
                      <Link to={`/product/${product.slug}`}>
                        <h3 className="text-lg md:text-xl font-bold text-white mb-2 hover:text-amber-400 transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-gray-400 text-sm md:text-base mb-4">{product.description}</p>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <span
                          className="text-xl md:text-2xl font-bold"
                          style={{ color: stateData.themeColor }}
                        >
                          {product.price}
                        </span>

                        {getCartQuantity(product.id) > 0 ? (
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="flex items-center gap-2 bg-white/10 rounded-xl p-1"
                          >
                            <motion.button
                              onClick={() => {
                                const currentQty = getCartQuantity(product.id);
                                updateQuantity(product.id, currentQty - 1);
                              }}
                              className="w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                              style={{ backgroundColor: `${stateData.themeColor}50` }}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Minus size={18} />
                            </motion.button>

                            <span className="text-white font-bold w-8 text-center">
                              {getCartQuantity(product.id)}
                            </span>

                            <motion.button
                              onClick={() => handleAddToCart(product)}
                              className="w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                              style={{ backgroundColor: stateData.themeColor }}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Plus size={18} />
                            </motion.button>
                          </motion.div>
                        ) : (
                          <motion.button
                            onClick={() => handleAddToCart(product)}
                            className="flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-medium text-white transition-all duration-300"
                            style={{ backgroundColor: stateData.themeColor }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ShoppingCart size={18} />
                            Add to Cart
                          </motion.button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View All Products Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-6 md:mt-8 text-center"
            >
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
              >
                View all products from other states
                <ArrowLeft className="rotate-180" size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StateProductsView;
