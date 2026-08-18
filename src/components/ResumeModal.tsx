import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { X, Download, ExternalLink, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', handleKeyDown); };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl h-[85vh] glass-strong gradient-border rounded-2xl overflow-hidden flex flex-col z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-black/8">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-black/6 text-neutral-600"><FileText className="size-5" /></div>
                <div>
                  <h3 className="text-base font-extrabold text-black">Srikanth B — Resume (PDF)</h3>
                  <p className="text-xs text-neutral-500 font-mono">Python Full Stack Developer</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a href={PERSONAL_INFO.resumeUrl} target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-lg glass border border-black/10 hover:border-black/22 text-neutral-500 hover:text-black transition-colors">
                  <ExternalLink className="size-4" />
                </a>
                <a href={PERSONAL_INFO.resumeUrl} download="Srikanth_B_Resume.pdf"
                  className="btn-gradient flex items-center gap-2 px-3 py-2 rounded-lg text-white text-xs font-bold">
                  <Download className="size-4" />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <button onClick={onClose}
                  className="p-2 rounded-lg glass border border-black/10 hover:border-red-400/40 text-neutral-500 hover:text-red-600 transition-colors">
                  <X className="size-4" />
                </button>
              </div>
            </div>

            {/* PDF */}
            <div className="flex-1 bg-gray-950 relative">
              <iframe
                src={`${PERSONAL_INFO.resumeUrl}#toolbar=0&navpanes=0`}
                title="Srikanth B Resume PDF"
                className="w-full h-full border-none"
                loading="lazy"
              />
            </div>

            {/* Footer */}
            <div className="px-6 py-3 border-t border-black/8 flex justify-between items-center text-xs text-neutral-500 font-mono">
              <span>Srikanth B • Python Full Stack Developer</span>
              <span>Press ESC to close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
