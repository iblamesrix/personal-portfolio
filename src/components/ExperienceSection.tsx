import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, MapPin, Calendar, CheckCircle2, FileText } from 'lucide-react';

interface ExperienceProps {
  onOpenResume: () => void;
}

export const ExperienceSection: React.FC<ExperienceProps> = ({ onOpenResume }) => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="orb w-72 h-72 bg-blue-600 top-0 left-1/2 opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-black/12 text-xs font-mono font-bold text-neutral-600 mb-4">
            <Briefcase className="size-3.5 text-neutral-500" />
            EXPERIENCE & EDUCATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Experience & <span className="neon-text">Education</span>
          </h2>
          <p className="mt-3 text-neutral-600 text-base leading-relaxed">
            Practical full-stack development experience and computer science foundations.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-6 sm:before:left-1/2 before:-ml-px before:w-0.5 before:bg-gradient-to-b before:from-black/30 before:via-black/12 before:to-transparent">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative flex items-start flex-col sm:flex-row gap-6 group"
            >
              {/* Node */}
              <div className="absolute left-6 sm:left-1/2 -ml-3 z-10 size-6 rounded-full bg-white border-2 border-black shadow-sm flex items-center justify-center">
                <div className="size-2 rounded-full bg-black" />
              </div>

              {/* Left */}
              <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:pr-8 sm:text-right flex flex-col justify-center">
                <div className="inline-flex items-center sm:justify-end gap-2 text-xs font-mono font-bold text-neutral-500 mb-1">
                  <Calendar className="size-3.5" />
                  <span>{exp.period}</span>
                </div>
                <h3 className="text-xl font-extrabold text-black">{exp.role}</h3>
                <div className="text-sm font-semibold text-neutral-700">{exp.organization}</div>
                <div className="flex items-center sm:justify-end gap-1 text-xs text-neutral-400 font-mono mt-1">
                  <MapPin className="size-3 text-neutral-400" />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Card */}
              <div className="w-full sm:w-1/2 pl-12 sm:pl-8">
                <div className="glass gradient-border p-6 rounded-2xl hover:border-black/22 transition-all">
                  <p className="text-sm text-neutral-600 leading-relaxed mb-4">{exp.summary}</p>
                  <div className="space-y-2 mb-4">
                    {exp.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-600">
                        <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-black/8">
                    {exp.techStack.map((tech, i) => (
                      <span key={i} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenResume}
            className="btn-gradient inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-bold text-sm"
          >
            <FileText className="size-4" />
            Open Complete Resume (PDF)
          </motion.button>
        </div>

      </div>
    </section>
  );
};
