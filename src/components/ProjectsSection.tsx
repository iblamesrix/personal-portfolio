import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { Layers, Github, ExternalLink, ArrowUpRight, Globe } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Full Stack', 'Machine Learning & AI', 'Computer Vision'];
  const filteredProjects = selectedCategory === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="orb w-96 h-96 bg-violet-600 top-1/2 right-0 opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-black/12 text-xs font-mono font-bold text-neutral-600 mb-4">
            <Layers className="size-3.5 text-neutral-500" />
            FEATURED PROJECTS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Featured <span className="neon-text">Projects</span>
          </h2>
          <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
            Real applications built across full-stack development, AI, machine learning, and computer vision.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <div className="project-filters flex flex-nowrap items-center justify-start sm:flex-wrap sm:justify-center gap-2 mb-12 overflow-x-auto pb-1 sm:overflow-visible sm:pb-0" role="group" aria-label="Project categories">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat)}
              className={`shrink-0 whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 border ${
                selectedCategory === cat
                  ? 'project-filter-active bg-black text-white border-black shadow-sm'
                  : 'glass text-neutral-600 border-black/10 hover:border-black/22 hover:text-black'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`card-3d glass gradient-border rounded-3xl p-6 sm:p-8 flex flex-col justify-between group min-w-0 overflow-hidden ${
                  project.id === 'hype-house-events' ? 'border-black/20 shadow-sm' : ''
                }`}
              >
                <div>
                  {/* Category & Status */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-black/5 text-neutral-700 border border-black/10">
                        {project.category}
                      </span>
                      {project.liveUrl && (
                        <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-emerald-500/12 text-emerald-700 border border-emerald-500/22 flex items-center gap-1">
                          <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          LIVE
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono font-semibold text-neutral-400">{project.role}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-black group-hover:text-neutral-700 transition-colors tracking-tight mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-neutral-500 mb-3 font-mono">{project.subtitle}</p>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-5">{project.shortDescription}</p>

                  {/* Key metrics — only if meaningful */}
                  {project.keyMetrics.filter(m => m.label !== 'Role').length > 0 && (
                    <div className="grid grid-cols-2 gap-2.5 mb-5">
                      {project.keyMetrics.filter(m => m.label !== 'Role').slice(0, 2).map((m, i) => (
                        <div key={i} className="bg-black/3 p-3 rounded-2xl border border-black/6 min-w-0 overflow-hidden">
                          <div className="text-[11px] text-neutral-400 font-mono">{m.label}</div>
                          <div className="text-xs sm:text-sm font-extrabold text-black font-mono mt-0.5 whitespace-nowrap leading-tight tracking-tight">{m.value}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 5).map((tag, i) => (
                      <span key={i} className="tech-pill">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-5 border-t border-black/8 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-700 hover:text-black transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="size-4" />
                  </button>
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                        className="p-2.5 rounded-xl glass border border-black/10 hover:border-black/22 text-neutral-500 hover:text-black transition-colors">
                        <Github className="size-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl btn-gradient text-white text-xs font-bold">
                        <Globe className="size-3.5" />
                        <span>Live Site</span>
                        <ExternalLink className="size-3 opacity-60" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal project={activeModalProject} onClose={() => setActiveModalProject(null)} />
    </section>
  );
};
