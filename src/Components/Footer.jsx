import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Mail, ChevronRight } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="w-full bg-black text-white pt-20 pb-10 px-8 md:px-16 lg:px-24 border-t-4 border-[#e83e8c] relative overflow-hidden">
      {/* Background Animated Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.05, 0.1, 0.05] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-0 right-10 w-64 h-64 bg-[#e83e8c] rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
        
        {/* Left Section: Company Info */}
        <div className="md:col-span-7 flex flex-col items-start text-left">
          {/* Company Name closer to Private Limited */}
          <Link to="/" className="mb-8 block group">
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-none">
              Anumaa Infra Technologies
            </h3>
            <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#e83e8c] mt-1 leading-none group-hover:text-pink-500 transition-colors">
              Private Limited
            </h4>
          </Link>

          <div className="space-y-6 text-gray-400 font-medium">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#e83e8c] flex-shrink-0 mt-1" />
              <p className="leading-relaxed max-w-md">
                Plot No. 41 & 42, Ravi Colony, Mahendra Hills, Nehrunagar (Hyderabad), Hyderabad, Secunderabad, Telangana, India  500026
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-[#e83e8c] flex-shrink-0" />
              <a href="mailto:support@anumaainfratechno.in" className="hover:text-white transition-colors">
                support@anumaainfratechno.in
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section: Quick Links */}
        <div className="md:col-span-5 flex flex-col md:items-center text-left md:text-center">
          <div className="w-full md:w-auto">
            <h4 className="text-xl font-bold uppercase text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-[#e83e8c] hidden md:block"></span>
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index} className="flex items-center md:justify-center group">
                  <ChevronRight className="w-4 h-4 text-[#e83e8c] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:block absolute -ml-6" />
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-[#e83e8c] font-bold uppercase tracking-wider text-sm transition-colors relative"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Section: Divider, Copyright & Legal Links */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        <p className="text-gray-500 text-sm font-medium">
          © {new Date().getFullYear()} Anumaa Infra Technologies Pvt Ltd. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <Link to="/privacy-policy" className="text-gray-500 hover:text-white text-sm font-medium transition-colors">
            Privacy Policy
          </Link>
          <span className="text-gray-700">|</span>
          <Link to="/terms-and-conditions" className="text-gray-500 hover:text-white text-sm font-medium transition-colors">
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;