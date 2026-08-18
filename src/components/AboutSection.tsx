import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, KNOWN_LANGUAGES } from '../data/portfolioData';
import { User, Check } from 'lucide-react';
import { TechIcon } from './TechIcon';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] } }),
};

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="orb w-72 h-72 bg-violet-600 top-0 right-0 opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} custom={0}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-black/12 text-xs font-mono font-bold text-neutral-600 mb-4">
            <User className="size-3.5 text-neutral-500" />
            ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Python Full Stack Developer
          </h2>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed">
            Focused on practical web applications and modern backend systems.
          </p>
        </motion.div>

        {/* Bio + Focus */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-16">

          {/* Bio */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={1}
            className="lg:col-span-7 glass gradient-border rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-black mb-5">How I Work</h3>

              <div className="space-y-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
                <p>
                  I build practical full-stack applications using <strong className="text-black font-semibold">Python, Django, React, TypeScript, JavaScript, Node.js, Vite, Tailwind CSS,</strong> and <strong className="text-black font-semibold">Supabase</strong>.
                </p>
                <p>
                  My work covers frontend development, backend APIs, authentication, database integration, responsive UI development, and application deployment.
                </p>
                <p>
                  I've built projects across event management (<strong className="text-black">Hype House Events</strong>), e-commerce (<strong className="text-black">LitWear</strong>), machine learning (<strong className="text-black">SmartSoilAI</strong>), and computer vision (<strong className="text-black">AeroVision-AI</strong>).
                </p>
                <p className="text-sm italic text-neutral-500 border-l-2 border-black/15 pl-4">
                  I focus on building software that is understandable, maintainable, responsive, and useful.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-black/8 grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Full Stack Development', desc: 'Python + Django + React building complete applications end to end.' },
                { title: 'Backend Development', desc: 'REST APIs, authentication, database integration, and application services.' },
                { title: 'Modern Frontend', desc: 'React + TypeScript + Tailwind CSS responsive interfaces.' },
                { title: 'Applied AI', desc: 'Machine Learning + Computer Vision using Scikit-learn and TensorFlow.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-black/6 border border-black/8 shrink-0 mt-0.5">
                    <Check className="size-3.5 text-black" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-black uppercase tracking-wider font-mono">{item.title}</h4>
                    <p className="text-xs text-neutral-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Dev Focus Cards */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={2}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            <div className="glass gradient-border rounded-3xl p-6 flex-1">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-black font-mono uppercase tracking-wider">Development Focus</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Full Stack Development', sub: 'Python + Django + React', tag: 'Primary' },
                  { label: 'Backend Development', sub: 'REST APIs + Database Integration', tag: 'Backend' },
                  { label: 'Modern Frontend', sub: 'React + TypeScript + Tailwind CSS', tag: 'Frontend' },
                  { label: 'Applied AI', sub: 'Machine Learning + Computer Vision', tag: 'AI/ML' },
                ].map((m, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-black/3 border border-black/6 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-black">{m.label}</div>
                      <div className="text-xs text-neutral-500 mt-0.5">{m.sub}</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold border border-black/12 bg-black/5 text-neutral-600 shrink-0">{m.tag}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact info quick links */}
            <div className="glass gradient-border rounded-3xl p-6">
              <div className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider mb-3">Quick Contact</div>
              <div className="space-y-2">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 text-xs text-neutral-600 hover:text-black transition-colors font-mono">
                  <span className="text-neutral-400">@</span> {PERSONAL_INFO.email}
                </a>
                <div className="flex items-center gap-2 text-xs text-neutral-600 font-mono">
                  <span className="text-neutral-400">📍</span> {PERSONAL_INFO.location}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technology Cards */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} custom={3}
          className="pt-10 border-t border-black/8"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
                Known Languages & <span className="neon-text">Tech Stack</span>
              </h3>
              <p className="text-sm text-neutral-500 mt-1">Core technologies I use to build full-stack applications</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {KNOWN_LANGUAGES.map((lang, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="tech-card glass gradient-border rounded-2xl p-5 flex flex-col justify-between group cursor-default"
              >
                <div>
                  {/* Logo + category */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="size-12 rounded-xl bg-white border border-black/10 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                      <TechIcon slug={lang.iconSlug} color={lang.iconColor} size={26} />
                    </div>
                    <span className="text-[10px] font-mono font-semibold text-neutral-500 bg-black/4 px-2 py-0.5 rounded border border-black/8">
                      {lang.category}
                    </span>
                  </div>

                  <h4 className="text-base font-extrabold text-black group-hover:text-neutral-700 transition-colors font-sans tracking-tight mb-1">
                    {lang.title}
                  </h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">{lang.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
