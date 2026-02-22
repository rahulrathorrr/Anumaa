import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
      className="w-full py-6 px-8 md:px-16 flex justify-between items-center bg-white sticky top-0 z-50 shadow-sm"
    >
      {/* Animated Logo */}
      <motion.div 
        animate={{ y: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <Link to="/" className="text-2xl md:text-3xl font-extrabold tracking-tighter text-black">
          ANUMAA INFRA TECHNOLOGIES
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
            {/* Small pink indicator on hover matching the theme */}
            <motion.div className="h-[2px] w-0 bg-[#e83e8c] group-hover:w-full transition-all duration-300 mt-1 absolute left-0" />
          </motion.div>
        ))}
      </nav>
    </motion.header>
  );
};

export default Header;