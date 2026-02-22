import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Mail, ChevronRight } from 'lucide-react';
import logo from "../assets/logo.png";

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="w-full bg-black text-white pt-20 pb-10 px-6 md:px-16 border-t-4 border-[#e83e8c] relative overflow-hidden">

      {/* Background Glow */}
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.05, 0.1, 0.05] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-0 right-10 w-72 h-72 bg-[#e83e8c] rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
        
        {/* Company Section */}
        <div className="md:col-span-7">
          <Link to="/" className="flex items-start gap-4 group mb-8">
            
            {/* Logo */}
            <img
              src={logo}
              alt="IAMW Logo"
              className="h-16 md:h-20 w-auto object-contain"
            />

            {/* Company Name */}
            <div className="leading-none">
              <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
                Anumaa Infra Technologies
              </h3>

              <p className="text-lg md:text-xl font-bold text-[#e83e8c] mt-1 group-hover:text-pink-400 transition-colors">
                Private Limited
              </p>
            </div>
          </Link>

          {/* Address & Email */}
          <div className="space-y-6 text-gray-400 font-medium">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#e83e8c] mt-1 flex-shrink-0" />
              <p className="leading-relaxed max-w-md">
                Plot No. 41 & 42, Ravi Colony, Mahendra Hills, Nehrunagar,
                Hyderabad, Secunderabad, Telangana, India – 500026
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-[#e83e8c]" />
              <a 
                href="mailto:support@anumaainfratechno.in"
                className="hover:text-white transition-colors"
              >
                support@anumaainfratechno.in
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-5 flex md:justify-center">
          <div>
            <h4 className="text-xl font-bold uppercase mb-6">
              Quick Links
            </h4>

            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="flex items-center gap-2 text-gray-400 hover:text-[#e83e8c] font-bold uppercase text-sm tracking-wide transition-all group"
                  >
                    <ChevronRight className="w-4 h-4 text-[#e83e8c] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        
        <p className="text-gray-500 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Anumaa Infra Technologies Pvt Ltd. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <Link to="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition-colors">
            Privacy Policy
          </Link>

          <Link to="/terms-and-conditions" className="text-gray-500 hover:text-white text-sm transition-colors">
            Terms & Conditions
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;