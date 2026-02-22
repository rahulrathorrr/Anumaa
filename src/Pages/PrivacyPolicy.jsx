import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const PrivacyPolicy = () => {
  return (
    <div className="w-full bg-white overflow-hidden text-gray-900">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[40vh] flex flex-col items-center justify-center bg-gray-50 overflow-hidden px-8 md:px-16 py-16">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="absolute -top-32 -right-32 w-[400px] h-[400px] border-[40px] border-white rounded-full z-0 shadow-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-4xl mx-auto space-y-6 mt-8"
        >
          <div className="flex justify-center mb-4">
            <ShieldCheck className="w-12 h-12 text-[#e83e8c]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-black">
            PRIVACY POLICY
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
              Anumaa Infra Technologies Private Limited ('Anumaa', 'we', 'our', or 'us') operates the website anumaainfratechno.in and provides software support and maintenance services. This Privacy Policy explains how we collect, use, store, and protect information when you visit our website or engage with our services.
            </p>
            <p>
              By using our website or services, you agree to the collection and use of information in accordance with this policy.
            </p>

            <div className="space-y-6 pt-6">
              <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight border-b-2 border-[#e83e8c] pb-2 inline-block">1. Information We Collect</h2>
              
              <h3 className="text-xl font-bold text-gray-900 mt-4">1.1 Information You Provide Voluntarily</h3>
              <p>When you fill out a contact form, request a health audit, or communicate with us directly, we may collect: your full name, email address, phone number, company name, and any details you share in your message.</p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-4">1.2 Information Collected Automatically</h3>
              <p>When you visit our website, we automatically receive certain technical information, including: IP address, browser type and version, operating system, pages visited, time and date of your visit, and referring URLs. This data is collected through standard web server logs and, where applicable, cookies.</p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-4">1.3 Information from Service Engagements</h3>
              <p>If you engage Anumaa for software support and maintenance, we may handle technical data related to your software systems — including logs, configuration information, and diagnostic data — solely for the purpose of delivering the contracted services.</p>
            </div>

            <div className="space-y-6 pt-6">
              <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight border-b-2 border-[#e83e8c] pb-2 inline-block">2. How We Use Your Information</h2>
              <p>We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to your inquiries and provide requested information about our services</li>
                <li>To conduct software health audits and deliver maintenance services</li>
                <li>To send transactional communications related to your engagement with us</li>
                <li>To improve our website, services, and internal workflows</li>
                <li>To comply with applicable legal obligations</li>
              </ul>
              <p>We do not sell, trade, rent, or otherwise disclose your personal information to third parties for marketing purposes.</p>
            </div>

            <div className="space-y-6 pt-6">
              <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight border-b-2 border-[#e83e8c] pb-2 inline-block">3. Legal Basis for Processing (for users in applicable jurisdictions)</h2>
              <p>Where required by applicable data protection law, we process your personal information on the following legal grounds: your consent (e.g., when you submit a contact form); the performance of a contract with you; our legitimate business interests; and compliance with legal obligations.</p>
            </div>

            <div className="space-y-6 pt-6">
              <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight border-b-2 border-[#e83e8c] pb-2 inline-block">4. Data Retention</h2>
              <p>We retain personal information for as long as necessary to fulfil the purposes for which it was collected, including to satisfy legal, regulatory, accounting, or reporting requirements. Contact form submissions are generally retained for up to 24 months unless you request deletion earlier.</p>
            </div>

            <div className="space-y-6 pt-6">
              <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight border-b-2 border-[#e83e8c] pb-2 inline-block">5. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. While we take reasonable precautions, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>
            </div>

            <div className="space-y-6 pt-6">
              <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight border-b-2 border-[#e83e8c] pb-2 inline-block">6. Cookies</h2>
              <p>Our website may use cookies — small text files placed on your device — to enhance your browsing experience and collect usage analytics. You can configure your browser to refuse cookies or to alert you when cookies are being sent. Note that some features of our website may not function properly if cookies are disabled.</p>
            </div>

            <div className="space-y-6 pt-6">
              <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight border-b-2 border-[#e83e8c] pb-2 inline-block">7. Third-Party Services</h2>
              <p>We may use third-party tools for website analytics, communication, and infrastructure management. These providers are contractually obligated to handle data securely and only for purposes specified by us. We do not permit third-party service providers to use your data for their own marketing purposes.</p>
            </div>

            <div className="space-y-6 pt-6">
              <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight border-b-2 border-[#e83e8c] pb-2 inline-block">8. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the right to: access the personal data we hold about you; request correction of inaccurate data; request deletion of your personal data; withdraw consent at any time (where processing is based on consent); and lodge a complaint with a relevant supervisory authority.</p>
              <p>To exercise any of these rights, contact us at the address or email listed on our Contact page.</p>
            </div>

            <div className="space-y-6 pt-6">
              <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight border-b-2 border-[#e83e8c] pb-2 inline-block">9. Children's Privacy</h2>
              <p>Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If we become aware that we have inadvertently collected such information, we will take steps to delete it promptly.</p>
            </div>

            <div className="space-y-6 pt-6">
              <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight border-b-2 border-[#e83e8c] pb-2 inline-block">10. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.</p>
            </div>

            <div className="space-y-6 pt-6">
              <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight border-b-2 border-[#e83e8c] pb-2 inline-block">11. Contact Us</h2>
              <p>For privacy-related questions or requests:</p>
              <div className="bg-gray-50 p-6 border-l-4 border-[#e83e8c]">
                <p className="font-bold text-black mb-1">Anumaa Infra Technologies Private Limited</p>
                <p>Plot No. 41 & 42, Ravi Colony, Mahendra Hills, Nehrunagar, Hyderabad, Telangana — 500026, India</p>
                <p className="mt-2">Website: <a href="https://anumaainfratechno.in" className="text-[#e83e8c] hover:underline">anumaainfratechno.in</a></p>
              </div>
            </div>

          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default PrivacyPolicy;