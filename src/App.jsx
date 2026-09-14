import React from 'react';
import { motion } from 'framer-motion';
import DarkVeil from './components/DarkVeil';
import PageLoader from './components/PageLoader';
import SectionReveal from './components/SectionReveal';

// Sections (Strict minimal architecture)
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Achievements from './sections/Achievements';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

const RESUME_URL = 'https://drive.google.com/file/d/1SMtZ6CCLEfNURsE9eHtVSVId9iodST1i/view?usp=sharing';

export default function App() {
  return (
    <div className="relative min-h-screen bg-charcoal-950 text-slate-100 overflow-x-hidden selection:bg-accent selection:text-charcoal-950">
      {/* Initial Mount Atmosphere Loader */}
      <PageLoader />

      {/* Persistent DarkVeil Background Layer (behind all sections, fixed position) */}
      <div className="darkveil-fixed-wrapper" aria-hidden="true">
        <DarkVeil
          hueShift={195}
          noiseIntensity={0.025}
          scanlineIntensity={0.08}
          speed={0.3}
          warpAmount={0.02}
        />
        <div className="darkveil-vignette" />
      </div>

      {/* Persistent Floating Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 bg-charcoal-950/80 backdrop-blur-xl border-b border-white/[0.07] transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center font-display font-black text-accent text-sm group-hover:scale-105 group-hover:border-accent transition-all shadow-[0_0_10px_rgba(0,240,255,0.15)]">
              VK
            </span>
            <span className="font-display font-bold text-sm tracking-wide text-white group-hover:text-accent transition-colors hidden sm:inline">
              Vipin Karthik M B
            </span>
          </a>

          {/* Section Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-400">
            {['About', 'Skills', 'Projects', 'Experience', 'Achievements', 'Resume', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative py-1 hover:text-accent transition-colors group"
              >
                <span>{item}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Quick Actions in Navbar */}
          <div className="flex items-center gap-2.5">
            <motion.a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-3 py-1.5 rounded-lg border border-white/10 hover:border-accent/40 text-slate-300 hover:text-accent text-xs font-mono font-medium transition-colors hidden sm:inline-flex items-center gap-1.5"
            >
              <span>Resume</span>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, boxShadow: '0 0 16px rgba(0,240,255,0.35)' }}
              whileTap={{ scale: 0.96 }}
              className="px-3.5 py-1.5 rounded-lg bg-accent text-charcoal-950 font-display font-bold text-xs hover:bg-accent-hover transition-colors"
            >
              Connect
            </motion.a>
          </div>
        </div>
      </header>

      {/* Main Sections Assembly with Scroll-Triggered Reveals */}
      <main className="relative z-10 pt-10">
        <Hero />
        
        <SectionReveal delay={0.05}>
          <About />
        </SectionReveal>

        <SectionReveal delay={0.05}>
          <Skills />
        </SectionReveal>

        <SectionReveal delay={0.05}>
          <Projects />
        </SectionReveal>

        <SectionReveal delay={0.05}>
          <Experience />
        </SectionReveal>

        <SectionReveal delay={0.05}>
          <Achievements />
        </SectionReveal>

        <SectionReveal delay={0.05}>
          <Resume />
        </SectionReveal>

        <SectionReveal delay={0.05}>
          <Contact />
        </SectionReveal>
      </main>

      {/* Global Minimal Footer */}
      <footer className="relative z-10 border-t border-white/[0.08] bg-charcoal-950/90 py-8 px-6 text-center text-xs text-slate-500 font-mono">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Vipin Karthik M B · All rights reserved.</p>
          <p className="flex items-center gap-4">
            <a href="mailto:vipinkarthik2005@gmail.com" className="hover:text-accent transition">vipinkarthik2005@gmail.com</a>
            <span>·</span>
            <a href="tel:+919360030500" className="hover:text-accent transition">+91 9360030500</a>
            <span>·</span>
            <a href="https://github.com/Vipinkarthik" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">GitHub</a>
            <span>·</span>
            <a href="https://www.linkedin.com/in/vipinkarthik1412/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">LinkedIn</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
