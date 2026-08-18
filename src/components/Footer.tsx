import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Mail, FileText, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative z-10 border-t border-black/8 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="relative size-9 rounded-xl overflow-hidden">
            <div className="absolute inset-0 btn-gradient" />
            <div className="relative flex items-center justify-center h-full font-mono font-extrabold text-white text-sm">SB</div>
          </div>
          <div>
            <div className="text-sm font-extrabold text-black tracking-tight">SRIKANTH B</div>
            <div className="text-[11px] text-neutral-500 font-mono">Python Full Stack Developer</div>
          </div>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-6 text-xs font-mono font-medium text-neutral-500" aria-label="Footer navigation">
          {['Home', 'About', 'Stack', 'Projects', 'Experience', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-black transition-colors">
              {item}
            </a>
          ))}
        </nav>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-mono font-medium text-neutral-500">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer"
            className="hover:text-black transition-colors flex items-center gap-1.5">
            <Github className="size-3.5" /> GitHub
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-black transition-colors flex items-center gap-1.5">
            <Mail className="size-3.5" /> Email
          </a>
          <button onClick={onOpenResume}
            className="hover:text-black transition-colors flex items-center gap-1.5">
            <FileText className="size-3.5" /> Resume
          </button>
        </div>

        {/* Copyright */}
        <div className="flex items-center gap-4">
          <span className="text-[11px] text-neutral-400 font-mono">© {new Date().getFullYear()} Srikanth B</span>
          <button onClick={scrollToTop} aria-label="Scroll to top"
            className="p-2 rounded-lg glass border border-black/10 hover:border-black/22 text-neutral-400 hover:text-black transition-colors">
            <ArrowUp className="size-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
