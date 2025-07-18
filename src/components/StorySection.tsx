import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Particles from '../blocks/Backgrounds/Particles/Particles';

// Import timeline images
import step1 from '../img/step1.jpg';
import step2 from '../img/step2.jpg';
import step3 from '../img/step3.jpg';
import step4 from '../img/step4.jpg';
import step5 from '../img/step5.jpg';
import step6 from '../img/step6.jpg';
import step7 from '../img/step7.jpg';
import step8 from '../img/step8.jpg';
import step9 from '../img/step9.jpg';
import step10 from '../img/step10.jpg';

// ATPATA timeline data
const TIMELINE_EVENTS = [
  {
    date: '2022-01',
    title: 'The Turning Point – A Life-Altering Accident',
    description: 'Romi Kulthia, a successful entrepreneur, faced a spinal injury that changed everything. During recovery, food became therapy — not just for the body, but for the soul. The idea of making cooking easy, soulful, and full of flavor was born during this time.',
    imageUrl: step1
  },
  {
    date: '2022-04',
    title: 'Discovering the Problem',
    description: 'Realized how many people struggled with daily cooking: No time, no skill, no consistency, no fun. Most readymade mixes tasted artificial or lacked soul. There was no brand making cooking feel homely, fun, and gourmet — all at once.',
    imageUrl: step2
  },
  {
    date: '2022-07',
    title: 'Conceptualizing ATPATA',
    description: 'Started experimenting with homemade curry powders and unique spice blends. The goal: "Make anyone cook like a pro — without spending hours in the kitchen." Focused on pure vegetarian, no preservatives, and Indian flavors with a twist.',
    imageUrl: step3
  },
  {
    date: '2022-10',
    title: 'Building the Brand',
    description: 'Chose the name ATPATA — quirky, bold, unusual — just like our products. Created early test batches and started getting feedback from real users. The results were clear: "This isn\'t just tasty — it\'s life-changing."',
    imageUrl: step4
  },
  {
    date: '2023-02',
    title: 'Product Development',
    description: 'Launched a range of Premix Curry Powders, Signature Sprinklers, and Artisan Seasonings. Made sure each product had: Great shelf life, Authentic ingredients, Fuss-free cooking steps, and Room for creativity.',
    imageUrl: step5
  },
  {
    date: '2023-06',
    title: 'Serving a Bigger Purpose',
    description: 'More than a food brand — ATPATA became a healing movement. For people living alone, professionals, students, and health-conscious families. Also started personalized tiffin services for people with specific needs.',
    imageUrl: step6
  },
  {
    date: '2024-01',
    title: 'Gaining Recognition',
    description: 'Invited to World Food Expo 2024 to showcase our vision and products. Met key global and Indian stakeholders — ATPATA\'s story struck a chord. Recognition followed from food critics, startups, and wellness communities.',
    imageUrl: step7
  },
  {
    date: '2024-05',
    title: 'Preparing to Scale',
    description: 'Formed Bloomrush Foods Pvt. Ltd. as the parent company. Started building a Shopify-based D2C store for ATPATA. Planning exports, collaborations, and retail presence in India & beyond.',
    imageUrl: step8
  },
  {
    date: '2024-09',
    title: 'Community & Innovation',
    description: 'Launched contests to find India\'s most innovative home chefs. Working on new product lines (protein soups, gourmet khichdis, etc.) Tied brand values to sustainability, local sourcing, and tree plantation ideas.',
    imageUrl: step9
  },
  {
    date: '2025-01',
    title: 'The Journey Ahead',
    description: 'ATPATA aims to become a global kitchen companion brand from India. On a mission to make everyday cooking — fun, soulful, and full of "ATPATA-ness".',
    imageUrl: step10
  }
];

// Timeline connector component
const TimelineConnector = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className="w-1 h-full absolute left-[15px] flex flex-col items-center">
      <div 
        className={`w-1 h-full ${isActive ? 'bg-orange-900' : 'bg-orange-900/20'}`}
        style={{
          transition: 'background-color 0.5s ease',
        }}
      ></div>
    </div>
  );
};

// Timeline dot component
const TimelineDot = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className="relative z-10 flex items-center justify-center">
      <motion.div 
        initial={{ scale: 0.8 }}
        animate={{ 
          scale: isActive ? 1.2 : 0.8,
          backgroundColor: isActive ? '#512300' : '#512300'
        }}
        transition={{ duration: 0.5 }}
        className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${isActive ? 'border-orange-400 shadow-lg shadow-orange-500/30' : 'border-orange-600'}`}
      >
        <motion.div 
          initial={{ scale: 0.6 }}
          animate={{ scale: isActive ? 1 : 0.6 }}
          transition={{ duration: 0.5 }}
          className="w-3 h-3 bg-white rounded-full"
        />
      </motion.div>
    </div>
  );
};

// Timeline item component
const TimelineItem = ({ event, index }: { event: typeof TIMELINE_EVENTS[0], index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const [isHovered, setIsHovered] = useState(false);
  
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });

  return (
    <div 
      ref={ref}
      className="relative pl-10 pb-14 last:pb-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute left-0 top-0 h-full">
        {index < TIMELINE_EVENTS.length - 1 && <TimelineConnector isActive={isInView} />}
        <div className="absolute top-0 left-0">
          <TimelineDot isActive={isInView || isHovered} />
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ 
          opacity: isInView ? 1 : 0.3, 
          x: isInView ? 0 : 30,
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="pt-1"
      >
        <motion.div 
          className="text-sm font-medium text-indigo-400 mb-2"
          animate={{ color: isInView ? '#fff' : '#fff' }}
          transition={{ duration: 0.5 }}
        >
          {formattedDate}
        </motion.div>
        
        <motion.div 
          className="bg-orange-950/20 backdrop-blur-sm border border-orange-800 rounded-xl overflow-hidden shadow-xl hover:shadow-orange-500/10 transition-all duration-500"
          whileHover={{ scale: 1.02 }}
          animate={{ 
            borderColor: isInView ? 'rgba(218, 104, 52, 0.3)' : 'rgba(55, 33, 31, 0.5)',
            y: isHovered ? -5 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="md:flex md:items-center">
            <motion.div 
              className="md:w-2/5 h-60 md:h-auto relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src={event.imageUrl} 
                alt={event.title} 
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: isInView ? 1 : 1.2 }}
                transition={{ duration: 0.8 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
            </motion.div>
            
            <div className="p-6 md:w-3/5">
              <motion.h3 
                className="text-xl md:text-2xl font-bold mb-3 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isInView ? 1 : 0.5, 
                  y: isInView ? 0 : 20 
                }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {event.title}
              </motion.h3>
              
              <motion.p 
                className="text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isInView ? 1 : 0.5, 
                  y: isInView ? 0 : 20 
                }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {event.description}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Main Timeline component
export default function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.5, 1, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.95, 1, 1, 0.95]);
  
  return (
    <section id="story" className="relative">
    <motion.div 
      ref={containerRef}
      style={{ opacity, scale }}
      className="relative max-w-5xl mx-auto px-4 py-20"
    >
      {/* <div className="fixed top-0 right-0 w-[100vw] h-[100vh] z-0 opacity-30" >
        <Particles
          particleColors={['#fb923c', '#fb923c']}
          particleCount={5000}
          particleSpread={50}
          speed={0.02}
          particleBaseSize={200}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
          className="w-full h-full" 
        />
      </div>
      <div className="absolute -inset-40 bg-indigo-500/5 blur-[100px] rounded-full"></div> */}
      
      {/* Timeline header */}
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          ATPATA'S INSPIRING JOURNEY
        </motion.h2>
        <div className="w-20 h-1 bg-gradient-to-r from-red-900 to-orange-500 mx-auto rounded-full mb-8"></div>
      </motion.div>
      
      {/* Timeline items */}
      <div className="relative">
        {TIMELINE_EVENTS.map((event, index) => (
          <TimelineItem key={event.date} event={event} index={index} />
        ))}
      </div>
    </motion.div>
    </section>
  );
}
