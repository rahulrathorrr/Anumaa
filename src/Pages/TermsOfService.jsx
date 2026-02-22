import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const TermsOfService = () => {
  return (
    <div className="w-full bg-white overflow-hidden text-gray-900">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[40vh] flex flex-col items-center justify-center bg-gray-50 overflow-hidden px-8 md:px-16 py-16">
        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="absolute -top-32 -left-32 w-[400px] h-[400px] border-[40px] border-white rounded-full z-0 shadow-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-4xl mx-auto space-y-6 mt-8"
        >
          <div className="flex justify-center mb-4">
            <FileText className="w-12 h-12 text-[#e83e8c]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-black">
            TERMS OF SERVICE
          </h1>
          <p className="text-lg font-bold text-[#e83e8c] tracking-wider uppercase">
            Effective Date: [Insert Date] | Last Updated: [Insert Date]
          </p>
        </motion.div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="py-20 px-8 md:px-16 lg:px-24">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="max-w-4xl mx-auto prose prose-lg prose-gray"
        >
          <div className="space-y-8 text-gray-700 leading-relaxed font-medium">
            <p>
              These Terms of Service ('Terms') govern your access to and use of the website anumaainfratechno.in and the software support and maintenance services offered by Anumaa Infra Technologies Private Limited ('Anumaa', 'we', 'our', or 'us'). By accessing our website or using our services, you agree to be bound by these Terms. If you do not agree, please discontinue use immediately.
            </p>

            <div className="space-y-6 pt-6">
              <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight border-b-2 border-[#e83e8c] pb-2 inline-block">1. Services</h2>
              <p>Anumaa provides software support and maintenance services, which may include proactive monitoring, bug triage and resolution, performance optimization, patch and dependency management, incident response, and AI-augmented code analysis, as described on our website and in any service agreement entered into between the parties.</p>
              <p>The specific scope, duration, pricing, and service level expectations applicable to your engagement will be defined in a separate service agreement or statement of work signed by both parties.</p>
            </div>

            <div className="space-y-6 pt-6">
              <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight border-b-2 border-[#e83e8c] pb-2 inline-block">2. Website Use</h2>
              <p>You may access and use this website for lawful purposes only. You agree not to use this website to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate any applicable local, national, or international law or regulation</li>
                <li>Transmit any harmful, offensive, defamatory, or otherwise objectionable content</li>
                <li>Attempt to gain unauthorized access to any systems, networks, or data</li>
                <li>Introduce viruses, malware, or other malicious code</li>
                <li>Scrape, crawl, or harvest content without prior written permission</li>
              </ul>
            </div>

            <div className="space-y-6 pt-6">
              <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight border-b-2 border-[#e83e8c] pb-2 inline-block">3. Intellectual Property</h2>
              <p>All content on this website  including text, graphics, logos, images, and software  is the property of Anumaa Infra Technologies Private Limited and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on this site without our express written consent.</p>
              <p>Any tools, methodologies, workflows, or proprietary systems developed by Anumaa in the course of providing services remain the intellectual property of Anumaa unless expressly assigned in writing.</p>
            </div>

            <div className="space-y-6 pt-6">
              <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight border-b-2 border-[#e83e8c] pb-2 inline-block">4. Client Data</h2>
              <p>In the course of providing services, Anumaa may access client systems, codebases, logs, and technical data. We treat all such data as confidential and use it solely for the purpose of delivering the agreed services. Data handling practices are further governed by our Privacy Policy and, where applicable, a separate data processing agreement.</p>
            </div>

            <div className="space-y-6 pt-6">
              <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight border-b-2 border-[#e83e8c] pb-2 inline-block">5. Disclaimers</h2>
              <p>Our website and services are provided 'as is' and 'as available.' While we make every effort to deliver accurate, reliable, and high-quality services, Anumaa makes no warranties  express or implied  regarding the uninterrupted availability of our website, the elimination of all software defects, or the fitness of our services for any particular purpose.</p>
              <p>Software systems are inherently complex. Our services are designed to reduce risk and improve stability, but we do not guarantee zero downtime or zero incidents.</p>
            </div>

            <div className="space-y-6 pt-6">
              <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight border-b-2 border-[#e83e8c] pb-2 inline-block">6. Limitation of Liability</h2>
              <p>To the fullest extent permitted by applicable law, Anumaa Infra Technologies Private Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our website or services  including but not limited to loss of data, loss of revenue, or business interruption  even if we have been advised of the possibility of such damages.</p>
              <p>Our total cumulative liability for any claim arising out of these Terms or the services provided shall not exceed the amount paid by you for the services in the three months preceding the event giving rise to the claim.</p>
            </div>

            <div className="space-y-6 pt-6">
              <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight border-b-2 border-[#e83e8c] pb-2 inline-block">7. Indemnification</h2>
              <p>You agree to indemnify, defend, and hold harmless Anumaa Infra Technologies Private Limited, its founders, team members, and representatives from and against any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising out of your use of our website or services, your violation of these Terms, or your violation of any third-party rights.</p>
            </div>

            <div className="space-y-6 pt-6">
              <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight border-b-2 border-[#e83e8c] pb-2 inline-block">8. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites for reference or informational purposes. We do not control the content or practices of those websites and are not responsible for any damages or losses that may arise from your use of them.</p>
            </div>

            <div className="space-y-6 pt-6">
              <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight border-b-2 border-[#e83e8c] pb-2 inline-block">9. Modifications to Terms</h2>
              <p>We reserve the right to update or modify these Terms at any time. Changes will be posted on this page with an updated effective date. Your continued use of our website or services following any changes constitutes your acceptance of the revised Terms.</p>
            </div>

            <div className="space-y-6 pt-6">
              <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight border-b-2 border-[#e83e8c] pb-2 inline-block">10. Governing Law & Jurisdiction</h2>
              <p>These Terms shall be governed by and interpreted in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Hyderabad, Telangana.</p>
            </div>

            <div className="space-y-6 pt-6">
              <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight border-b-2 border-[#e83e8c] pb-2 inline-block">11. Termination</h2>
              <p>Either party may terminate an engagement in accordance with the provisions of the applicable service agreement. Anumaa reserves the right to restrict or terminate access to this website at any time for any reason, without notice.</p>
            </div>

            <div className="space-y-6 pt-6">
              <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight border-b-2 border-[#e83e8c] pb-2 inline-block">12. Contact</h2>
              <p>For questions regarding these Terms:</p>
              <div className="bg-gray-50 p-6 border-l-4 border-[#e83e8c]">
                <p className="font-bold text-black mb-1">Anumaa Infra Technologies Private Limited</p>
                <p>Plot No. 41 & 42, Ravi Colony, Mahendra Hills, Nehrunagar, Hyderabad, Telangana  500026, India</p>
                <p className="mt-2">Website: <a href="https://anumaainfratechno.in" className="text-[#e83e8c] hover:underline">anumaainfratechno.in</a></p>
              </div>
            </div>

          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default TermsOfService;