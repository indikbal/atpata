import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function StorySection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const storyPoints = [
    {
      year: "Tradition",
      title: "Ancient Culinary Heritage",
      description: "Our journey begins with centuries of culinary tradition, passed down through generations of spice masters who understood the delicate balance of flavors."
    },
    {
      year: "Discovery",
      title: "The Spice Expedition",
      description: "We traveled across regions known for their distinctive spice profiles, learning from local experts and documenting authentic preparation methods."
    },
    {
      year: "Craft",
      title: "Perfecting the Blend",
      description: "Years were spent in our test kitchen, perfecting each blend through countless iterations until we achieved the perfect balance of flavors."
    },
    {
      year: "Innovation",
      title: "Modern Transformation",
      description: "We pioneered techniques to transform these traditional blends into instant mixes that preserve their authentic flavors while meeting the needs of modern kitchens."
    }
  ];

  return (
    <section id="story" className="relative py-24 bg-[#0f0705] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0302] via-[#0f0705] to-[#0a0302]"></div>
      
      {/* Decorative spice powder splash */}
      <motion.div 
        className="absolute -right-40 top-40 w-96 h-96 bg-gradient-to-br from-amber-600/20 to-red-800/10 rounded-full blur-3xl"
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
      <motion.div 
        className="absolute -left-40 bottom-40 w-96 h-96 bg-gradient-to-br from-red-800/10 to-amber-600/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.5, 1], 
          opacity: [0.5, 0.8, 0.5] 
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1.5 
        }}
      ></motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-600">
              The Atpata Story
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A journey through time, tradition, and taste that brought us to create
            the perfect spice blends for the modern culinary explorer.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-600 to-red-600 mx-auto mt-6"></div>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-600/50 via-red-600/50 to-amber-600/50"></div>
          
          {/* Story points */}
          {storyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative mb-24 ${index % 2 === 0 ? 'md:pr-[50%] text-right' : 'md:pl-[50%] md:text-left'} px-12`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-amber-500 to-red-600 shadow-lg shadow-amber-900/30 z-10"></div>
              
              <div className={`relative ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                <span className="inline-block px-4 py-1 rounded-full bg-amber-900/30 text-amber-400 text-sm font-semibold mb-2">{point.year}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{point.title}</h3>
                <p className="text-gray-300">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
