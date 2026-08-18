import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Cpu, Server, Layout, BrainCircuit, Database, Code2, Terminal, Zap, ChevronRight } from 'lucide-react';

const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'Server': return <Server className="size-5" />;
    case 'Layout': return <Layout className="size-5" />;
    case 'BrainCircuit': return <BrainCircuit className="size-5" />;
    case 'Database': return <Database className="size-5" />;
    default: return <Cpu className="size-5" />;
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export const ArchitectureStackMap: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState(SKILL_CATEGORIES[0].skills[0]);
  const activeCategory = SKILL_CATEGORIES[activeCategoryIndex];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="orb w-80 h-80 bg-cyan-500 bottom-0 left-0 opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-black/12 text-xs font-mono font-bold text-neutral-600 mb-4">
            <Cpu className="size-3.5 text-neutral-500" />
            MY DEVELOPMENT STACK
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            How I Build <span className="neon-text">Applications</span>
          </h2>
          <p className="mt-3 text-neutral-600 text-base leading-relaxed">
            Click across the categories to explore tools, frameworks, and implementation details.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isSelected = activeCategoryIndex === idx;
            return (
              <motion.button
                key={idx}
                whileHover={{ y: -3 }}
                onClick={() => { setActiveCategoryIndex(idx); setSelectedSkill(cat.skills[0]); }}
                className={`p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-black/6 border-black/25 shadow-sm'
                    : 'glass border-black/8 hover:border-black/18'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-xl ${isSelected ? 'bg-black/10 text-black' : 'bg-black/4 text-neutral-500'}`}>
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                    isSelected ? 'bg-black/10 text-black' : 'bg-black/4 text-neutral-500'
                  }`}>
                    {cat.skills.length} tools
                  </span>
                </div>
                <div>
                  <h3 className={`font-bold text-sm leading-snug line-clamp-2 ${isSelected ? 'text-black' : 'text-neutral-700'}`}>
                    {cat.title}
                  </h3>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Workspace */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">

          {/* Skills List */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider font-mono px-1 mb-2">
              Select a Technology:
            </div>
            {activeCategory.skills.map((skill, i) => {
              const isSelected = selectedSkill.name === skill.name;
              return (
                <motion.div
                  key={i}
                  whileHover={{ x: 4 }}
                  onClick={() => setSelectedSkill(skill)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? 'glass border-black/25 bg-black/4 shadow-sm'
                      : 'glass border-black/8 hover:border-black/18'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`size-3 rounded-full ${isSelected ? 'bg-black animate-pulse' : 'bg-neutral-300'}`} />
                      <h4 className={`font-bold text-sm ${isSelected ? 'text-black' : 'text-neutral-700'}`}>{skill.name}</h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-black/4 text-neutral-500 border border-black/8">
                        {skill.years}
                      </span>
                      <ChevronRight className={`size-4 transition-transform ${isSelected ? 'text-black translate-x-1' : 'text-neutral-400'}`} />
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs text-neutral-500">
                    <span>Level: <strong className="text-neutral-700">{skill.level}</strong></span>
                    {skill.codeSnippet && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-neutral-600 font-bold">
                        <Code2 className="size-3" /> Code
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Inspector */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSkill.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.35 }}
              className="lg:col-span-7"
            >
              <div className="glass gradient-border rounded-2xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-black/8 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-black/4 text-neutral-600 border border-black/10">
                        {activeCategory.title}
                      </span>
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-700 border border-emerald-500/25">
                        {selectedSkill.level}
                      </span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-black">{selectedSkill.name}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-neutral-400 font-mono">Usage</div>
                    <div className="text-base font-black text-black font-mono">{selectedSkill.years}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono mb-2">
                    Description
                  </h4>
                  <p className="text-sm text-neutral-700 leading-relaxed bg-black/3 p-4 rounded-xl border border-black/8">
                    {selectedSkill.description}
                  </p>
                </div>

                {selectedSkill.codeSnippet ? (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono flex items-center gap-1.5">
                        <Terminal className="size-3.5 text-neutral-500" />
                        Code Example
                      </span>
                    </div>
                    <div className="bg-gray-950 rounded-xl p-4 font-mono text-xs text-slate-300 overflow-x-auto border border-black/15 shadow-inner">
                      <pre className="leading-relaxed"><code>{selectedSkill.codeSnippet}</code></pre>
                    </div>
                  </div>
                ) : (
                  <div className="bg-black/3 p-6 rounded-xl border border-black/8 text-center">
                    <Zap className="size-8 text-neutral-400 mx-auto mb-2" />
                    <h4 className="text-sm font-bold text-black">Actively Used</h4>
                    <p className="text-xs text-neutral-500 mt-1">Applied across full-stack project development.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};
