import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Brain, ShieldCheck, MessageSquare, 
  Layers, BookOpen, Target, CheckCircle2 
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

const About = () => {
  return (
    <div className="w-full bg-white overflow-hidden text-gray-900">
      
      {/* ================= HERO SECTION (Height Reduced) ================= */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center bg-gray-50 overflow-hidden px-8 md:px-16 py-16">
        {/* Animated Background Shapes */}
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute -top-32 -right-32 w-[400px] h-[400px] border-[50px] border-white rounded-full z-0 shadow-sm"
        />
        <motion.div 
          animate={{ y: [-30, 30, -30], x: [-20, 20, -20] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute bottom-10 left-10 w-24 h-24 bg-[#e83e8c] opacity-10 z-0"
        />

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-4xl mx-auto space-y-6 mt-8"
        >
          <motion.div 
            animate={{ width: ["0%", "100%", "0%"] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="h-1 bg-[#e83e8c] mx-auto mb-6"
          />
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-black">
            ABOUT US
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-medium tracking-widest uppercase">
            Anumaa Infra Technologies
          </p>
        </motion.div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="relative py-24 px-8 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="flex-1 space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-[#e83e8c]"></div>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed font-medium">
              <p>
                Anumaa Infra Technologies was born out of a straightforward observation: most software failures are predictable, yet most support setups are purely reactive. We saw teams burning hours chasing bugs that smarter tooling would have caught days earlier. We saw founders lose sleep over production incidents that proper maintenance cadences would have prevented.
              </p>
              <p className="text-black font-bold text-xl">
                So we built something different.
              </p>
              <p>
                Started in Hyderabad and registered as Anumaa Infra Technologies Private Limited, we set out to create a software support and maintenance practice that is genuinely proactive, AI-augmented, and built to move at the pace that modern products demand.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="flex-1 relative w-full h-[500px]"
          >
            {/* Image with moving animation */}
            <motion.img 
              animate={{ y: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="Our Story" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl relative z-10"
            />
            {/* Decorative moving square behind image */}
            <motion.div 
              animate={{ rotate: [0, 90, 0] }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="absolute -bottom-8 -left-8 w-48 h-48 border-[10px] border-[#e83e8c] z-0"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= WHAT DRIVES US ================= */}
      <section className="relative py-24 px-8 md:px-16 lg:px-24 bg-black text-white overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ repeat: Infinity, duration: 8 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#e83e8c] rounded-full blur-[150px] z-0 pointer-events-none"
        />
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="max-w-4xl mx-auto text-center space-y-8 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase">
            What Drives Us
          </h2>
          <div className="w-20 h-1 bg-[#e83e8c] mx-auto"></div>
          <p className="text-xl text-gray-300 leading-relaxed font-medium">
            We believe that good software maintenance is invisible. When done right, your users never feel a hiccup, your engineers never scramble at 2 AM, and your releases go out on schedule. That invisibility is what we work toward every single day.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed font-medium">
            We're a small but deeply focused team. We don't try to be everything for everyone. Software support and maintenance is our domain, and we obsess over doing it better than anyone else.
          </p>
        </motion.div>
      </section>

      {/* ================= OUR APPROACH ================= */}
      <section className="relative py-24 px-8 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="mb-16 space-y-6 max-w-3xl"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase">
              Our Approach: AI-First Maintenance
            </h2>
            <div className="w-20 h-1 bg-[#e83e8c]"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              The traditional approach to software maintenance is human-first: someone notices a problem, raises a ticket, and a developer eventually gets to it. The timeline is unpredictable. The resolution is inconsistent.
            </p>
            <p className="text-lg text-black font-bold">
              We've rethought that flow. At Anumaa, AI is embedded at every stage of our support pipeline:
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="flex-1 space-y-6"
            >
              {[
                "AI-powered log analysis surfaces anomalies before they escalate",
                "Machine learning models predict failure probability based on historical patterns",
                "Natural language processing assists engineers in triaging and documenting incidents faster",
                "Automated dependency scanning flags security risks the moment they're disclosed upstream"
              ].map((item, index) => (
                <motion.div 
                  key={index} variants={fadeIn} whileHover={{ x: 10 }}
                  className="flex items-start gap-4 bg-white p-6 shadow-sm border-l-4 border-[#e83e8c]"
                >
                  <Brain className="w-6 h-6 text-[#e83e8c] flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
              <motion.p variants={fadeIn} className="text-lg text-gray-600 leading-relaxed mt-8 bg-pink-50 p-6 border border-pink-100">
                Our engineers aren't replaced by AI  they're amplified by it. They spend less time on routine triage and more time on the high-judgment work that actually moves the needle.
              </motion.p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="flex-1 relative w-full h-[600px] hidden lg:block"
            >
              {/* Image moving up and down continuously */}
              <motion.img 
                animate={{ y: [20, -20, 20] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop" 
                alt="AI Approach Code" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= OUR VALUES ================= */}
      <section className="relative py-24 px-8 md:px-16 lg:px-24 bg-white">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="max-w-7xl mx-auto mb-16 text-center flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase">Our Values</h2>
          <div className="w-20 h-1 bg-[#e83e8c] mt-6"></div>
        </motion.div>

        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {[
            { icon: <Target />, title: "Proactive over Reactive", desc: "We'd rather prevent an outage than respond to one. Every system we support gets the benefit of anticipation, not just resolution." },
            { icon: <MessageSquare />, title: "Radical Transparency", desc: "You'll never wonder what's happening on our end. Clear communication, regular updates, and honest assessments  always." },
            { icon: <Layers />, title: "Depth over Breadth", desc: "We specialize. Software support and maintenance is not a side offering for us  it's the entire product. That focus makes us better at it." },
            { icon: <BookOpen />, title: "Continuous Learning", desc: "Every incident teaches us something. Every client system makes us sharper. We document, review, and improve  constantly." }
          ].map((value, index) => (
            <motion.div 
              key={index} variants={fadeIn} whileHover={{ y: -5 }}
              className="group p-10 border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="text-[#e83e8c] mb-6">
                {React.cloneElement(value.icon, { className: "w-10 h-10" })}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black uppercase">{value.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= WHERE WE'RE BASED ================= */}
      <section className="relative py-20 px-8 md:px-16 lg:px-24 bg-black text-white text-center">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="max-w-4xl mx-auto space-y-8 flex flex-col items-center"
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-16 h-16 bg-[#e83e8c] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#e83e8c]/30"
          >
            <MapPin className="w-8 h-8 text-white" />
          </motion.div>
          
          <h2 className="text-4xl font-extrabold tracking-tight uppercase">Where We're Based</h2>
          <div className="w-20 h-1 bg-[#e83e8c]"></div>
          
          <p className="text-2xl font-bold text-gray-200 uppercase tracking-wider pt-4">
            Plot No. 41 & 42, Ravi Colony, Mahendra Hills, Nehrunagar, Hyderabad, Telangana  500026, India.
          </p>
          
          <p className="text-lg text-gray-400 font-medium max-w-3xl leading-relaxed">
            Our team operates across flexible hours to support clients across time zones. While our roots are in Hyderabad, our ambitions (and our uptime commitments) are global.
          </p>
        </motion.div>
      </section>

    </div>
  );
};

export default About;