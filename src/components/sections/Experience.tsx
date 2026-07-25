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
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeInOut' }}
      id={exp.id}
      className="relative flex gap-3 sm:gap-6"
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <div
          className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br ${exp.accent} shrink-0 mt-1 shadow-lg ring-4 ring-[#090D16] flex items-center justify-center`}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
        </div>
        {index < total - 1 && (
          <div className="flex-1 w-px bg-gradient-to-b from-white/15 to-transparent mt-2" />
        )}
      </div>

      {/* Content */}
      <div className="pb-8 sm:pb-10 flex-1 min-w-0">
        <div className="glass glass-hover gradient-border rounded-2xl p-4 sm:p-6 md:p-7 space-y-4">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 block mb-1">
                {exp.type}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white">{exp.role}</h3>
              <div className="flex items-center gap-2 mt-1">
                <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="text-sm sm:text-base font-semibold text-slate-200">{exp.company}</span>
              </div>
            </div>
            <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 font-mono">
                <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                {exp.period}
              </div>
              <div className="flex items-center gap-1.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                {exp.location}
              </div>
            </div>
          </div>

          {/* Bullets */}
          <ul className="space-y-2.5 pt-2 border-t border-white/5">
            {exp.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
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
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-3 block">
            Work Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Hands-on engineering experience designing enterprise backends and full-stack software solutions.
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
