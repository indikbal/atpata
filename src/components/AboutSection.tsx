import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Aurora from '../blocks/Backgrounds/Aurora/Aurora';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="about" className="pb-20 bg-gradient-to-t from-red-950/10  to-orange-950/40 relative">
         <div className='opacity-30'>
         <Aurora
              colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
              blend={0.5}
              amplitude={1.0}
              speed={1.5}
            />
         </div>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-600"
          >
            About Atpata
          </motion.h2>

          <motion.div variants={itemVariants} className="mb-12 text-center">
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-red-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div variants={itemVariants} className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4 text-white">Inspired by Tradition, Crafted for Convenience</h3>
              <p className="text-gray-300 mb-4">
                Atpata was born from a passion to bring authentic Indian flavors to modern kitchens without compromising on taste or quality. Our instant masalas capture the essence of traditional recipes while saving you time.
              </p>
              <p className="text-gray-300 mb-4">
                What sets us apart is our commitment to using premium ingredients, traditional grinding methods, and innovative flavor combinations that can't be found elsewhere.
              </p>
              <p className="text-gray-300 mb-4">
                We are committed to making cooking easy, soulful, and full of flavor. Our products are made with love and care, and we are proud to offer a range of products that will make your cooking experience enjoyable and delicious.
              </p>
            
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              className="order-1 md:order-2 relative"
            >
              <div className="relative w-full relative z-10">
                <img 
                  src="../src/img/abt.png" 
                  alt="Spices" 
                  className="w-full h-full object-cover"
                />
              </div>
         
              <motion.div 
                variants={itemVariants}
                className="absolute -top-6 -right-6 w-40 h-40 bg-red-600 rounded-full opacity-20"></motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
