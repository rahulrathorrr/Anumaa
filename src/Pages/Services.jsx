import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Activity, Bug, Zap, Shield, AlertTriangle, Code, 
  CheckCircle2, ArrowRight 
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

const Services = () => {
  const servicesData = [
    {
      // Removed prefix
      title: "Proactive Monitoring & Alerting",
      icon: <Activity className="w-8 h-8" />,
      desc: [
        "Most teams find out about problems from their users. We think that's backwards.",
        "Our monitoring setup creates a living picture of your software's health  tracking response times, error rates, memory patterns, API behavior, and infrastructure signals around the clock. Powered by AI-assisted anomaly detection, the system learns what 'normal' looks like for your application and flags deviations the moment they appear."
      ],
      bullets: [
        "Custom-configured monitoring tailored to your stack",
        "Real-time alerts routed to your preferred channels (Slack, email, PagerDuty, etc.)",
        "Weekly trend reports with system health scores",
        "AI-generated anomaly summaries with suggested next steps"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      // Removed prefix
      title: "Bug Triage & Resolution",
      icon: <Bug className="w-8 h-8" />,
      desc: [
        "Bugs have a way of multiplying when left unmanaged. Our triage pipeline gives every defect a home: it gets logged, classified by severity and impact, assigned to the right engineer, and tracked until closure.",
        "AI assists our engineers in rapidly parsing error logs, tracing stack traces, and identifying patterns across historical incidents  turning what used to be hours of detective work into minutes of focused resolution."
      ],
      bullets: [
        "Structured bug intake and classification system",
        "SLA-backed resolution timelines by severity tier",
        "Root cause documentation for every resolved defect",
        "AI-assisted log and trace analysis"
      ],
      image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=2069&auto=format&fit=crop"
    },
    {
      // Removed prefix
      title: "Performance Tuning",
      icon: <Zap className="w-8 h-8" />,
      desc: [
        "A slow application loses users. Our performance audit maps every layer of your stack  frontend load times, backend processing, database query efficiency, and third-party API dependencies  and identifies exactly where time and resources are being lost.",
        "We then implement targeted optimizations, test the impact, and hand you a documented record of what changed and why."
      ],
      bullets: [
        "Full-stack performance baseline assessment",
        "Database query optimization and indexing review",
        "Caching strategy design and implementation",
        "Before-and-after benchmarking reports"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    },
    {
      // Removed prefix and changed image
      title: "Patch & Dependency Management",
      icon: <Shield className="w-8 h-8" />,
      desc: [
        "Every library, framework, and tool your software uses comes with its own update cycle and vulnerability history. Keeping track of all of it manually is practically impossible  and skipping it is dangerous.",
        "We maintain an automated dependency inventory for your application, run regular security scans, and apply patches on a structured cadence that minimizes disruption while keeping your stack secure and current."
      ],
      bullets: [
        "Full dependency graph mapping and monitoring",
        "Automated CVE (vulnerability) scanning",
        "Scheduled patch windows with rollback capability",
        "Monthly dependency health summary"
      ],
      // New working image
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=2070&auto=format&fit=crop"
    },
    {
      // Removed prefix
      title: "Incident Response",
      icon: <AlertTriangle className="w-8 h-8" />,
      desc: [
        "When a critical incident hits, the first thirty minutes determine everything. Our incident response protocol activates immediately  bringing together the right people, tools, and context to stabilize your system as fast as possible.",
        "Post-incident, we deliver a detailed post-mortem: what happened, why it happened, and what changes prevent a recurrence. No more guessing. No more repeated mistakes."
      ],
      bullets: [
        "Defined escalation paths for P0/P1/P2 incidents",
        "Dedicated incident commander during active response",
        "Real-time Slack/communication bridge for stakeholder updates",
        "Structured post-mortem report with action items"
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
    },
    {
      // Removed prefix
      title: "AI-Augmented Code Review & Maintenance",
      icon: <Code className="w-8 h-8" />,
      desc: [
        "Code that works today might break tomorrow  not because anything changed in your codebase, but because the world around it changed. Deprecated APIs, shifting runtime behaviors, accumulating tech debt.",
        "Our AI-augmented code review service runs periodic analysis of your codebase, flagging risky patterns, dead code, missing test coverage, and areas of high complexity  giving your team a roadmap for sustainable maintenance."
      ],
      bullets: [
        "Periodic AI-assisted codebase analysis",
        "Technical debt heat maps and prioritization",
        "Refactoring recommendations with effort estimates",
        "Test coverage gap analysis"
      ],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="w-full bg-white overflow-hidden text-gray-900">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[50vh] flex flex-col items-center justify-center bg-gray-50 overflow-hidden px-8 md:px-16 py-16">
        <motion.div 
          animate={{ rotate: 180, scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute -top-20 -left-20 w-[400px] h-[400px] border-[40px] border-white rounded-full z-0 shadow-sm"
        />
        <motion.div 
          animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-32 h-32 border-[8px] border-[#e83e8c] rounded-full opacity-10 z-0"
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
            SERVICES
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight leading-tight">
            Everything Your Software Needs to Stay Healthy, Fast, and Secure.
          </p>
          <p className="text-lg text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
            At Anumaa, our services aren't packaged as generic bundles. They're built around the actual lifecycle of production software  from the first deployment through years of growth and evolution.
          </p>
        </motion.div>
      </section>

      {/* ================= SERVICES LIST ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16 flex flex-col gap-32">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>
                
                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true, margin: "-100px" }} 
                  transition={{ duration: 0.8 }}
                  className="flex-1 space-y-6"
                >
                  <div className="flex items-center gap-4 text-[#e83e8c] mb-2">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-black">
                    {service.title}
                  </h2>
                  <div className="w-16 h-1 bg-[#e83e8c]"></div>
                  
                  <div className="space-y-4 text-lg text-gray-600 leading-relaxed font-medium">
                    {service.desc.map((p, i) => <p key={i}>{p}</p>)}
                  </div>

                  <div className="pt-4">
                    <p className="font-bold text-black text-lg mb-4 uppercase">What you get:</p>
                    <ul className="space-y-3">
                      {service.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-[#e83e8c] flex-shrink-0" />
                          <span className="text-gray-700">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Image with Moving Animation */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  whileInView={{ opacity: 1, scale: 1 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.8 }}
                  className="flex-1 relative w-full h-[450px]"
                >
                  <motion.img 
                    animate={{ y: [-15, 15, -15] }}
                    transition={{ repeat: Infinity, duration: 6 + index, ease: "easeInOut" }}
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl relative z-10"
                  />
                  {/* Decorative moving square behind image */}
                  <motion.div 
                    animate={{ rotate: [0, 90, 0] }}
                    transition={{ repeat: Infinity, duration: 15 + index, ease: "linear" }}
                    className={`absolute -bottom-6 ${isEven ? '-left-6' : '-right-6'} w-40 h-40 border-[8px] border-[#e83e8c] z-0`}
                  />
                </motion.div>

              </div>
            );
          })}
        </div>
      </section>

      {/* ================= SUPPORT PLANS ================= */}
      <section className="relative py-24 bg-gray-50 px-8 md:px-16 overflow-hidden">
        {/* Background blob */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ repeat: Infinity, duration: 10 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#e83e8c] rounded-full blur-[120px] pointer-events-none"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase">Support Plans</h2>
            <div className="w-20 h-1 bg-[#e83e8c] mx-auto mt-6 mb-6"></div>
            <p className="text-xl text-gray-600 font-medium">
              We offer three engagement tiers  all flexible, no lock-ins:
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Plan 1 */}
            <motion.div variants={fadeIn} whileHover={{ y: -10 }} className="bg-white p-10 border border-gray-200 shadow-sm hover:border-[#e83e8c] hover:shadow-xl transition-all duration-300 relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 group-hover:bg-[#e83e8c] transition-colors"></div>
              <h3 className="text-2xl font-black uppercase text-black mb-2">Starter</h3>
              <p className="text-[#e83e8c] font-bold mb-6 h-12"> For small teams and early-stage products</p>
              <p className="text-gray-600 leading-relaxed">
                Core monitoring setup, monthly health reports, business-hours support, and up to 10 hours of bug resolution per month.
              </p>
            </motion.div>

            {/* Plan 2 */}
            <motion.div variants={fadeIn} whileHover={{ y: -10 }} className="bg-black text-white p-10 shadow-2xl relative transform lg:-translate-y-4 border border-[#e83e8c]">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#e83e8c]"></div>
              <div className="absolute -top-4 right-4 bg-[#e83e8c] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">Most Popular</div>
              <h3 className="text-2xl font-black uppercase text-white mb-2">Growth</h3>
              <p className="text-[#e83e8c] font-bold mb-6 h-12"> For scaling products with production traffic</p>
              <p className="text-gray-300 leading-relaxed">
                Everything in Starter, plus extended support hours, proactive patching, performance audits, and 30 hours of maintenance per month.
              </p>
            </motion.div>

            {/* Plan 3 */}
            <motion.div variants={fadeIn} whileHover={{ y: -10 }} className="bg-white p-10 border border-gray-200 shadow-sm hover:border-[#e83e8c] hover:shadow-xl transition-all duration-300 relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 group-hover:bg-[#e83e8c] transition-colors"></div>
              <h3 className="text-2xl font-black uppercase text-black mb-2">Scale</h3>
              <p className="text-[#e83e8c] font-bold mb-6 h-12"> For mission-critical applications</p>
              <p className="text-gray-600 leading-relaxed">
                Everything in Growth, plus 24/7 incident response, AI-augmented code reviews, dedicated point of contact, and custom SLA agreements.
              </p>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="mt-16 flex flex-wrap justify-center gap-6"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="px-8 py-4 bg-[#e83e8c] text-white font-bold text-lg hover:bg-pink-600 transition-colors inline-block shadow-lg">
                [ Compare Plans ]
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Link to="/contact" className="flex items-center gap-2 px-8 py-4 border-2 border-black text-black font-bold text-lg hover:bg-black hover:text-white transition-colors inline-block">
                <span className="flex items-center gap-2">[ Talk to Us About Custom Needs ] <ArrowRight className="w-5 h-5" /></span>
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default Services;