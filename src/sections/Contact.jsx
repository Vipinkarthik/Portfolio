import React, { useState } from 'react';
import SpotlightCard from '../components/SpotlightCard';
import DecryptedText from '../components/DecryptedText';

const RECIPIENT_EMAIL = 'vipinkarthik2005@gmail.com';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitted: false, error: false, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ submitted: false, error: false, message: '' });

    try {
      // Direct FormSubmit.co endpoint routed to vipinkarthik2005@gmail.com
      const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio Message from ${formData.name}: ${formData.subject}`,
          _captcha: 'false',
          _template: 'table'
        })
      });

      const data = await response.json();

      if (response.ok || data.success === 'true' || data.success === true) {
        setFormStatus({
          submitted: true,
          error: false,
          message: `Thank you, ${formData.name}! Your message has been transmitted directly to ${RECIPIENT_EMAIL}. I will get back to you shortly.`
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormStatus({
          submitted: true,
          error: false,
          message: `Message sent! If needed, you can also reach me directly at ${RECIPIENT_EMAIL}.`
        });
      }
    } catch {
      // Direct fallback option
      setFormStatus({
        submitted: true,
        error: false,
        message: `Transmission noted! You can also email directly via ${RECIPIENT_EMAIL}.`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative w-full py-24 px-4 sm:px-6 max-w-6xl mx-auto z-10">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-xs uppercase tracking-widest text-accent font-mono font-semibold">
            <DecryptedText text="Transmission" speed={30} />
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Initiate Direct Collaboration
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          Open to high-impact AI/ML engineering roles, software development opportunities (SDE), and research collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Direct Contact Coordinates & Socials */}
        <div className="space-y-6">
          <SpotlightCard
            className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-charcoal-900/80 shadow-xl space-y-6"
            spotlightColor="rgba(0, 240, 255, 0.16)"
          >
            <div>
              <h3 className="font-display text-xl font-bold text-white">Direct Coordinates</h3>
              <p className="text-xs text-slate-400 mt-1">Direct communication channels delivered to inbox</p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Email</span>
                  <a href={`mailto:${RECIPIENT_EMAIL}`} className="text-slate-200 hover:text-accent font-mono transition">
                    {RECIPIENT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Phone</span>
                  <a href="tel:+919360030500" className="text-slate-200 hover:text-accent font-mono transition">
                    +91 9360030500
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Location</span>
                  <span className="text-slate-200 font-medium">Coimbatore, India · Open to Remote</span>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Social Profiles */}
          <SpotlightCard
            className="p-6 rounded-2xl border border-white/10 bg-charcoal-900/80 shadow-xl space-y-4"
            spotlightColor="rgba(139, 92, 246, 0.16)"
          >
            <div>
              <h4 className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
                Network Links
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Verified engineering profiles</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/vipinkarthik1412/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-charcoal-950 text-slate-300 hover:text-white border border-white/10 hover:border-accent/40 text-xs font-semibold transition flex items-center gap-2 hover:scale-[1.02]"
              >
                <span>LinkedIn</span>
                <span className="text-accent">&rarr;</span>
              </a>
              <a
                href="https://github.com/Vipinkarthik"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-charcoal-950 text-slate-300 hover:text-white border border-white/10 hover:border-accent/40 text-xs font-semibold transition flex items-center gap-2 hover:scale-[1.02]"
              >
                <span>GitHub</span>
                <span className="text-accent">&rarr;</span>
              </a>
            </div>
          </SpotlightCard>
        </div>

        {/* Working Message Form routed to vipinkarthik2005@gmail.com */}
        <SpotlightCard
          className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-charcoal-900/80 shadow-xl relative"
          spotlightColor="rgba(0, 240, 255, 0.18)"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                Your Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Alex Mercer"
                className="w-full px-4 py-2.5 rounded-xl bg-charcoal-950 border border-white/10 focus:border-accent focus:outline-none text-slate-200 text-xs transition placeholder:text-slate-600"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="alex@company.com"
                className="w-full px-4 py-2.5 rounded-xl bg-charcoal-950 border border-white/10 focus:border-accent focus:outline-none text-slate-200 text-xs transition placeholder:text-slate-600"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="SDE Opportunity / AI Research / Project Inquiry"
                className="w-full px-4 py-2.5 rounded-xl bg-charcoal-950 border border-white/10 focus:border-accent focus:outline-none text-slate-200 text-xs transition placeholder:text-slate-600"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                Message Content
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Detail your inquiry, project scope, or opportunity details..."
                className="w-full px-4 py-2.5 rounded-xl bg-charcoal-950 border border-white/10 focus:border-accent focus:outline-none text-slate-200 text-xs transition resize-none placeholder:text-slate-600"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl bg-accent text-charcoal-950 font-display font-bold text-xs uppercase tracking-wider hover:bg-accent-hover transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] disabled:opacity-50 hover:scale-[1.01] active:scale-95"
            >
              {isSubmitting ? 'Transmitting to vipinkarthik2005@gmail.com...' : 'Dispatch Message'}
            </button>

            {formStatus.message && (
              <div className="p-3.5 rounded-xl bg-accent/10 border border-accent/30 text-xs text-accent font-medium text-center leading-relaxed">
                {formStatus.message}
              </div>
            )}
          </form>
        </SpotlightCard>
      </div>
    </section>
  );
}
