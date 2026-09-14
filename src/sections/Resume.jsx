import React from 'react';
import SpotlightCard from '../components/SpotlightCard';
import DecryptedText from '../components/DecryptedText';

// Official Google Drive resume link
const RESUME_URL = 'https://drive.google.com/file/d/1SMtZ6CCLEfNURsE9eHtVSVId9iodST1i/view?usp=sharing';

export default function Resume() {
  return (
    <section id="resume" className="relative w-full py-24 px-4 sm:px-6 max-w-4xl mx-auto z-10">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-xs uppercase tracking-widest text-accent font-mono font-semibold">
            <DecryptedText text="Curriculum Vitae" speed={30} />
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Executive Resume Summary
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          Condensed overview of qualifications, intellectual property, academic standing, and core competencies.
        </p>
      </div>

      {/* Rendered Summary Document Card with Spotlight Effect */}
      <SpotlightCard
        className="rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl bg-charcoal-900/90 backdrop-blur-xl"
        spotlightColor="rgba(0, 240, 255, 0.18)"
      >
        {/* Header inside Resume */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-white/[0.08] gap-4">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">Vipin Karthik M B</h3>
            <p className="text-xs font-mono text-accent mt-1">AI Engineer · Full-Stack Software Developer</p>
          </div>
          <div className="text-left sm:text-right text-xs text-slate-400 space-y-1 font-mono">
            <p>Phone: +91 9360030500</p>
            <p>Email: vipinkarthik2005@gmail.com</p>
            <p>Location: Coimbatore, India (Open to Remote)</p>
          </div>
        </div>

        {/* Section Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-b border-white/[0.08]">
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
              Academic Foundation
            </h4>
            <div className="space-y-1">
              <p className="text-sm font-bold text-white">Sri Eshwar College of Engineering</p>
              <p className="text-xs text-slate-300">B.E. Electronics & Communication Engineering</p>
              <p className="text-xs font-mono text-accent">CGPA: 8.2 / 10 · 2023 – 2027</p>
            </div>
            <div className="pt-2 text-xs text-slate-400 space-y-0.5">
              <p>Bharatiya Vidya Mandir Higher Secondary School (HSC): 82.7%</p>
              <p>Bharatiya Vidya Mandir Higher Secondary School (SSLC): 100%</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
              Professional Internship
            </h4>
            <div className="space-y-1">
              <p className="text-sm font-bold text-white">MERN Stack Developer (Intern)</p>
              <p className="text-xs text-slate-300">Better Tomorrow · January 2025</p>
              <p className="text-xs text-slate-400 leading-relaxed pt-1">
                Backend-focused full-stack engineering: server business logic, REST API integration, MongoDB schema modeling, and robust error handling.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
              Intellectual Property & Publications
            </h4>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4 leading-relaxed">
              <li>4 Published Patents: Frovitrax, SmartCrateX, eMeterSeva, Nexora</li>
              <li>2 Conference Papers: IEMPOWER 2025 & ICUIS 2026</li>
              <li>Smart India Hackathon (SIH 2025) National Grand Finalist</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
              Core Technical Summary
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Python, Java, JavaScript, React.js, Node.js, Express, MongoDB, PostgreSQL, TensorFlow, OpenCV, CNNs, LangChain, MCP.
            </p>
            <p className="text-[11px] font-mono text-accent pt-1">
              LeetCode 500+ Solved (1632 Rating) · CodeChef Gold Badge · HackerRank 3★ Java
            </p>
          </div>
        </div>

        {/* View / Download Action Button pointing to Google Drive */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-400">
            Official PDF verified document format ready for recruitment review.
          </span>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-charcoal-950 font-display font-bold text-xs uppercase tracking-wider hover:bg-accent-hover shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all hover:scale-[1.02] active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span>Open Official Resume (Google Drive)</span>
          </a>
        </div>
      </SpotlightCard>
    </section>
  );
}
