'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

type TabKey = 'languages' | 'backend' | 'frontend' | 'ai_tools';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

const tabs: { key: TabKey; label: string; icon: string; color: string }[] = [
  { key: 'languages', label: 'Languages', icon: '🧩', color: 'from-cyan-500/20 to-cyan-600/10 text-cyan-400 border-cyan-400/30' },
  { key: 'backend', label: 'Backend & DB', icon: '⚙️', color: 'from-indigo-500/20 to-indigo-600/10 text-indigo-400 border-indigo-400/30' },
  { key: 'frontend', label: 'Frontend', icon: '🎨', color: 'from-emerald-500/20 to-emerald-600/10 text-emerald-400 border-emerald-400/30' },
  { key: 'ai_tools', label: 'AI & APIs', icon: '🤖', color: 'from-amber-500/20 to-amber-600/10 text-amber-400 border-amber-400/30' },
];

const skills: Record<TabKey, Skill[]> = {
  languages: [
    { name: 'Python', level: 95, icon: '🐍' },
    { name: 'Node.js / JS', level: 94, icon: '🟢' },
    { name: 'NestJS', level: 92, icon: '🪺' },
    { name: 'Express', level: 90, icon: '⚡' },
    { name: 'Django', level: 88, icon: '🎸' },
    { name: 'PHP', level: 82, icon: '🐘' },
    { name: 'Java', level: 80, icon: '☕' },
  ],
  backend: [
    { name: 'RESTful APIs', level: 96, icon: '🔗' },
    { name: 'MySQL', level: 97, icon: '🐬' },
    { name: 'PostgreSQL', level: 94, icon: '🐘' },
    { name: 'Prisma ORM', level: 92, icon: '💎' },
    { name: 'MongoDB', level: 90, icon: '🍃' },
    { name: 'NeonDB', level: 88, icon: '⚡' },
  ],
  frontend: [
    { name: 'HTML5 / CSS3', level: 96, icon: '🌐' },
    { name: 'JavaScript ES6+', level: 95, icon: '🟨' },
    { name: 'Tailwind CSS', level: 95, icon: '🎨' },
    { name: 'React 19', level: 94, icon: '⚛️' },
    { name: 'Next.js', level: 92, icon: '▲' },
    { name: 'Flutter', level: 85, icon: '💙' },
  ],
  ai_tools: [
    { name: 'OpenCV', level: 90, icon: '👁️' },
    { name: 'Gemini API', level: 92, icon: '✨' },
    { name: 'Clerk Auth', level: 90, icon: '🔐' },
    { name: 'TensorFlow', level: 88, icon: '🧠' },
    { name: 'MediaPipe', level: 88, icon: '✋' },
    { name: 'PayPal API', level: 85, icon: '💳' },
    { name: 'Cisco Essentials', level: 94, icon: '🔌' },
  ],
};

// Per-tab bar colors
const barColors: Record<TabKey, string> = {
  languages: 'from-cyan-500 to-cyan-400',
  backend: 'from-indigo-500 to-indigo-400',
  frontend: 'from-emerald-500 to-emerald-400',
  ai_tools: 'from-amber-500 to-amber-400',
};

function SkillCard({
  skill,
  index,
  barGradient,
}: {
  skill: Skill;
  index: number;
  barGradient: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.02, y: -2 }}
      className="glass glass-hover rounded-2xl p-4 flex flex-col gap-3 group"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="text-[20px] leading-none" aria-hidden>{skill.icon}</span>
          <span className="text-sm font-semibold text-slate-200">{skill.name}</span>
        </div>
        <span className="text-xs font-bold text-slate-400 tabular-nums">{skill.level}%</span>
      </div>

      {/* Progress bar track */}
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 0.9, delay: 0.15 + index * 0.04, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full rounded-full bg-gradient-to-r ${barGradient}`}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  const [activeTab, setActiveTab] = useState<TabKey>('languages');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const activeTabData = tabs.find((t) => t.key === activeTab)!;

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[400px] bg-cyan-500/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/8 border border-cyan-400/15 text-cyan-400 text-[11px] sm:text-xs font-semibold tracking-widest uppercase mb-4">
            ⚡ Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm sm:text-base">
            Languages, frameworks, databases &amp; AI libraries powering real-world production systems.
          </p>
        </motion.div>

        {/* Tab Selector — horizontally scrollable on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="flex overflow-x-auto no-scrollbar gap-2 mb-8 pb-1 sm:pb-0 sm:flex-wrap sm:justify-center"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                id={`skills-tab-${tab.key}`}
                onClick={() => setActiveTab(tab.key)}
                className={`shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isActive
                    ? `bg-gradient-to-r ${tab.color}`
                    : 'glass border-white/8 text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Tab Heading */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {skills[activeTab].map((skill, i) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={i}
                barGradient={barColors[activeTab]}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Category summary footer */}
        <motion.div
          key={`${activeTab}-footer`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500"
        >
          <span>{activeTabData.icon}</span>
          <span>{skills[activeTab].length} skills in <span className="text-slate-400 font-medium">{activeTabData.label}</span></span>
        </motion.div>
      </div>
    </section>
  );
}
