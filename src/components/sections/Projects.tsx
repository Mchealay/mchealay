'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, GitBranch, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

// Inline brand SVG icon
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

interface Project {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  stack: { label: string; variant: 'cyan' | 'indigo' | 'amber' | 'default' | 'green' }[];
  metrics: string[];
  links: { demo?: string; github?: string; arch?: string };
  accent: string;
  tag: string;
}

const projects: Project[] = [
  {
    id: 'project-infra',
    title: 'CloudEdge Platform',
    tagline: 'Multi-tenant SaaS infrastructure for 50k+ DAU',
    problem:
      'A fast-growing startup faced critical scaling bottlenecks — their monolithic API was timing out under load, causing 15% error rates at peak hours.',
    solution:
      'Architected a microservices migration with event-driven messaging via Kafka, Redis caching layer, and horizontal auto-scaling on EKS. Introduced blue/green deployment pipelines eliminating downtime.',
    stack: [
      { label: 'TypeScript', variant: 'cyan' },
      { label: 'Next.js', variant: 'indigo' },
      { label: 'Node.js', variant: 'green' },
      { label: 'PostgreSQL', variant: 'amber' },
      { label: 'Redis', variant: 'default' },
      { label: 'Kafka', variant: 'default' },
      { label: 'Docker', variant: 'cyan' },
      { label: 'AWS EKS', variant: 'indigo' },
    ],
    metrics: [
      '99.9% uptime achieved',
      '40% latency reduction',
      '10x throughput increase',
      'Zero-downtime deploys',
    ],
    links: { demo: 'https://example.com', github: 'https://github.com', arch: '#' },
    accent: 'from-cyan-500/20 to-indigo-500/10',
    tag: 'Infrastructure',
  },
  {
    id: 'project-analytics',
    title: 'RealTime Analytics Engine',
    tagline: 'Stream processing pipeline for live dashboard insights',
    problem:
      'Business teams needed live insights from user behavior data, but batch ETL jobs introduced 6-hour delays, making real-time decisions impossible.',
    solution:
      'Built a streaming data pipeline with Kafka Streams + ClickHouse. Designed a GraphQL subscription API enabling sub-second dashboard updates. Deployed materialized views for instant query results.',
    stack: [
      { label: 'Go', variant: 'cyan' },
      { label: 'GraphQL', variant: 'indigo' },
      { label: 'Kafka', variant: 'default' },
      { label: 'ClickHouse', variant: 'amber' },
      { label: 'React', variant: 'cyan' },
      { label: 'Kubernetes', variant: 'indigo' },
    ],
    metrics: [
      '6hr delay → <1s latency',
      '2M events/min throughput',
      '85% storage cost reduction',
      '12 dashboard metrics live',
    ],
    links: { github: 'https://github.com', arch: '#' },
    accent: 'from-indigo-500/20 to-purple-500/10',
    tag: 'Data Engineering',
  },
  {
    id: 'project-devtool',
    title: 'DevForge CLI',
    tagline: 'Open-source developer productivity toolkit with 2k+ GitHub stars',
    problem:
      'Dev teams were spending 30% of sprint time on repetitive setup tasks — scaffolding, environment config, and boilerplate code duplication.',
    solution:
      'Created an extensible CLI framework with plugin architecture. Features: project scaffolding, CI/CD template generation, local env orchestration via Docker Compose, and an interactive wizard UI.',
    stack: [
      { label: 'TypeScript', variant: 'cyan' },
      { label: 'Node.js', variant: 'green' },
      { label: 'Docker', variant: 'cyan' },
      { label: 'GitHub Actions', variant: 'default' },
      { label: 'Jest', variant: 'amber' },
    ],
    metrics: [
      '2,400+ GitHub stars',
      '30% setup time saved',
      '150+ community plugins',
      'NPM: 8k weekly downloads',
    ],
    links: { demo: 'https://example.com', github: 'https://github.com' },
    accent: 'from-amber-500/20 to-orange-500/10',
    tag: 'Open Source',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      id={project.id}
      className="glass gradient-border rounded-2xl overflow-hidden group"
    >
      {/* Card gradient header */}
      <div className={`h-1.5 bg-gradient-to-r ${project.accent} opacity-80`} />

      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-1 block">
              {project.tag}
            </span>
            <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all">
              {project.title}
            </h3>
            <p className="text-sm text-slate-400 mt-1">{project.tagline}</p>
          </div>
          {/* Action buttons */}
          <div className="flex items-center gap-2 shrink-0">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
                className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-colors"
              >
                <GithubIcon />
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live demo"
                className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.links.arch && (
              <a
                href={project.links.arch}
                aria-label="Architecture diagram"
                className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-400/30 transition-colors"
              >
                <GitBranch className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((tech) => (
            <Badge key={tech.label} variant={tech.variant} size="sm">
              {tech.label}
            </Badge>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          {project.metrics.map((metric) => (
            <div
              key={metric}
              className="flex items-center gap-2 text-xs text-slate-300"
            >
              <TrendingUp className="w-3 h-3 text-emerald-400 shrink-0" />
              {metric}
            </div>
          ))}
        </div>

        {/* Expandable Case Study */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-cyan-400 transition-colors font-medium"
        >
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          {expanded ? 'Hide' : 'Read'} case study
        </button>

        <motion.div
          initial={false}
          animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-4 border-t border-white/5 mt-4 space-y-3">
            <div>
              <h4 className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-1">
                The Problem
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-1">
                The Solution
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">{project.solution}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-3 block">
            Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A selection of systems I&apos;ve engineered — each solving a real problem with measurable outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
