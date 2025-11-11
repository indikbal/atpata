import { motion } from 'framer-motion';
import team1Image from '../img/team1.jpg';
import team2Image from '../img/team2.jpg';
import team3Image from '../img/team3.jpg';
import team4Image from '../img/team4.jpg';
import team8Image from '../img/team8.jpg';
import team9Image from '../img/team9.jpg';
import team10Image from '../img/team10.jpg';


const teamMembers = [
  {
    name: 'Romi Kulthia',
    role: 'Founder & CEO',
    image: team1Image,
  },
  {
    name: 'Mr Shivkumar',
    role: 'Director',
    image: team2Image,
  },
  {
    name: 'Mr Santosh',
    role: 'Advisor',
    image: team3Image,
  },
  {
    name: 'Sharath',
    role: 'Advisor',
    image: team8Image,
  },
  // {
  //   name: 'Souvik',
  //   role: 'Content creator',
  //   image: team4Image,
  // },
  // {
  //   name: 'Yeshwant',
  //   role: 'Operation Manager',
  //   image: team5Image,
  // },
  // {
  //   name: 'Yashas',
  //   role: 'Content creator',
  //   image: team6Image,
  // },
  // {
  //   name: 'Nidhi',
  //   role: 'NPD',
  //   image: team9Image,
  // },
  {
    name: 'Monika',
    role: 'Innovation Specialist',
    image: team10Image,
  },
  
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 rounded-lg p-6 text-center border border-gray-800/50 shadow-lg hover:shadow-amber-500/10 transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative inline-block mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-64 h-80 object-cover border-4 border-amber-500/50"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-amber-400 mb-4">{member.role}</p>
              {/* <div className="flex justify-center space-x-4 text-gray-400">
                <a href="#" className="hover:text-amber-500 transition-colors"><Twitter size={20} /></a>
                <a href="#" className="hover:text-amber-500 transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-amber-500 transition-colors"><Github size={20} /></a>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
