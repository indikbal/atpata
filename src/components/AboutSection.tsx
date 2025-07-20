import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


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
    <section  className="pb-20 pt-0 md:pt-24 relative">      
        
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
         
          <div className="grid md:grid-cols-1 text-center">
            <motion.div variants={itemVariants} className="order-2 md:order-1">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-600">Inspired by Tradition, Crafted for Convenience</h3>
              <p className="text-gray-300 mb-4 text-xl">
                Atpata was born from a passion to bring authentic Indian flavors to modern kitchens without compromising on taste or quality. Our instant masalas capture the essence of traditional recipes while saving you time.
              </p>
              <p className="text-gray-300 mb-4 text-xl">
                What sets us apart is our commitment to using premium ingredients, traditional grinding methods, and innovative flavor combinations that can't be found elsewhere.
              </p>
              <p className="text-gray-300 mb-4 text-xl">
                We are committed to making cooking easy, soulful, and full of flavor. Our products are made with love and care, and we are proud to offer a range of products that will make your cooking experience enjoyable and delicious.
              </p>
            
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
