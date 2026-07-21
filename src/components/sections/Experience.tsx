'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  bullets: string[];
  accent: string;
}

const experiences: Experience[] = [
  {
    id: 'exp-techcorp',
    company: 'TechCorp Global',
    role: 'Senior Full-Stack Engineer',
    period: 'Jan 2023 – Present',
    location: 'Remote',
    type: 'Full-time',
    accent: 'from-cyan-500 to-indigo-500',
    bullets: [
      'Led migration of monolithic API to microservices, reducing p95 latency by 40% and enabling independent team deployments.',
      'Designed and shipped a real-time notification system handling 500k+ events/hour using Kafka + WebSockets.',
      'Introduced comprehensive observability stack (Datadog, OpenTelemetry) achieving 99.9% uptime SLA.',
      'Mentored 4 junior engineers through code reviews, architecture sessions, and career planning.',
    ],
  },
  {
    id: 'exp-startupxyz',
    company: 'StartupXYZ',
    role: 'Full-Stack Engineer',
    period: 'Mar 2021 – Dec 2022',
    location: 'San Francisco, CA (Hybrid)',
    type: 'Full-time',
    accent: 'from-indigo-500 to-purple-500',
    bullets: [
      'Built the core product from 0 to 1 — designed architecture, selected stack, and shipped MVP in 8 weeks.',
      'Grew the platform to 50k+ DAU by implementing CDN caching, lazy loading, and database query optimization.',
      'Implemented multi-tenancy with row-level security in PostgreSQL, supporting enterprise customer onboarding.',
      'Created internal design system with 40+ reusable React components, cutting UI dev time by 35%.',
    ],
  },
  {
    id: 'exp-devagency',
    company: 'DevAgency Labs',
    role: 'Software Engineer',
    period: 'Jun 2019 – Feb 2021',
    location: 'New York, NY',
    type: 'Full-time',
    accent: 'from-amber-500 to-orange-500',
    bullets: [
      'Delivered 12+ client projects across fintech, e-commerce, and healthcare verticals.',
      'Built RESTful APIs consumed by 200k+ monthly active users with 99.5% uptime.',
      'Integrated third-party services (Stripe, Twilio, Sendgrid) reducing integration time by 60% via shared libraries.',
      'Improved CI/CD pipeline reliability, cutting deployment failures by 80% with automated testing gates.',
    ],
  },
  {
    id: 'exp-freelance',
    company: 'Freelance',
    role: 'Full-Stack Developer',
    period: 'Sep 2018 – May 2019',
    location: 'Remote',
    type: 'Contract',
    accent: 'from-emerald-500 to-teal-500',
    bullets: [
      'Contracted on 5 client projects including SaaS dashboards, e-commerce stores, and mobile APIs.',
      'Built automated deployment scripts reducing client server setup from 4 hours to 15 minutes.',
    ],
  },
];

function TimelineItem({ exp, index, total }: { exp: Experience; index: number; total: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      id={exp.id}
      className="relative flex gap-6"
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <div
          className={`w-4 h-4 rounded-full bg-gradient-to-br ${exp.accent} shrink-0 mt-1 shadow-lg ring-4 ring-[#090D16]`}
        />
        {index < total - 1 && (
          <div className="flex-1 w-px bg-gradient-to-b from-white/15 to-transparent mt-2" />
        )}
      </div>

      {/* Content */}
      <div className={`pb-10 ${index === total - 1 ? '' : ''}`}>
        <div className="glass glass-hover gradient-border rounded-2xl p-5 md:p-6">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div>
              <h3 className="text-lg font-bold text-white">{exp.role}</h3>
              <div className="flex items-center gap-2 mt-0.5">
                <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                <span className={`text-sm font-semibold gradient-text`}>{exp.company}</span>
                <span className="text-xs text-slate-600">·</span>
                <span className="text-xs text-slate-500">{exp.type}</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Calendar className="w-3 h-3" />
                {exp.period}
              </div>
              <span className="text-xs text-slate-600">{exp.location}</span>
            </div>
          </div>

          {/* Bullets */}
          <ul className="space-y-2">
            {exp.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-400 leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-400 shrink-0" />
                {bullet}
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
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-3 block">
            Career
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            5+ years building production systems across startups, agencies, and enterprise scale.
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
