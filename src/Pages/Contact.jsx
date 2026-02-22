import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Globe, Building2, Send, 
  CheckCircle2, MessageSquare, HelpCircle, ChevronRight
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan actual API call aayegi (e.g., EmailJS ya backend)
    setIsSubmitted(true);
  };

  const faqs = [
    {
      q: "Do you support all programming languages and stacks?",
      a: "We work across a wide range of modern web and mobile stacks. During the health audit, we confirm compatibility before any commitment is made."
    },
    {
      q: "What's the minimum commitment?",
      a: "None. Our Starter plan is month-to-month. We'd rather earn your trust every month than lock you into something."
    },
    {
      q: "Can you take over support from an existing provider?",
      a: "Yes, and we're good at it. We have a structured transition protocol that minimizes disruption to your ongoing operations."
    },
    {
      q: "Do you sign NDAs?",
      a: "Absolutely. We handle that before we ever look at your code or infrastructure."
    },
    {
      q: "Is your team available on weekends?",
      a: "Scale plan clients have 24/7 incident coverage. Starter and Growth plans have defined support windows that we'll agree on upfront."
    }
  ];

  return (
    <div className="w-full bg-white overflow-hidden text-gray-900">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[50vh] flex flex-col items-center justify-center bg-gray-50 overflow-hidden px-8 md:px-16 py-16">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute -top-32 -left-32 w-[500px] h-[500px] border-[60px] border-white rounded-full z-0 shadow-sm"
        />
        <motion.div 
          animate={{ y: [-30, 30, -30], x: [20, -20, 20] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-24 h-24 bg-[#e83e8c] opacity-10 rounded-full z-0"
        />

        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-4xl mx-auto space-y-8 mt-8"
        >
          <motion.div 
            animate={{ width: ["0%", "100%", "0%"] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="h-1 bg-[#e83e8c] mx-auto mb-6"
          />
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-black">
            CONTACT
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-[#e83e8c] tracking-tight leading-tight uppercase">
            Let's Talk About Your Software
          </p>
          <p className="text-lg text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
            Whether you have a burning incident, a question about our services, or just want to understand what a software health audit looks like  we want to hear from you. No automated responses. A real person from our team will get back to you within a few hours.
          </p>
        </motion.div>
      </section>

      {/* ================= CONTACT INFO & FORM SECTION ================= */}
      <section className="relative py-24 bg-white px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Contact Details & What Happens */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="flex-1 space-y-12"
          >
            {/* Reach Us Directly */}
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight uppercase text-black mb-6">Reach Us Directly</h2>
              <div className="w-16 h-1 bg-[#e83e8c] mb-8"></div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-50 flex items-center justify-center rounded-sm flex-shrink-0">
                    <Building2 className="w-6 h-6 text-[#e83e8c]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Company:</p>
                    <p className="text-lg text-gray-800 font-medium">Anumaa Infra Technologies Private Limited</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-50 flex items-center justify-center rounded-sm flex-shrink-0">
                    <Globe className="w-6 h-6 text-[#e83e8c]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Website:</p>
                    <p className="text-lg text-[#e83e8c] font-medium">anumaainfratechno.in</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-50 flex items-center justify-center rounded-sm flex-shrink-0 mt-1">
                    <MapPin className="w-6 h-6 text-[#e83e8c]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Address:</p>
                    <p className="text-lg text-gray-800 font-medium leading-relaxed">
                      Plot No. 41 & 42, Ravi Colony, Mahendra Hills, Nehrunagar (Hyderabad), Hyderabad, Secunderabad, Telangana, India  500026
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What Happens After You Submit? */}
            <div className="bg-gray-50 p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-black uppercase mb-6">What Happens After You Submit?</h3>
              <ul className="space-y-4">
                {[
                  "A team member reviews your message  no bots, no ticket queue black holes",
                  "You hear back within a few hours on business days",
                  "If it's a critical incident, indicate that in your message and we'll prioritize"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#e83e8c] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-gray-600 font-medium italic border-l-4 border-[#e83e8c] pl-4">
                We don't do high-pressure sales calls. If we're a good fit, we'll both know it pretty quickly.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="bg-white p-8 md:p-10 shadow-2xl border border-gray-100 relative overflow-hidden h-full flex flex-col justify-center">
              {/* Decorative top border */}
              <div className="absolute top-0 left-0 w-full h-2 bg-[#e83e8c]"></div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, x: -50 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-extrabold text-black uppercase mb-8 flex items-center gap-3">
                      <MessageSquare className="w-6 h-6 text-[#e83e8c]" />
                      Send a Message
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <input type="text" required placeholder="Full Name" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 focus:border-[#e83e8c] focus:outline-none focus:ring-1 focus:ring-[#e83e8c] transition-colors" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="email" required placeholder="Email Address" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 focus:border-[#e83e8c] focus:outline-none focus:ring-1 focus:ring-[#e83e8c] transition-colors" />
                        <input type="tel" placeholder="Phone Number (optional)" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 focus:border-[#e83e8c] focus:outline-none focus:ring-1 focus:ring-[#e83e8c] transition-colors" />
                      </div>
                      <div>
                        <input type="text" required placeholder="Company Name" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 focus:border-[#e83e8c] focus:outline-none focus:ring-1 focus:ring-[#e83e8c] transition-colors" />
                      </div>
                      <div>
                        <textarea required rows="4" placeholder="Tell us what's going on (your message)" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 focus:border-[#e83e8c] focus:outline-none focus:ring-1 focus:ring-[#e83e8c] transition-colors resize-none"></textarea>
                      </div>
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      type="submit" 
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-bold text-lg hover:bg-[#e83e8c] transition-colors shadow-lg"
                    >
                      [ Submit ] <Send className="w-5 h-5" />
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}
                    className="flex flex-col items-center justify-center text-center space-y-4 py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-black uppercase text-black">Message Sent!</h3>
                    <p className="text-gray-600 font-medium">Thank you for reaching out. A real person from our team will get back to you shortly.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 text-[#e83e8c] font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="relative py-24 bg-gray-900 text-white px-8 md:px-16 lg:px-24 overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ repeat: Infinity, duration: 15 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#e83e8c] rounded-full blur-[100px] pointer-events-none"
        />

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16 items-start">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="lg:w-1/3">
            <HelpCircle className="w-12 h-12 text-[#e83e8c] mb-6" />
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase mb-6">
              FAQ  Quick Answers
            </h2>
            <div className="w-16 h-1 bg-[#e83e8c]"></div>
            
            {/* Added a moving image to keep consistent with other pages */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="mt-12 w-full h-64 border-4 border-gray-800 relative hidden lg:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop" 
                alt="Support" 
                className="w-full h-full object-cover grayscale opacity-50"
              />
              <div className="absolute inset-0 bg-[#e83e8c] mix-blend-overlay opacity-20"></div>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="lg:w-2/3 space-y-6"
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} variants={fadeIn} whileHover={{ x: 5 }}
                className="bg-gray-800/50 backdrop-blur-sm p-8 border-l-4 border-transparent hover:border-[#e83e8c] transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold uppercase text-white mb-3 flex items-start gap-3">
                  <ChevronRight className="w-6 h-6 text-[#e83e8c] flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  {faq.q}
                </h3>
                <p className="text-gray-400 leading-relaxed pl-9">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default Contact;