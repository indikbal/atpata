
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react'; 
import Aurora from '../blocks/Backgrounds/Aurora/Aurora';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-orange-950/20 backdrop-blur-md text-gray-400">
      <div className="absolute inset-0 transform rotate-180 -z-10 opacity-30">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={2}
      />
      </div>
      <div className="container mx-auto px-4 md:px-8 py-12 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1: Logo & About */}
          <div>
            <div className="mb-4">
             <img src="../src/img/logo.svg" alt="Logo" className="w-32 mb-4"/>
              <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-red-500"></div>
            </div>
            <p className="mb-4">
              Bringing the authentic flavors of India to your kitchen with our premium instant masalas. Each blend tells a story of tradition and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
                
          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-amber-500" />
                <span>123 Spice Market, Culinary District, Flavortown 56789</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-amber-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-amber-500" />
                <span>info@atpata.com</span>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
            <p className="mb-4">Subscribe to our newsletter for recipes, promotions, and flavor inspiration.</p>
            <form className="space-y-2">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white pr-12"
                />
                <button 
                  type="submit"
                  className="absolute right-1 top-1 bg-gradient-to-r from-amber-500 to-red-500 text-white p-1 rounded-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p>&copy; {currentYear} Atpata Spices. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
