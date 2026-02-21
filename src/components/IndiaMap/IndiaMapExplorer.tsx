import { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Plus, Minus, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import indiaMap from '@svg-maps/india';
import { hasProducts, getStateData } from '../../data/stateProducts';
import { useCart } from '../../contexts/CartContext';
import jarIcon from '../../img/jar1.png';

interface IndiaMapExplorerProps {
  className?: string;
}

// Reusable offscreen SVG for bbox calculations — avoids live DOM reflows
let _offscreenSvg: SVGSVGElement | null = null;
let _offscreenPath: SVGPathElement | null = null;

const getPathBBox = (pathData: string): { x: number; y: number; width: number; height: number; centerX: number; centerY: number } => {
  if (!_offscreenSvg) {
    _offscreenSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    _offscreenSvg.style.position = 'absolute';
    _offscreenSvg.style.width = '0';
    _offscreenSvg.style.height = '0';
    _offscreenSvg.style.overflow = 'hidden';
    _offscreenPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    _offscreenSvg.appendChild(_offscreenPath);
    document.body.appendChild(_offscreenSvg);
  }
  _offscreenPath!.setAttribute('d', pathData);
  const bbox = _offscreenPath!.getBBox();
  return {
    x: bbox.x,
    y: bbox.y,
    width: bbox.width,
    height: bbox.height,
    centerX: bbox.x + bbox.width / 2,
    centerY: bbox.y + bbox.height / 2
  };
};

const IndiaMapExplorer = ({ className = '' }: IndiaMapExplorerProps) => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [isMapReady, setIsMapReady] = useState(false);
  const [isZooming, setIsZooming] = useState(false);
  const [isMobile] = useState(() => window.innerWidth < 768);

  const { state: cartState, addToCart, updateQuantity } = useCart();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [3, -3]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-3, 3]), { stiffness: 100, damping: 30 });

  useEffect(() => {
    const timer = setTimeout(() => setIsMapReady(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll when popup is open on mobile
  useEffect(() => {
    if (selectedState && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedState, isMobile]);

  const stateBBoxes = useMemo(() => {
    const boxes: Record<string, ReturnType<typeof getPathBBox>> = {};
    if (typeof document !== 'undefined') {
      indiaMap.locations.forEach((location: any) => {
        if (hasProducts(location.id)) {
          boxes[location.id] = getPathBBox(location.path);
        }
      });
    }
    return boxes;
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (selectedState) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleStateClick = (stateId: string) => {
    if (hasProducts(stateId) && !isZooming) {
      setIsZooming(true);
      setSelectedState(stateId);
      mouseX.set(0);
      mouseY.set(0);
      setTimeout(() => setIsZooming(false), 800);
    }
  };

  const handleBackToMap = () => {
    if (!isZooming) {
      setIsZooming(true);
      setSelectedState(null);
      setTimeout(() => setIsZooming(false), 800);
    }
  };

  const getStateColor = (stateId: string) => {
    const stateData = getStateData(stateId);
    return stateData?.themeColor || '#1F2937';
  };

  const getCartQuantity = (productId: number) => {
    const item = cartState.items.find((item) => item.id === productId);
    return item?.quantity || 0;
  };

  const selectedStateData = selectedState ? getStateData(selectedState) : null;
  const selectedStatePath = selectedState ? indiaMap.locations.find((l: any) => l.id === selectedState) : null;
  const selectedStateBBox = selectedState ? stateBBoxes[selectedState] : null;

  return (
    <div
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background India Map - Always visible, fades when state selected */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          perspective: '1500px',
          perspectiveOrigin: 'center center',
        }}
      >
        <motion.div
          style={{
            rotateX: selectedState ? 0 : (isMapReady ? rotateX : 12),
            rotateY: selectedState ? 0 : (isMapReady ? rotateY : 0),
            transformStyle: 'preserve-3d',
          }}
          animate={{
            scale: selectedState ? 0.9 : 1,
            opacity: selectedState ? 0.15 : 1,
          }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="relative w-full h-full flex items-center justify-center p-4"
        >
          {/* Ground glow — static, no infinite animation */}
          {!selectedState && (
            <div
              className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[60%] h-16 rounded-full blur-3xl pointer-events-none opacity-20"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(255,107,0,0.35) 0%, rgba(255,69,0,0.15) 40%, transparent 70%)',
              }}
            />
          )}

          <svg
            viewBox={indiaMap.viewBox}
            className="w-full h-full max-w-none"
            style={{
              maxHeight: '95vh',
              objectFit: 'contain',
              filter: selectedState ? 'drop-shadow(0 5px 15px rgba(0,0,0,0.2)) blur(1px)' : 'none',
              transition: 'filter 0.5s',
            }}
          >
            <defs>
              <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>

              {/* Single sweep gradient with CSS rotation */}
              <linearGradient id="sweepGlow1" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="35%" stopColor="transparent" />
                <stop offset="45%" stopColor="#FF6B00" />
                <stop offset="50%" stopColor="#FFD700" />
                <stop offset="55%" stopColor="#FF6B00" />
                <stop offset="65%" stopColor="transparent" />
                <stop offset="100%" stopColor="transparent" />
                <animateTransform attributeName="gradientTransform" type="rotate" from="0 0.5 0.5" to="360 0.5 0.5" dur="6s" repeatCount="indefinite" />
              </linearGradient>

              {/* Static base glow */}
              <linearGradient id="baseGlow" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="rgba(255,107,0,0.15)" />
                <stop offset="50%" stopColor="rgba(255,69,0,0.08)" />
                <stop offset="100%" stopColor="rgba(255,107,0,0.15)" />
              </linearGradient>

              {/* Single blur filter */}
              <filter id="glowTight" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" />
              </filter>
            </defs>

            {/* Edge glow — reduced to 2 layers (was 5) */}
            {!selectedState && (
              <g className="pointer-events-none">
                {/* Layer 1: Static base outline */}
                {indiaMap.locations.map((location: any) => (
                  <path
                    key={`glow-base-${location.id}`}
                    d={location.path}
                    fill="none"
                    stroke="url(#baseGlow)"
                    strokeWidth={1.5}
                    opacity={0.5}
                  />
                ))}
                {/* Layer 2: Single sweep glow */}
                {indiaMap.locations.map((location: any) => (
                  <path
                    key={`glow-sweep-${location.id}`}
                    d={location.path}
                    fill="none"
                    stroke="url(#sweepGlow1)"
                    strokeWidth={2}
                    opacity={0.4}
                    style={{ filter: 'url(#glowTight)' }}
                  />
                ))}
              </g>
            )}

            {indiaMap.locations.map((location: any) => {
              const stateHasProducts = hasProducts(location.id);
              const isHovered = hoveredState === location.id && !selectedState;
              const isSelected = selectedState === location.id;
              const stateColor = getStateColor(location.id);

              return (
                <g key={location.id}>
                  <path
                    d={location.path}
                    className={stateHasProducts && !selectedState ? 'cursor-pointer' : 'cursor-default'}
                    fill={isHovered && stateHasProducts ? stateColor : '#100501'}
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth={0.5}
                    opacity={selectedState ? (isSelected ? 0.3 : 0.5) : 1}
                    style={{
                      transition: 'fill 0.3s, opacity 0.3s',
                      filter: isHovered && stateHasProducts
                        ? `drop-shadow(0 0 8px ${stateColor}70)`
                        : 'none',
                    }}
                    onClick={() => !selectedState && handleStateClick(location.id)}
                    onMouseEnter={() => !selectedState && setHoveredState(location.id)}
                    onMouseLeave={() => setHoveredState(null)}
                  />

                  {stateHasProducts && isHovered && !selectedState && (
                    <path
                      d={location.path}
                      fill="url(#highlightGradient)"
                      pointerEvents="none"
                      opacity={0.4}
                    />
                  )}
                </g>
              );
            })}

          </svg>
        </motion.div>
      </div>


      {/* Hover Tooltip */}
      <AnimatePresence>
        {!selectedState && hoveredState && hasProducts(hoveredState) && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-xl px-5 py-3 rounded-2xl border border-amber-500/30 shadow-2xl z-20"
          >
            <p className="text-amber-400 font-bold text-lg">{getStateData(hoveredState)?.name}</p>
            <p className="text-gray-400 text-sm">{getStateData(hoveredState)?.tagline}</p>
            <div className="flex items-center gap-2 mt-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></div>
              <p className="text-amber-500/70 text-xs">Click to explore</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Split Screen - State Details — rendered via portal to escape stacking context */}
      {createPortal(
      <AnimatePresence>
        {selectedState && selectedStateData && selectedStatePath && selectedStateBBox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9998] bg-black flex flex-col lg:flex-row"
          >
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={`absolute z-30 ${isMobile ? 'top-3 left-3' : 'top-4 left-6'}`}
            >
              <motion.button
                onClick={handleBackToMap}
                className="flex items-center gap-2 text-white/80 hover:text-white bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft size={18} />
                <span className="font-medium text-sm">Back</span>
              </motion.button>
            </motion.div>

            {/* Mobile compact header — state name + tags, replaces the full left panel */}
            {isMobile && (
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="flex-shrink-0 flex flex-col items-center pt-14 pb-3 px-4 border-b border-white/10"
                style={{ backgroundColor: `${selectedStateData.themeColor}18` }}
              >
                <div className="flex items-center gap-1.5 mb-0.5">
                  <MapPin style={{ color: selectedStateData.themeColor }} size={16} />
                  <h2 className="text-lg font-bold text-white">{selectedStateData.name}</h2>
                </div>
                <p className="text-xs mb-2.5" style={{ color: selectedStateData.themeColor }}>
                  {selectedStateData.tagline}
                </p>
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {selectedStateData.famousFor.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-medium"
                      style={{
                        backgroundColor: `${selectedStateData.themeColor}25`,
                        color: selectedStateData.themeColor,
                        border: `1px solid ${selectedStateData.themeColor}40`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Left Side - State Shape — hidden on mobile, shown on desktop */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hidden lg:flex w-full lg:w-1/2 lg:h-full flex-col items-center justify-center p-6 lg:p-12"
            >
              {/* State SVG */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6, type: 'spring', stiffness: 100 }}
                className="relative"
              >
                <svg
                  viewBox={`${selectedStateBBox.x - 20} ${selectedStateBBox.y - 20} ${selectedStateBBox.width + 40} ${selectedStateBBox.height + 40}`}
                  className="w-full h-auto max-h-[30vh] lg:max-h-[50vh]"
                  style={{
                    filter: `drop-shadow(0 20px 40px rgba(0,0,0,0.5)) drop-shadow(0 0 60px ${selectedStateData.themeColor}40)`,
                  }}
                >
                  <defs>
                    <linearGradient id="stateGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={selectedStateData.themeColor} />
                      <stop offset="100%" stopColor={`${selectedStateData.themeColor}CC`} />
                    </linearGradient>
                    <filter id="stateGlow">
                      <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Glow layer — static, no infinite animation */}
                  <path
                    d={selectedStatePath.path}
                    fill={selectedStateData.themeColor}
                    opacity={0.3}
                    style={{ filter: 'blur(15px)' }}
                  />

                  {/* Main state */}
                  <path
                    d={selectedStatePath.path}
                    fill="url(#stateGradient)"
                  />

                  {/* Highlight */}
                  <path
                    d={selectedStatePath.path}
                    fill="url(#highlightGradient)"
                    opacity={0.4}
                  />
                </svg>

                {/* Jar icon on state */}
                <motion.div
                  initial={{ scale: 0, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <img
                    src={jarIcon}
                    alt=""
                    className="w-16 h-20 lg:w-20 lg:h-28 animate-bounce"
                    style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))', animationDuration: '3s' }}
                  />
                </motion.div>
              </motion.div>

              {/* State Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center mt-6"
              >
                <div className="flex items-center gap-2 justify-center mb-2">
                  <MapPin style={{ color: selectedStateData.themeColor }} size={24} />
                  <h2 className="text-2xl lg:text-4xl font-bold text-white">
                    {selectedStateData.name}
                  </h2>
                </div>
                <p className="text-lg" style={{ color: selectedStateData.themeColor }}>
                  {selectedStateData.tagline}
                </p>

                {/* Famous For Tags */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-wrap gap-2 justify-center mt-4"
                >
                  {selectedStateData.famousFor.map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 + i * 0.1 }}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: `${selectedStateData.themeColor}25`,
                        color: selectedStateData.themeColor,
                        border: `1px solid ${selectedStateData.themeColor}40`,
                      }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Side - Products */}
            <motion.div
              initial={{ opacity: 0, x: isMobile ? 0 : 50, y: isMobile ? 12 : 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-full lg:w-1/2 flex-1 lg:h-full overflow-y-auto p-4 lg:p-8 bg-gradient-to-l from-black/80 via-black/60 to-transparent"
            >
              <motion.h3
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg lg:text-2xl font-bold text-white mb-3 lg:mb-6 sticky top-0 bg-black/80 backdrop-blur-md py-2 px-4 rounded-xl -mx-2"
              >
                {isMobile ? 'Products' : `Products from ${selectedStateData.name}`}
              </motion.h3>

              <div className="space-y-4">
                {selectedStateData.products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.15, duration: 0.4 }}
                    className="bg-black/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-300"
                    style={{
                      boxShadow: `0 15px 40px rgba(0,0,0,0.4), 0 0 30px ${selectedStateData.themeColor}15`,
                    }}
                  >
                    <div className="flex">
                      {/* Product Image */}
                      <Link
                        to={`/product/${product.slug}`}
                        className="w-1/3 p-2 lg:p-4 flex items-center justify-center relative overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${selectedStateData.themeColor}30, ${selectedStateData.themeColor}10)`,
                        }}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-22 lg:w-24 lg:h-32 object-contain relative z-10 transition-transform duration-300 hover:scale-110 hover:rotate-[5deg]"
                        />
                      </Link>

                      {/* Product Info */}
                      <div className="flex-1 p-3 lg:p-5">
                        <Link to={`/product/${product.slug}`}>
                          <h4 className="text-sm lg:text-xl font-bold text-white mb-0.5 hover:text-amber-400 transition-colors leading-tight">
                            {product.name}
                          </h4>
                        </Link>
                        <p className="text-gray-400 text-xs lg:text-sm mb-2 line-clamp-1 lg:line-clamp-2">
                          {product.description}
                        </p>

                        <div className="flex items-center justify-between gap-2">
                          <span
                            className="text-base lg:text-2xl font-bold whitespace-nowrap"
                            style={{ color: selectedStateData.themeColor }}
                          >
                            {product.price}
                          </span>

                          {getCartQuantity(product.id) > 0 ? (
                            <div className="flex items-center gap-1 bg-white/10 rounded-lg p-1">
                              <motion.button
                                onClick={() => updateQuantity(product.id, getCartQuantity(product.id) - 1)}
                                className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                                style={{ backgroundColor: `${selectedStateData.themeColor}50` }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <Minus size={16} />
                              </motion.button>
                              <span className="text-white font-bold w-6 text-center">
                                {getCartQuantity(product.id)}
                              </span>
                              <motion.button
                                onClick={() => addToCart({
                                  id: product.id,
                                  name: product.name,
                                  description: product.description,
                                  image: product.image,
                                  price: product.price,
                                })}
                                className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                                style={{ backgroundColor: selectedStateData.themeColor }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <Plus size={16} />
                              </motion.button>
                            </div>
                          ) : (
                            <motion.button
                              onClick={() => addToCart({
                                id: product.id,
                                name: product.name,
                                description: product.description,
                                image: product.image,
                                price: product.price,
                              })}
                              className="flex items-center gap-1.5 px-3 py-2 rounded-xl font-medium text-white text-sm whitespace-nowrap"
                              style={{ backgroundColor: selectedStateData.themeColor }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <ShoppingCart size={15} />
                              <span className="hidden sm:inline">Add to Cart</span>
                              <span className="sm:hidden">Add</span>
                            </motion.button>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Story Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="bg-black/40 backdrop-blur-md rounded-2xl p-5 border border-white/10 mt-6"
                >
                  <h4 className="text-lg font-bold text-white mb-2">The Story</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {selectedStateData.story}
                  </p>
                </motion.div>

                {/* View All Link */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  className="text-center py-4"
                >
                  <Link
                    to="/products"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    View all products →
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
      )}
    </div>
  );
};

export default IndiaMapExplorer;
