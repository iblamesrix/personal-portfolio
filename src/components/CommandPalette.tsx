import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { Search, X, FileText, Github, ArrowRight, Layers, Cpu, Briefcase, Mail, User } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onOpenResume }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Reset query when closed
  useEffect(() => {
    if (!isOpen) setQuery('');
  }, [isOpen]);

  const quickNav = [
    { label: 'About — Background & Focus', sectionId: 'about', icon: User },
    { label: 'Stack — Development Tools', sectionId: 'skills', icon: Cpu },
    { label: 'Projects — Featured Work', sectionId: 'projects', icon: Layers },
    { label: 'Experience & Education', sectionId: 'experience', icon: Briefcase },
    { label: 'Contact — Get in Touch', sectionId: 'contact', icon: Mail },
  ];

  const filteredProjects = PROJECTS.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.tags.some(t => t.toLowerCase().includes(query.toLowerCase())) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelectNav = (sectionId: string) => {
    onClose();
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  const itemClass = "w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-black/6 hover:border-black/16 border border-transparent text-xs font-semibold transition-all text-neutral-600 hover:text-black";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4" role="dialog" aria-modal="true" aria-label="Search palette">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl glass-strong gradient-border rounded-2xl overflow-hidden z-10"
          >
            {/* Search */}
            <div className="flex items-center px-4 py-3.5 border-b border-black/8">
              <Search className="size-5 text-neutral-500 mr-3 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects, technologies, sections..."
                className="w-full bg-transparent text-sm text-black placeholder-neutral-400 focus:outline-none font-sans"
                autoFocus
              />
              <button onClick={onClose} className="p-1 rounded text-neutral-400 hover:text-black transition-colors">
                <kbd className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-black/6 border border-black/10 text-neutral-500">ESC</kbd>
              </button>
            </div>

            {/* Results */}
            <div className="p-4 max-h-[60vh] overflow-y-auto space-y-4">

              {/* Quick Actions */}
              <div>
                <div className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-wider mb-2 px-2">Quick Actions</div>
                <div className="space-y-1">
                  <button onClick={() => { onClose(); onOpenResume(); }} className={itemClass}>
                    <div className="flex items-center gap-3">
                      <FileText className="size-4 text-neutral-500" />
                      <span>Open Resume (PDF)</span>
                    </div>
                    <kbd className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-black/5 border border-black/10 text-neutral-400">PDF</kbd>
                  </button>
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" onClick={onClose} className={itemClass}>
                    <div className="flex items-center gap-3">
                      <Github className="size-4 text-neutral-500" />
                      <span>GitHub Profile (iblamesrix)</span>
                    </div>
                    <ArrowRight className="size-3.5 text-neutral-400" />
                  </a>
                </div>
              </div>

              {/* Navigation */}
              {!query.trim() && (
                <div>
                  <div className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-wider mb-2 px-2">Navigation</div>
                  <div className="space-y-1">
                    {quickNav.map((item, idx) => (
                      <button key={idx} onClick={() => handleSelectNav(item.sectionId)} className={itemClass}>
                        <div className="flex items-center gap-3">
                          <item.icon className="size-4 text-neutral-500" />
                          <span>{item.label}</span>
                        </div>
                        <kbd className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-black/5 border border-black/10 text-neutral-400">Go</kbd>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Filtered Projects */}
              {query.trim().length > 0 && (
                <div>
                  <div className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-wider mb-2 px-2">
                    Projects ({filteredProjects.length})
                  </div>
                  {filteredProjects.length > 0 ? (
                    <div className="space-y-1">
                      {filteredProjects.map((p) => (
                        <button key={p.id} onClick={() => handleSelectNav('projects')}
                          className="w-full text-left p-2.5 rounded-xl hover:bg-black/6 border border-transparent hover:border-black/12 text-xs transition-all">
                          <div className="font-bold text-black">{p.title}</div>
                          <div className="text-[11px] text-neutral-500 line-clamp-1 mt-0.5">{p.shortDescription}</div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-neutral-400 px-2 py-3">No projects found matching "{query}"</p>
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 border-t border-black/8 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
              <span>Srikanth B • Python Full Stack Developer</span>
              <span>ESC to close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
