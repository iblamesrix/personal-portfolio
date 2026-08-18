import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FileText, Search, Menu, X, Code2, Cpu, Briefcase, Layers, Mail, User } from 'lucide-react';

interface HeaderProps {
  onOpenResume: () => void;
  onOpenCommandPalette: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume, onOpenCommandPalette }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      // Remove 'simulator' from tracking
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top && scrollPosition < top + el.offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home', icon: Code2 },
    { label: 'About', href: '#about', id: 'about', icon: User },
    { label: 'Stack', href: '#skills', id: 'skills', icon: Cpu },
    { label: 'Projects', href: '#projects', id: 'projects', icon: Layers },
    { label: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
    { label: 'Contact', href: '#contact', id: 'contact', icon: Mail },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'glass-strong shadow-sm border-b border-black/8 py-2.5'
        : 'bg-transparent py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative size-10 rounded-xl overflow-hidden">
              <div className="absolute inset-0 btn-gradient opacity-90" />
              <div className="relative flex items-center justify-center h-full font-mono font-extrabold text-white text-base">
                SB
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold tracking-tight text-black text-sm group-hover:text-neutral-600 transition-colors">
                  SRIKANTH B
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/12 text-emerald-700 border border-emerald-500/22">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse mr-1.5" />
                  OPEN
                </span>
              </div>
              <span className="text-[11px] font-mono text-neutral-500 tracking-wide">
                Python Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 glass rounded-full px-2 py-1.5 border border-black/10" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-black text-white shadow-sm'
                      : 'text-neutral-600 hover:text-black hover:bg-black/6'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenCommandPalette}
              aria-label="Search (Ctrl+K)"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass border border-black/10 text-xs font-medium text-neutral-600 hover:text-black transition-colors"
            >
              <Search className="size-3.5" />
              <span>Search</span>
              <kbd className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-black/5 border border-black/10 text-neutral-400">⌘K</kbd>
            </button>
            <button
              onClick={onOpenResume}
              className="btn-gradient flex items-center gap-2 px-4 py-1.5 rounded-lg text-white text-xs font-bold"
            >
              <FileText className="size-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile */}
          <div className="flex sm:hidden items-center gap-2">
            <button onClick={onOpenCommandPalette} aria-label="Search" className="p-2 rounded-lg glass border border-black/10 text-neutral-600">
              <Search className="size-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="p-2 rounded-lg btn-gradient text-white"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden glass-strong border-b border-black/8 px-4 pt-3 pb-6"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold flex items-center gap-3 transition-all ${
                    activeSection === link.id
                      ? 'bg-black/8 text-black border border-black/15'
                      : 'text-neutral-600 hover:bg-black/5 hover:text-black'
                  }`}
                >
                  <link.icon className="size-4" />
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-black/8">
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
                  className="w-full btn-gradient flex items-center justify-center gap-2 py-3 rounded-xl text-white text-sm font-bold"
                >
                  <FileText className="size-4" />
                  View Resume PDF
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
