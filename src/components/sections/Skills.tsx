'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

type TabKey = 'languages' | 'backend' | 'frontend' | 'ai_tools';

interface Skill {
  name: string;
  level: number;
  icon: string;
  tag?: string;
}

const tabs: { key: TabKey; label: string }[] = [
  { key: 'languages', label: 'Languages & Frameworks' },
  { key: 'backend', label: 'Backend & Databases' },
  { key: 'frontend', label: 'Frontend & Mobile' },
  { key: 'ai_tools', label: 'AI, Vision & APIs' },
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
    { name: 'PostgreSQL', level: 94, icon: '🐘' },
    { name: 'MongoDB', level: 90, icon: '🍃' },
    { name: 'NeonDB', level: 88, icon: '⚡' },
    { name: 'Prisma ORM', level: 92, icon: '💎' },
    { name: 'RESTful APIs', level: 96, icon: '🔗' },
    { name: 'Multi-Tenant Arch', level: 90, icon: '🏗️' },
  ],
  frontend: [
    { name: 'React 19', level: 94, icon: '⚛️' },
    { name: 'Next.js', level: 92, icon: '▲' },
    { name: 'Flutter', level: 85, icon: '💙' },
    { name: 'Tailwind CSS', level: 95, icon: '🎨' },
    { name: 'HTML5 / CSS3', level: 96, icon: '🌐' },
    { name: 'JavaScript (ES6+)', level: 95, icon: '🟨' },
  ],
  ai_tools: [
    { name: 'TensorFlow', level: 88, icon: '🧠' },
    { name: 'OpenCV', level: 90, icon: '👁️' },
    { name: 'MediaPipe', level: 88, icon: '✋' },
    { name: 'Gemini API', level: 92, icon: '✨' },
    { name: 'Clerk Auth', level: 90, icon: '🔐' },
    { name: 'PayPal API', level: 85, icon: '💳' },
    { name: 'Cisco IT Essentials', level: 94, icon: '🔌' },
  ],
};

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.02, y: -2 }}
      className="glass glass-hover rounded-xl p-4 flex flex-col gap-3"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="text-xl leading-none" aria-hidden>
            {skill.icon}
          </span>
          <span className="text-sm font-semibold text-slate-200">{skill.name}</span>
        </div>
        <span className="text-xs font-bold text-cyan-400">{skill.level}%</span>
      </div>
      {/* Progress bar */}
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 0.9, delay: 0.2 + index * 0.04, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500"
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  const [activeTab, setActiveTab] = useState<TabKey>('languages');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-3 block">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Languages, frameworks, databases, and AI libraries leveraged across full-stack production systems.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              id={`skills-tab-${tab.key}`}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === tab.key
                  ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-400 border border-cyan-400/30'
                  : 'glass border border-white/8 text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {skills[activeTab].map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
