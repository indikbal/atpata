import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github } from 'lucide-react';

const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'Founder & CEO',
    image: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'John Smith',
    role: 'Head of Product',
    image: 'https://i.pravatar.cc/150?img=2',
  },
  {
    name: 'Emily White',
    role: 'Lead Chef',
    image: 'https://i.pravatar.cc/150?img=3',
  },
  {
    name: 'Michael Brown',
    role: 'Marketing Director',
    image: 'https://i.pravatar.cc/150?img=4',
  },
  {
    name: 'Jane Doe',
    role: 'Founder & CEO',
    image: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'John Smith',
    role: 'Head of Product',
    image: 'https://i.pravatar.cc/150?img=2',
  },
  {
    name: 'Emily White',
    role: 'Lead Chef',
    image: 'https://i.pravatar.cc/150?img=3',
  },
  {
    name: 'Michael Brown',
    role: 'Marketing Director',
    image: 'https://i.pravatar.cc/150?img=4',
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
                  className="w-64 h-64 object-cover border-4 border-amber-500/50"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-amber-400 mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4 text-gray-400">
                <a href="#" className="hover:text-amber-500 transition-colors"><Twitter size={20} /></a>
                <a href="#" className="hover:text-amber-500 transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-amber-500 transition-colors"><Github size={20} /></a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
