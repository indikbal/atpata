import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
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
    <section id="about" className="py-20 bg-gradient-to-t from-red-950/10  to-orange-950/40 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4 text-center text-amber-500"
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
              <p className="text-gray-300">
                Every pack of Atpata masala is a celebration of India's rich culinary heritage, meticulously crafted to transform ordinary ingredients into extraordinary dishes.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              className="order-1 md:order-2 relative"
            >
              <div className="relative w-full h-80 md:h-96 overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1532666661413-871a4227e256?q=80&w=1200&auto=format&fit=crop" 
                  alt="Spices" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-amber-500 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-14 h-14 bg-red-600 rounded-full opacity-20"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
