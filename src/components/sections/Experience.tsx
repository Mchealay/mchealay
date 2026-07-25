'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  bullets: string[];
  accent: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 'exp-vite-plc',
    company: 'Vite PLC',
    role: 'Backend Developer (Intern)',
    period: 'Mar 2025 – May 2025',
    location: 'Mekelle, Ethiopia',
    type: 'Internship',
    accent: 'from-cyan-500 to-indigo-500',
    bullets: [
      'Engineered core backend services and microservice modules for a enterprise life insurance management platform using NestJS and PostgreSQL.',
      'Architected database schemas and ORM relationships using Prisma to handle policy lifecycle, member registrations, and claim submissions.',
      'Designed and documented RESTful API endpoints with structured DTO validations and global exception filters.',
      'Collaborated with senior software engineers on code reviews, database indexing, and performance optimization.',
    ],
  },
];

function TimelineItem({ exp, index, total }: { exp: ExperienceItem; index: number; total: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      id={exp.id}
      className="relative flex gap-3 sm:gap-5"
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center pt-1">
        <div
          className={`w-4 h-4 rounded-full bg-gradient-to-br ${exp.accent} shrink-0 shadow-lg ring-[3px] ring-[#060A12] pulse-ring flex items-center justify-center`}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white/90" />
        </div>
        {index < total - 1 && (
          <div className="flex-1 w-px bg-gradient-to-b from-cyan-500/20 to-transparent mt-2" />
        )}
      </div>

      {/* Content */}
      <div className="pb-8 sm:pb-10 flex-1 min-w-0">
        <div className="glass glass-hover gradient-border rounded-2xl p-4 sm:p-6 space-y-4 group">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                  {exp.type}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-50 transition-colors">{exp.role}</h3>
              <div className="flex items-center gap-2 mt-1.5">
                <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="text-sm font-semibold text-slate-200">{exp.company}</span>
              </div>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-1.5 text-xs text-slate-400 shrink-0">
              <div className="flex items-center gap-1.5 font-mono whitespace-nowrap">
                <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                {exp.period}
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span className="whitespace-nowrap">{exp.location}</span>
              </div>
            </div>
          </div>

          {/* Bullets */}
          <ul className="space-y-2.5 pt-3 border-t border-white/6">
            {exp.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400 shrink-0 mt-2" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/8 border border-cyan-400/15 text-cyan-400 text-[11px] sm:text-xs font-semibold tracking-widest uppercase mb-4">
            💼 Work Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Hands-on engineering experience designing enterprise backends &amp; full-stack software solutions.
          </p>
        </motion.div>

        <div className="flex flex-col">
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.id} exp={exp} index={i} total={experiences.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
