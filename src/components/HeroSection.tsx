import { motion } from 'framer-motion';
import GradientText from '../blocks/TextAnimations/GradientText/GradientText';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  return (
    <section id="home" className="relative h-screen flex items-start pt-40 2xl:pt-52 justify-center overflow-hidden">
      {/* Background with spice-inspired pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-stone-900 z-0">
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

      <div className="container mx-auto px-4 md:px-8 z-10 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          
          <GradientText 
            children="We are atpata"
            className='text-5xl md:text-[5rem] lg:text-[5rem] 2xl:text-[7rem] font-extrabold font-comfortaa'
          />
          </motion.div>      

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl md:text-2xl lg:text-xl 2xl:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto font-light font-comfortaa"
        >
          Instant flavors that transform <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-red-600">ordinary meals </span> into extraordinary culinary experiences
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#products"
            className="px-12 py-3 bg-gradient-to-r from-amber-600 to-red-600 rounded-2xl text-white text-lg hover:from-amber-500 hover:to-red-500 transition-all duration-300 inline-block"
          >
            Explore Flavors
          </a>
        </motion.div>
      </div>

      {/* Scrolling indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/60 rounded-full"></div>
        </div>
      </motion.div>




     <div className='absolute right-[50%] transform translate-x-1/2 -bottom-36 w-[80%] grid grid-cols-5 gap-4'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
          whileHover={{ scale: 1.15, rotate: 10, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
        >
          <img src="../src/img/jar1.png" alt="Jar" className="w-full" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, type: 'spring' }}
          whileHover={{ scale: 1.15, rotate: -10, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
          className='mt-16'
        >
          <img src="../src/img/jar2.png" alt="Jar" className="w-full" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
          whileHover={{ scale: 1.15, rotate: 5, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
        >
          <img src="../src/img/jar3.png" alt="Jar" className="w-full" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, type: 'spring' }}
          whileHover={{ scale: 1.15, rotate: -5, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
          className='mt-16'
        >
          <img src="../src/img/jar4.png" alt="Jar" className="w-full" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, type: 'spring' }}
          whileHover={{ scale: 1.15, rotate: 5, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
        >
          <img src="../src/img/jar5.png" alt="Jar" className="w-full" />
        </motion.div>
     </div>
    </section>
  );
};

export default HeroSection;
