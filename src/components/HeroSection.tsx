import { motion } from 'framer-motion';
import GradientText from '../blocks/TextAnimations/GradientText/GradientText';
import { useInView } from 'react-intersection-observer';

// Import images
import jar1 from '../img/jar1.png';
import jar2 from '../img/jar2.png';
import jar3 from '../img/jar3.png';
import jar4 from '../img/jar4.png';
import jar5 from '../img/jar5.png';
import jar6 from '../img/jar6.png';
import jar7 from '../img/jar7.png';

const HeroSection = () => {
  const [] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  return (
    <section id="home" className="relative 2xl:h-screen xl:h-screen lg:h-[85vh] md:h-[85vh] flex flex-col items-center justify-between pt-40 2xl:pt-52 ">
      {/* Background with spice-inspired pattern */}
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

      <div className="container mx-auto px-4 md:px-8 lg:px-16 z-10 text-center">
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



     <div className='w-[80%] grid grid-cols-7 gap-4'>
        
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, type: 'spring' }}
          whileHover={{ scale: 1.15, rotate: -10, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
          className='mt-16'
        >
          <img src={jar2} alt="Jar" className="w-full blur-[4px] transition-all duration-300 hover:blur-none" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
          whileHover={{ scale: 1.15, rotate: 5, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
        >
          <img src={jar3} alt="Jar" className="w-full blur-[4px] transition-all duration-300 hover:blur-none" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, type: 'spring' }}
          whileHover={{ scale: 1.15, rotate: -5, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
          className='mt-16'
        >
          <img src={jar4} alt="Jar" className="w-full blur-[4px] transition-all duration-300 hover:blur-none" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
          whileHover={{ scale: 1.15, rotate: 10, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
        >
          <img src={jar1} alt="Jar" className="rotate-12 scale-150" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, type: 'spring' }}
          whileHover={{ scale: 1.15, rotate: -5, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
          className='mt-16'
        >
          <img src={jar6} alt="Jar" className="w-full blur-[4px] transition-all duration-300 hover:blur-none" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, type: 'spring' }}
          whileHover={{ scale: 1.15, rotate: 5, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
        >
          <img src={jar5} alt="Jar" className="w-full blur-[4px] transition-all duration-300 hover:blur-none" />
        </motion.div>

       

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, type: 'spring' }}
          whileHover={{ scale: 1.15, rotate: -5, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
           className='mt-16'
        >
          <img src={jar7} alt="Jar" className="w-full blur-[4px] transition-all duration-300 hover:blur-none" />
        </motion.div>
     </div>
    </section>
  );
};

export default HeroSection;
