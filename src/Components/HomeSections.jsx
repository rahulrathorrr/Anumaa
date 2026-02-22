import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Activity, Bug, Zap, Shield, AlertTriangle, Code, 
  CheckCircle2, ArrowRight, Quote
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

const HomeSections = () => {
  return (
    <div className="w-full bg-white overflow-hidden text-gray-900">
      
      {/* ================= SECTION  THE PROBLEM WE'RE SOLVING ================= */}
      <section className="relative py-24 px-8 md:px-16 lg:px-24">
        {/* Floating background element */}
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-64 h-64 bg-gray-50 rounded-full z-0"
        />
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
            className="flex-1 space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase">
              THE PROBLEM WE'RE SOLVING
            </h2>
            <div className="w-20 h-1 bg-[#e83e8c]"></div>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Most software doesn't break all at once. It slows down, drifts, accumulates technical debt, and quietly erodes the user experience  until one day it just stops working at the worst possible moment. Traditional IT support reacts. We don't.
            </p>
            <p className="text-xl font-bold text-black">
              We built Anumaa to flip that model.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our platform uses AI-assisted anomaly detection to catch issues in your software infrastructure before they surface as user-facing failures. Think of us as a proactive engineering partner embedded into your operations  without the overhead of a full in-house team.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
              alt="Server Infrastructure" 
              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION  WHAT WE DO ================= */}
      <section className="relative py-24 px-8 md:px-16 lg:px-24 bg-gray-50">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="max-w-7xl mx-auto mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase">WHAT WE DO</h2>
          <div className="w-20 h-1 bg-[#e83e8c]"></div>
          <p className="text-lg text-gray-600 max-w-3xl pt-4">
            We specialize in end-to-end software support and maintenance  from routine patches and performance tuning to complex incident management and long-term stability planning. Here is a snapshot of our core offerings:
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            { icon: <Activity />, title: "1. Intelligent Proactive Monitoring", desc: "Our monitoring layer runs 24/7 across your software stack. Powered by AI-driven pattern recognition, it identifies irregularities in system behavior, memory usage, API response times, and more  flagging anomalies before they become incidents." },
            { icon: <Bug />, title: "2. Bug Triage & Resolution", desc: "When bugs surface, speed matters. We maintain a dedicated triage pipeline that categorizes, prioritizes, and resolves defects using a structured workflow. Our AI assistant helps engineers quickly trace root causes across logs and codebases  cutting mean time to resolution significantly." },
            { icon: <Zap />, title: "3. Performance Optimization", desc: "Slow software is broken software. We audit your application's performance benchmarks, identify bottlenecks, and implement targeted fixes  whether that's optimizing database queries, refactoring inefficient logic, or tuning server configurations." },
            { icon: <Shield />, title: "4. Patch & Dependency Management", desc: "Security vulnerabilities and outdated dependencies are silent killers. We track your software's entire dependency graph and maintain a scheduled patching cadence, so your stack stays current and secure without disrupting your product roadmap." },
            { icon: <AlertTriangle />, title: "5. Incident Response & Post-Mortem Analysis", desc: "When something goes wrong  and sometimes it does  we mobilize fast. Our incident response protocol includes real-time communication, rollback support, and a detailed post-mortem report so the same issue never happens twice." },
            { icon: <Code />, title: "6. AI-Augmented Code Reviews & Maintenance", desc: "We use AI-assisted code analysis tools to review code changes, surface hidden risk, and suggest improvements  making maintenance not just reactive but genuinely evolutionary over time." }
          ].map((service, index) => (
            <motion.div 
              key={index} variants={fadeIn} whileHover={{ y: -10 }}
              className="bg-white p-8 shadow-sm border border-gray-100 hover:border-[#e83e8c] transition-colors duration-300 group relative overflow-hidden"
            >
              <div className="text-[#e83e8c] mb-6 w-12 h-12 bg-pink-50 flex items-center justify-center rounded-sm group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{service.desc}</p>
              <motion.div className="absolute bottom-0 left-0 h-1 w-0 bg-[#e83e8c] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= SECTION  WHY ANUMAA? ================= */}
      <section className="relative py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase">WHY ANUMAA?</h2>
            <div className="w-20 h-1 bg-[#e83e8c] mb-8"></div>
            <ul className="space-y-6">
              {[
                "Built for the speed of startups and the rigor of production systems",
                "AI baked into our workflow  not bolted on as an afterthought",
                "Transparent communication: you always know what's happening and why",
                "No bloated retainer contracts  flexible support models that grow with you",
                "Deep focus on software support  this is all we do, and we do it well"
              ].map((item, index) => (
                <motion.li key={index} variants={fadeIn} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#e83e8c] flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Team collaborating" className="grayscale hover:grayscale-0 transition-all duration-700 relative z-10" />
              <motion.div animate={{ rotate: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 6 }} className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#e83e8c] z-0" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION  NUMBERS THAT MATTER ================= */}
      <section className="relative py-20 bg-gray-900 text-white px-8 md:px-16 lg:px-24 overflow-hidden">
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ repeat: Infinity, duration: 10 }} className="absolute top-0 right-0 w-96 h-96 bg-[#e83e8c] rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-12 text-center flex flex-col items-center">
            <h2 className="text-4xl font-extrabold tracking-tight uppercase">NUMBERS THAT MATTER</h2>
            <div className="w-20 h-1 bg-[#e83e8c] mt-4"></div>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "99.6%", text: "average uptime maintained across supported systems" },
              { value: "< 2 hrs", text: "median first response time for critical incidents" },
              { value: "100s", text: "of patches and dependency updates processed" },
              { value: "4+", text: "Serving clients across SaaS, fintech, healthtech, and logistics verticals" }
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeIn} className="p-6 border border-gray-700 hover:border-[#e83e8c] transition-colors bg-gray-800/50 backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-black text-[#e83e8c] mb-4">{stat.value}</div>
                <div className="text-sm text-gray-300 uppercase tracking-wide">{stat.text}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION  HOW IT WORKS ================= */}
      <section className="relative py-24 px-8 md:px-16 lg:px-24 bg-white">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-7xl mx-auto mb-16 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase">HOW IT WORKS</h2>
          <div className="w-20 h-1 bg-[#e83e8c] mt-6"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: "Step 1", title: "Onboard Your Stack", desc: "We start with a free technical health check of your existing software. We map your architecture, dependencies, deployment pipelines, and known pain points." },
            { step: "Step 2", title: "Set Up Intelligent Monitoring", desc: "Our team configures proactive monitoring tailored to your specific stack. You get a live dashboard and automated alerts before things go sideways." },
            { step: "Step 3", title: "Ongoing Maintenance & Support", desc: "From routine maintenance windows to on-demand incident response  we handle it. You get weekly reports, transparent logs, and a dedicated point of contact." },
            { step: "Step 4", title: "Continuous Improvement", desc: "Every month we deliver a system health summary with actionable recommendations. Your software doesn't just stay alive  it keeps getting better." }
          ].map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }} className="relative p-8 border border-gray-100 hover:shadow-lg transition-shadow bg-gray-50">
              <div className="text-[#e83e8c] font-black text-xl mb-2">{item.step}</div>
              <h3 className="text-xl font-bold mb-4 text-black uppercase"> {item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= SECTION  WHAT PEOPLE ARE SAYING ================= */}
      <section className="relative py-24 px-8 md:px-16 lg:px-24 bg-gray-50">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-7xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase">WHAT PEOPLE ARE SAYING</h2>
          <div className="w-20 h-1 bg-[#e83e8c] mt-6"></div>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { tag: "[Placeholder testimonial 1] ", quote: "Anumaa caught a memory leak we had been chasing for three weeks. Within 48 hours of onboarding, their system flagged it and their team had a fix ready.", author: "CTO, B2B SaaS startup" },
            { tag: "[Placeholder testimonial 2] ", quote: "What I appreciate most is the proactive updates. I never have to wonder what's happening with our platform.", author: "Founder, logistics platform" },
            { tag: "[Placeholder testimonial 3] ", quote: "They don't just fix things  they explain why it broke and what we should do differently. That context is incredibly valuable.", author: "Product Lead, healthtech startup" }
          ].map((testimonial, index) => (
            <motion.div key={index} variants={fadeIn} className="bg-white p-8 border-l-4 border-[#e83e8c] shadow-sm relative">
              <Quote className="text-gray-200 w-12 h-12 absolute top-4 right-4" />
              <p className="text-sm font-bold text-gray-400 mb-4">{testimonial.tag}</p>
              <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">"{testimonial.quote}"</p>
              <p className="font-bold text-black uppercase text-sm"> {testimonial.author}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= SECTION  BOTTOM CTA ================= */}
      <section className="relative py-32 px-8 md:px-16 lg:px-24 bg-black text-white text-center overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 40, ease: "linear" }} className="absolute -top-[50%] -left-[10%] w-[80%] h-[200%] border-[1px] border-white/10 rounded-[40%] z-0" />
        <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }} className="absolute -top-[50%] -right-[10%] w-[60%] h-[150%] border-[1px] border-[#e83e8c]/20 rounded-[30%] z-0" />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-4xl mx-auto relative z-10 space-y-8">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter">
            Ready to stop firefighting and start scaling?
          </h2>
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">
            Let's start with a free software health audit  no obligations, no pitch deck, just clarity on where your system stands.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="px-8 py-4 bg-[#e83e8c] text-white font-bold text-lg hover:bg-pink-600 transition-colors inline-block shadow-lg">
                [ Book a Free Health Check ]
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Link to="/contact" className="flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-black transition-colors inline-block">
                <span className="flex items-center gap-2">[ Talk to the Team ] <ArrowRight className="w-5 h-5" /></span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default HomeSections;