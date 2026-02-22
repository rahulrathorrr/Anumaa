import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-white overflow-hidden px-8 md:px-16 pt-12 pb-24">
      {/* Background continuous moving elements */}
      <motion.div 
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute -top-20 -right-20 w-96 h-96 border-[40px] border-gray-50 rounded-full z-0"
      />
      <motion.div 
        animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 w-24 h-24 border-[8px] border-[#e83e8c] rounded-full opacity-10 z-0"
      />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 w-full z-10">
        
        {/* Left Content Area */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-8"
        >
          {/* Pink decorative line from the design */}
          <motion.div 
            animate={{ scaleX: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="w-16 h-1 bg-[#e83e8c] origin-left"
          />

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-gray-900">
            We Keep Your Software Running, So You Can Keep Building.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl font-medium">
            Anumaa Infra Technologies is a Hyderabad-based software support and maintenance startup on a mission to eliminate technical downtime for growing businesses. We combine intelligent monitoring, AI-assisted diagnostics, and rapid-response maintenance to make sure your software stack never becomes your biggest problem.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-transparent border-2 border-[#e83e8c] text-[#e83e8c] font-bold text-lg hover:bg-[#e83e8c] hover:text-white transition-all duration-300 shadow-sm"
              >
                [ Get a Free Health Check ]
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Link 
                to="/how-it-works" 
                className="flex items-center gap-2 px-6 py-4 text-gray-900 font-bold text-lg hover:text-[#e83e8c] transition-colors"
              >
                [ See How It Works ] <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image Area with floating animation */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative w-full flex justify-center lg:justify-end"
        >
          <motion.img 
            animate={{ y: [-20, 20, -20] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            /* Added a suitable placeholder image related to tech/software. It is grayscaled to match the reference UI vibe */
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" 
            alt="Software Maintenance Team" 
            className="w-full max-w-lg object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl rounded-sm"
          />
          
          {/* Small overlapping moving element near image */}
          <motion.div 
            animate={{ rotate: [0, 90, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#e83e8c] z-[-1]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;