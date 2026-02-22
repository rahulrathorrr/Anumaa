import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from "../assets/logo.png";

const Header = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'services', path: '/services' },
    { name: 'How it works', path: '/how-it-works' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full py-4 px-8 md:px-16 flex justify-between items-center bg-white sticky top-0 z-50 shadow-sm"
    >
      {/* Logo + Company Name */}
      <motion.div 
        animate={{ y: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <Link to="/" className="flex items-center gap-3">
          
          {/* Logo Image */}
          <img 
            src={logo} 
            alt="logo" 
            className="h-10 md:h-12 w-auto object-contain"
          />

          {/* Company Name */}
          <span className="text-lg md:text-2xl font-extrabold tracking-tight text-black">
            ANUMAA INFRA TECHNOLOGIES
          </span>

        </Link>
      </motion.div>

      {/* Navigation Links */}
      <nav className="hidden md:flex gap-8 items-center">
        {navLinks.map((link, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -2 }}
            className="relative group"
          >
            <Link 
              to={link.path} 
              className="text-sm font-bold text-gray-900 capitalize hover:text-[#e83e8c] transition-colors"
            >
              {link.name}
            </Link>

            <motion.div className="h-[2px] w-0 bg-[#e83e8c] group-hover:w-full transition-all duration-300 mt-1 absolute left-0" />
          </motion.div>
        ))}
      </nav>
    </motion.header>
  );
};

export default Header;