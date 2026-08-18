import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { X, Github, ExternalLink, CheckCircle2, Cpu, User, Wrench } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', handleKeyDown); };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl glass-strong gradient-border rounded-2xl overflow-hidden z-10 my-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-black/8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-black/6 text-neutral-600 border border-black/10">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-black/6 text-neutral-600 border border-black/10">
                    {project.role}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight">{project.title}</h3>
                <p className="text-sm text-neutral-500 font-mono mt-0.5">{project.subtitle}</p>
              </div>
              <button onClick={onClose} className="p-2 rounded-xl glass border border-black/10 hover:border-black/22 text-neutral-500 hover:text-black transition-colors shrink-0 ml-4">
                <X className="size-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 space-y-7 max-h-[72vh] overflow-y-auto">

              {/* Overview */}
              <div className="bg-black/3 p-4 rounded-xl border border-black/8">
                <h4 className="text-sm font-bold text-black mb-2">Overview</h4>
                <p className="text-sm text-neutral-600 leading-relaxed">{project.fullDescription}</p>
              </div>

              {/* Problem & Solution */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-black/3 p-4 rounded-xl border border-black/8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono mb-2">Problem</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">{project.problem}</p>
                </div>
                <div className="bg-black/3 p-4 rounded-xl border border-black/8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono mb-2">Solution</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* My Role */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono mb-3 flex items-center gap-2">
                  <User className="size-4 text-neutral-500" />
                  My Contribution
                </h4>
                <div className="space-y-2">
                  {project.myContribution.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-black/3 border border-black/8 text-xs text-neutral-600">
                      <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono mb-3 flex items-center gap-2">
                  <Cpu className="size-4 text-neutral-500" />
                  Architecture
                </h4>
                <div className="space-y-2">
                  {project.architectureDetails.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-black/3 border border-black/8 text-xs text-neutral-600">
                      <span className="size-4 rounded-full bg-black/10 text-black font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">{idx + 1}</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono mb-3 flex items-center gap-2">
                  <Wrench className="size-4 text-neutral-500" />
                  Key Features
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-black/3 border border-black/8 text-xs text-neutral-600">
                      <span className="size-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics — only verified ones */}
              {project.keyMetrics.filter(m => m.label !== 'Role').length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono mb-3">Results</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {project.keyMetrics.filter(m => m.label !== 'Role').map((metric, idx) => (
                      <div key={idx} className="glass border border-black/10 p-3 rounded-xl text-center">
                        <div className="text-lg font-black text-black font-mono">{metric.value}</div>
                        <div className="text-xs font-semibold text-neutral-500 mt-0.5">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => <span key={i} className="tech-pill">{tag}</span>)}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-6 border-t border-black/8">
              <div className="text-xs text-neutral-400 font-mono">{project.title} — {project.category}</div>
              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass border border-black/12 hover:border-black/25 text-black text-xs font-bold transition-colors">
                    <Github className="size-4" />
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl btn-gradient text-white text-xs font-bold">
                    <ExternalLink className="size-4" />
                    Live Site
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
