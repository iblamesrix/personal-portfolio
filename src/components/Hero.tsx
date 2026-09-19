import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, KNOWN_LANGUAGES } from '../data/portfolioData';
import { ArrowRight, FileText, Github, Mail, MapPin } from 'lucide-react';
import { TechIcon } from './TechIcon';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="home" className="relative pt-20 sm:pt-24 pb-16 overflow-hidden">

      {/* Background orbs */}
      <div className="orb w-96 h-96 bg-violet-600 top-0 left-1/4 animate-float" />
      <div className="orb w-80 h-80 bg-cyan-500 bottom-0 right-1/4 animate-float-slow" />
      <div className="orb w-64 h-64 bg-blue-600 top-1/2 left-0 animate-float" style={{ animationDelay: '2s' }} />

      {/* Plain white background — keep the portfolio visually consistent on mobile and desktop. */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-black/10 text-xs font-mono font-bold mb-6"
            >
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-black/80 tracking-wider">PYTHON FULL STACK DEVELOPER</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6 max-w-2xl">
              <span className="text-black">Building Modern Web</span>
              <br />
              <span className="neon-text">Applications with Python</span>
            </h1>

            {/* Sub */}
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8 max-w-xl">
              I'm <strong className="text-black font-semibold">{PERSONAL_INFO.name}</strong>, a Python Full Stack Developer focused on building responsive web applications, REST APIs, backend systems, and practical AI-powered solutions. I work across frontend and backend development using{' '}
              <strong className="text-black font-medium">Python, Django, React, TypeScript, JavaScript, Node.js, Vite, Tailwind CSS,</strong> and <strong className="text-black font-medium">Supabase</strong>.
            </p>

            {/* Tech badges row */}
            <div className="flex flex-wrap items-center gap-1.5 mb-8">
              {KNOWN_LANGUAGES.slice(0, 6).map((lang, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.35 + i * 0.06, type: 'spring', stiffness: 300 }}
                  title={lang.title}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg glass border border-black/10 text-xs font-medium text-neutral-700 cursor-default hover:border-black/25 transition-colors"
                >
                  <TechIcon slug={lang.iconSlug} color={lang.iconColor} size={14} />
                  <span>{lang.name}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-gradient w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-bold text-sm"
              >
                <span>View Projects</span>
                <ArrowRight className="size-4" />
              </motion.a>
              <motion.button
                onClick={onOpenResume}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass border border-black/15 text-black font-bold text-sm hover:border-black/30 transition-colors"
              >
                <FileText className="size-4 text-neutral-600" />
                <span>Download CV</span>
              </motion.button>
              <motion.a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl glass border border-black/15 text-neutral-700 hover:text-black hover:border-black/30 transition-colors self-center sm:self-auto text-sm font-semibold"
              >
                <Github className="size-4" />
                <span className="sm:hidden lg:inline">GitHub</span>
              </motion.a>
            </div>

            {/* Contact bar */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 pt-4 border-t border-black/8 text-xs font-medium text-neutral-500 w-full">
              <div className="flex items-center gap-1.5">
                <MapPin className="size-3.5 text-neutral-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="size-3.5 text-neutral-400 shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-black transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm">
              {/* Subtle glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-black/5 via-black/3 to-black/5 blur-2xl" />

              <div className="relative glass gradient-border rounded-3xl p-6 shadow-lg">
                {/* Profile */}
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative group mb-4">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-black/20 to-black/10 opacity-50 blur-md group-hover:opacity-70 transition duration-500" />
                    <div className="relative size-36 sm:size-44 rounded-2xl overflow-hidden border-2 border-black/10">
                      <img
                        src={PERSONAL_INFO.profileImage}
                        alt={`${PERSONAL_INFO.name} — Python Full Stack Developer`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                        style={{ filter: 'none' }}
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass border border-black/10 text-black px-3 py-1 rounded-full text-[11px] font-mono font-bold flex items-center gap-1.5 whitespace-nowrap">
                      <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                      SRIKANTH B
                    </div>
                  </div>

                  <h2 className="text-lg font-extrabold text-black mt-2">{PERSONAL_INFO.name}</h2>
                  <p className="text-xs font-semibold text-neutral-500 font-mono mt-0.5">Python Full Stack Developer</p>

                  <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass border border-black/10 text-neutral-600 text-xs font-mono">
                    <span>Python • Django • React • TypeScript</span>
                  </div>
                </div>

                {/* Focus Areas */}
                <div className="space-y-2 mb-5 bg-black/3 p-4 rounded-2xl border border-black/6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 font-mono block">Focus Areas</span>
                  {[
                    'Full stack web application development',
                    'REST APIs with Python & Django',
                    'React & TypeScript frontend',
                    'Applied ML & Computer Vision',
                  ].map((s, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-600">
                      <span className="size-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap justify-center gap-1.5">
                  {['Python', 'Django', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS'].map((tech, i) => (
                    <span key={i} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
