import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Settings, Activity, AlertCircle, 
  TrendingUp, Cpu, CheckCircle2 
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

const HowItWorks = () => {
  const phases = [
    {
      title: "Phase 1 — Free Software Health Audit (Day 1–2)",
      icon: <Search className="w-8 h-8" />,
      content: (
        <>
          <p className="mb-4">
            Every engagement starts with a no-cost health audit of your current software setup. This isn't a sales exercise — it's a real technical assessment.
          </p>
          <p className="mb-6">
            We look at your application architecture, deployment pipeline, error logs, dependency versions, and any historical incident data you're willing to share. What comes out the other side is a prioritized list of risks, gaps, and quick wins — yours to keep, regardless of whether you move forward with us.
          </p>
          <p className="font-bold text-black uppercase mb-3 text-sm tracking-wider">What we assess:</p>
          <ul className="space-y-3">
            {[
              "Infrastructure topology and single points of failure",
              "Error rate baselines and existing alerting gaps",
              "Outdated or vulnerable dependencies",
              "Missing observability coverage",
              "Historical incident patterns and recurring failure modes"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#e83e8c] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </>
      ),
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Phase 2 — Monitoring Setup & Baseline Calibration (Day 3–7)",
      icon: <Settings className="w-8 h-8" />,
      content: (
        <>
          <p className="mb-4">
            Once you're onboarded, our team configures your monitoring environment. This isn't a generic setup — every alert threshold, every metric tracked, every escalation path is tuned to your application's specific behavior.
          </p>
          <p>
            Our AI models need about 3–5 days of live data to calibrate a behavioral baseline. After that, anomaly detection sharpens quickly — your system teaches ours what normal looks like, and we learn fast.
          </p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
    },
    {
      title: "Phase 3 — Ongoing Maintenance Rhythm (Week 2 Onwards)",
      icon: <Activity className="w-8 h-8" />,
      content: (
        <>
          <p className="mb-4">
            With monitoring live and baselines set, the real work begins. Your software enters a continuous maintenance rhythm:
          </p>
          <ul className="space-y-4 mb-6">
            {[
              { label: "Daily:", text: "Automated checks, AI-assisted log review, anomaly alerts" },
              { label: "Weekly:", text: "Engineer review of open issues, performance snapshot, dependency scan" },
              { label: "Monthly:", text: "Full system health report, patch window execution, strategic recommendations" }
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-gray-50 p-4 border-l-4 border-[#e83e8c]">
                <span className="font-bold text-black">{item.label}</span>
                <span className="text-gray-700">{item.text}</span>
              </li>
            ))}
          </ul>
          <p>
            You get a live dashboard so you can see exactly what we're seeing, whenever you want.
          </p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Phase 4 — Incident Response (As Needed)",
      icon: <AlertCircle className="w-8 h-8" />,
      content: (
        <>
          <p className="mb-4">
            When incidents occur — and with complex software, some always do — our response protocol activates within minutes. You get a dedicated incident commander, real-time status updates, and a fix-first mentality.
          </p>
          <p>
            After resolution, the post-mortem report closes the loop: root cause, timeline, resolution steps, and preventive changes. We treat every incident as a learning opportunity for both teams.
          </p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Phase 5 — Continuous Improvement (Ongoing)",
      icon: <TrendingUp className="w-8 h-8" />,
      content: (
        <>
          <p className="mb-4">
            The best maintenance programs don't just preserve software — they improve it over time. Each month, we bring you a set of forward-looking recommendations based on performance trends, emerging vulnerabilities, and product direction.
          </p>
          <p className="bg-pink-50 p-4 font-medium text-black border border-pink-100">
            Think of it as a standing technical advisory built into your support contract — at no extra charge.
          </p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    }
  ];

  return (
    <div className="w-full bg-white overflow-hidden text-gray-900">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[50vh] flex flex-col items-center justify-center bg-gray-50 overflow-hidden px-8 md:px-16 py-16">
        <motion.div 
          animate={{ rotate: -180, scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="absolute -bottom-20 -right-20 w-[450px] h-[450px] border-[50px] border-white rounded-full z-0 shadow-sm"
        />
        <motion.div 
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-20 h-20 bg-[#e83e8c] rounded-full opacity-10 z-0"
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
            HOW IT WORKS
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-[#e83e8c] tracking-tight leading-tight">
            From Day One to Day One Thousand — Here's How We Work With You
          </p>
          <p className="text-lg text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
            Getting started with Anumaa is intentionally frictionless. We've designed the onboarding process to deliver real value in the first 48 hours — before any contract is signed.
          </p>
        </motion.div>
      </section>

      {/* ================= PHASES TIMELINE ================= */}
      <section className="relative py-24 bg-white">
        {/* Animated vertical center line for timeline (visible on md+) */}
        <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-1 bg-gray-100 z-0 hidden md:block">
          <motion.div 
            initial={{ height: 0 }} whileInView={{ height: "100%" }} viewport={{ once: true }} transition={{ duration: 2, ease: "easeInOut" }}
            className="w-full bg-[#e83e8c]"
          />
        </div>

        <div className="max-w-7xl mx-auto px-8 md:px-16 flex flex-col gap-24 relative z-10">
          {phases.map((phase, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 relative`}>
                
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 bg-white border-4 border-[#e83e8c] rounded-full z-20 flex items-center justify-center hidden md:flex">
                  <div className="w-3 h-3 bg-[#e83e8c] rounded-full"></div>
                </div>

                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
                  className={`flex-1 w-full ${isEven ? 'md:text-right' : 'md:text-left'}`}
                >
                  <div className={`flex items-center gap-4 text-[#e83e8c] mb-4 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                    {phase.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase text-black mb-6">
                    {phase.title}
                  </h2>
                  <div className={`text-lg text-gray-600 leading-relaxed font-medium ${isEven ? 'md:ml-auto md:text-right text-left' : 'text-left'}`}>
                    {phase.content}
                  </div>
                </motion.div>

                {/* Image with Moving Animation */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                  className="flex-1 w-full relative h-[350px] lg:h-[400px]"
                >
                  <motion.img 
                    animate={{ y: [-15, 15, -15] }} transition={{ repeat: Infinity, duration: 6 + index, ease: "easeInOut" }}
                    src={phase.image} alt={phase.title} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-xl relative z-10"
                  />
                  {/* Decorative moving square */}
                  <motion.div 
                    animate={{ rotate: [0, 90, 0] }} transition={{ repeat: Infinity, duration: 15 + index, ease: "linear" }}
                    className={`absolute -bottom-6 ${isEven ? '-right-6' : '-left-6'} w-32 h-32 bg-pink-50 z-0`}
                  />
                </motion.div>

              </div>
            );
          })}
        </div>
      </section>

      {/* ================= THE TECHNOLOGY BEHIND IT ================= */}
      <section className="relative py-32 bg-black text-white px-8 md:px-16 overflow-hidden">
        {/* Abstract animated background */}
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ repeat: Infinity, duration: 12 }}
          className="absolute -top-[20%] -left-[10%] w-[700px] h-[700px] bg-[#e83e8c] rounded-full blur-[150px] pointer-events-none"
        />

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex-1 space-y-6">
            <div className="flex items-center gap-4 text-[#e83e8c] mb-2">
              <Cpu className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase">
              The Technology Behind It
            </h2>
            <div className="w-20 h-1 bg-[#e83e8c] mb-6"></div>
            <p className="text-xl text-gray-300 font-medium leading-relaxed">
              Our internal tooling is built around a few core principles: automate the predictable, amplify the engineer, and never let a machine make a high-stakes decision without human review.
            </p>
            <p className="text-lg text-gray-400 italic mt-8 border-l-4 border-[#e83e8c] pl-4">
              This isn't off-the-shelf monitoring with a new coat of paint. It's a purpose-built maintenance intelligence layer designed for the realities of modern software.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex-1 w-full space-y-4"
          >
            {[
              "AI-powered log ingestion and anomaly scoring",
              "Natural language incident summarization for faster handoffs",
              "Automated dependency vulnerability matching against public CVE databases",
              "Predictive failure modeling based on system telemetry trends",
              "Integrated post-mortem workflow with action item tracking"
            ].map((tech, index) => (
              <motion.div 
                key={index} variants={fadeIn} whileHover={{ x: 10 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-[#e83e8c] p-6 transition-colors duration-300 flex items-start gap-4"
              >
                <div className="w-2 h-2 bg-[#e83e8c] rounded-full mt-2 flex-shrink-0 shadow-[0_0_10px_#e83e8c]"></div>
                <span className="text-lg text-gray-200">{tech}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default HowItWorks;