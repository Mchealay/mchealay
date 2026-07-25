'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Play,
  Pause,
  Layers,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Cpu,
  Server
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  category: 'AI & Computer Vision' | 'Full-Stack & SaaS' | 'Enterprise & Backend';
  problem: string;
  solution: string;
  highlights: string[];
  stack: { label: string; variant: 'cyan' | 'indigo' | 'amber' | 'default' | 'green' }[];
  images: { url: string; caption: string }[];
  githubUrl: string;
  liveUrl?: string;
  accent: string;
  codeSnippet?: string;
}

const projects: Project[] = [
  {
    id: 'tasl-ai',
    title: 'TASL — Tigrigna Sign Language Recognition',
    subtitle: 'First real-time AI recognition system for Tigrinya Sign Language (ሀ-ፐ)',
    period: 'Oct 2025 – Feb 2026',
    category: 'AI & Computer Vision',
    problem:
      "Tigray's Deaf community faced major communication barriers in daily life and education due to a lack of real-time translation tools tailored for Tigrinya sign alphabets.",
    solution:
      'Engineered an end-to-end computer vision pipeline using Python, OpenCV, and MediaPipe. Trained custom AI models on 20,000+ images for 30 distinct Tigrinya letters (ሀ-ፐ), delivering sub-50ms instant text & synthesized audio feedback via live webcam stream.',
    highlights: [
      'Recognizes 30 Tigrinya letters (ሀ-ፐ) via webcam',
      'Trained on 20,000+ custom annotated image samples',
      'Real-time audio speech synthesis & instant visual feedback',
      'Built for inclusive education and accessible communication',
    ],
    stack: [
      { label: 'Python', variant: 'cyan' },
      { label: 'OpenCV', variant: 'indigo' },
      { label: 'MediaPipe', variant: 'green' },
      { label: 'TensorFlow', variant: 'amber' },
      { label: 'HTML/CSS', variant: 'default' },
    ],
    images: [
      {
        url: '/projects/tasl-1.png',
        caption: 'Live webcam AI sign gesture recognition feed with instant letter detection',
      },
      {
        url: '/projects/tasl-2.png',
        caption: 'Model training analytics dashboard for 20,000+ gesture image dataset',
      },
    ],
    githubUrl: 'https://github.com/Mchealay/sign-language',
    accent: 'from-cyan-500/20 to-indigo-500/10',
  },
  {
    id: 'skillsync-ai',
    title: 'SkillSync — AI-Powered Career Coach',
    subtitle: 'Full-stack career accelerator with AI resume audits & job matching',
    period: 'Feb 2026 – May 2026',
    category: 'Full-Stack & SaaS',
    problem:
      'Job seekers struggle to optimize their resumes for ATS filters and identify actionable skill gaps needed for their target roles.',
    solution:
      'Architected a Next.js 19 SaaS application integrated with Google Gemini API, NeonDB PostgreSQL, and Clerk Authentication. Delivers intelligent resume scoring, customized career roadmaps, and real-time job recommendation algorithms.',
    highlights: [
      'Instant AI resume review with line-by-line breakdown',
      'Automated job recommendations tailored to skill profile',
      'PostgreSQL data persistence via NeonDB & Clerk Auth',
      'Responsive React 19 UI with fluid Tailwind CSS styling',
    ],
    stack: [
      { label: 'React 19', variant: 'cyan' },
      { label: 'Next.js', variant: 'indigo' },
      { label: 'Tailwind CSS', variant: 'green' },
      { label: 'NeonDB', variant: 'amber' },
      { label: 'Gemini API', variant: 'cyan' },
      { label: 'Clerk Auth', variant: 'default' },
    ],
    images: [
      {
        url: '/projects/skillsync-1.png',
        caption: 'SkillSync main dashboard showing AI match score & recommendations',
      },
      {
        url: '/projects/skillsync-2.png',
        caption: 'AI resume reviewer view providing line-by-line feedback',
      },
    ],
    githubUrl: 'https://github.com/mchealay/SkillSync-AI-Career-Coach',
    accent: 'from-indigo-500/20 to-purple-500/10',
  },
  {
    id: 'homehub',
    title: 'HomeHub — Real Estate Marketplace Platform',
    subtitle: 'Connecting home sellers & buyers with interactive listings search',
    period: 'Sep 2024 – Jan 2025',
    category: 'Full-Stack & SaaS',
    problem:
      'Home buyers and sellers needed a streamlined web platform to publish property details, upload photos, and filter listings without friction.',
    solution:
      'Developed a full-stack real estate web portal using Node.js, Express, and MongoDB. Features secure seller property creation, geo-location query parameters, interactive image previewers, and buyer search filters.',
    highlights: [
      'Comprehensive CRUD for property sellers and listing management',
      'Advanced MongoDB filtering by price, location, and property type',
      'Clean, intuitive UI built with semantic HTML5, CSS3, and JavaScript',
      'RESTful API architecture with modular controllers and schemas',
    ],
    stack: [
      { label: 'Node.js', variant: 'green' },
      { label: 'Express', variant: 'indigo' },
      { label: 'MongoDB', variant: 'amber' },
      { label: 'JavaScript', variant: 'cyan' },
      { label: 'HTML/CSS', variant: 'default' },
    ],
    images: [
      {
        url: '/projects/homehub-1.png',
        caption: 'HomeHub property search interface and interactive listing cards',
      },
    ],
    githubUrl: 'https://github.com/Mchealay/HomeHub',
    accent: 'from-amber-500/20 to-orange-500/10',
  },
  {
    id: 'ehealthsuite',
    title: 'EHealthSuite — Health Insurance Platform',
    subtitle: 'Multi-tenant enterprise insurance management & provider network',
    period: 'Mar 2025 – May 2025',
    category: 'Enterprise & Backend',
    problem:
      'Insurance organizations required a secure, modular platform to process policies, claims, and member registries across isolated multi-tenant environments.',
    solution:
      'Designed a multi-tenant backend architecture with NestJS and PostgreSQL. Implemented tenant-isolated database schemas, policy workflows, claim verification rules, and role-based access control (RBAC).',
    highlights: [
      'Multi-tenant data isolation with dynamic PostgreSQL schema switching',
      'Automated claim processing workflow with rule-based validation',
      'Provider network management and policy member registry',
      'Clean NestJS modular architecture with Dependency Injection',
    ],
    stack: [
      { label: 'NestJS', variant: 'cyan' },
      { label: 'PostgreSQL', variant: 'indigo' },
      { label: 'TypeScript', variant: 'green' },
      { label: 'Prisma', variant: 'amber' },
      { label: 'REST API', variant: 'default' },
    ],
    images: [], // No screenshot image - renders high-tech architecture blueprint card
    codeSnippet: `// Multi-Tenant Architecture & Schema Isolation
@Injectable()
export class TenantService {
  constructor(private readonly prisma: PrismaService) {}

  async getTenantContext(tenantId: string): Promise<TenantContext> {
    const tenant = await this.prisma.tenant.findUnique({
      where: { id: tenantId, status: 'ACTIVE' },
      include: { policies: true, providerNetwork: true }
    });
    if (!tenant) throw new ForbiddenException('Tenant isolated access denied');
    return new TenantContext(tenant);
  }
}`,
    githubUrl: 'https://github.com/EthiopianInsuranceCoorpration/EIC',
    accent: 'from-emerald-500/20 to-teal-500/10',
  },
  {
    id: 'job-board',
    title: 'Job Board Platforms',
    subtitle: 'Full-stack application for job postings, search, and employer portal',
    period: 'Jan 2025 – Mar 2025',
    category: 'Full-Stack & SaaS',
    problem:
      'Employers required a lightweight system to post open positions while candidates needed fast keyword and location-based job search.',
    solution:
      'Built a full-stack web application leveraging Node.js, Express, MongoDB, and React. Configured JWT authentication, job bookmarking, resume file uploads, and employer submission management.',
    highlights: [
      'Employer portal for publishing and tracking job applications',
      'Real-time keyword search & filtering by category, salary, and location',
      'Secure applicant authentication with JWT & encrypted passwords',
      'Responsive React frontend with clean UI state management',
    ],
    stack: [
      { label: 'Node.js', variant: 'green' },
      { label: 'Express', variant: 'indigo' },
      { label: 'MongoDB', variant: 'amber' },
      { label: 'React', variant: 'cyan' },
    ],
    images: [], // No screenshot image - renders high-tech schema preview card
    codeSnippet: `// Job Search Query Controller
export const searchJobs = async (req: Request, res: Response) => {
  const { keyword, category, location, type } = req.query;
  const filter: Record<string, any> = { active: true };
  if (keyword) filter.$text = { $search: String(keyword) };
  if (category) filter.category = category;
  const jobs = await Job.find(filter).sort({ createdAt: -1 }).limit(20);
  return res.status(200).json({ success: true, count: jobs.length, data: jobs });
};`,
    githubUrl: 'https://github.com/Mchealay/jobBoard',
    accent: 'from-cyan-500/20 to-blue-500/10',
  },
];

function ImageGallery({
  images,
  title,
  onZoom,
}: {
  images: { url: string; caption: string }[];
  title: string;
  onZoom: (url: string, caption: string) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const ROTATE_INTERVAL = 3500; // Rotate every 3.5 seconds

  useEffect(() => {
    if (images.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, ROTATE_INTERVAL);

    return () => clearInterval(timer);
  }, [images.length, isPaused]);

  if (images.length === 0) return null;

  const current = images[currentIndex];

  return (
    <div
      className="relative rounded-xl overflow-hidden glass border border-white/10 bg-[#0d1117] group/gallery"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Header bar with browser dot decorations */}
      <div className="flex items-center justify-between px-3 py-2 bg-white/5 border-b border-white/8 text-xs text-slate-400">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-[11px] font-mono text-slate-400 hidden sm:inline">
            interface_preview.png
          </span>
        </div>
        <div className="flex items-center gap-2">
          {images.length > 1 && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[10px] text-cyan-400 font-mono">
              {isPaused ? (
                <>
                  <Pause className="w-2.5 h-2.5" /> Paused
                </>
              ) : (
                <>
                  <Play className="w-2.5 h-2.5 animate-pulse" /> Auto (3.5s)
                </>
              )}
            </span>
          )}
          <button
            onClick={() => onZoom(current.url, current.caption)}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            title="Expand Full Screen"
            aria-label="Expand image"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Image Viewport with Animated Transitions */}
      <div
        className="relative h-56 sm:h-64 md:h-72 w-full bg-[#080b11] flex items-center justify-center overflow-hidden cursor-pointer"
        onClick={() => onZoom(current.url, current.caption)}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={current.url}
            src={current.url}
            alt={`${title} - ${current.caption}`}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
          />
        </AnimatePresence>

        {/* Hover zoom hint */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/gallery:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="px-3 py-1.5 rounded-lg glass border border-white/20 text-xs text-white font-medium flex items-center gap-1.5">
            <Maximize2 className="w-3.5 h-3.5 text-cyan-400" /> Click to expand
          </span>
        </div>

        {/* Next / Prev Navigation Controls for Multi-Images */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full glass border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/gallery:opacity-100 hover:bg-cyan-500/20 transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex((prev) => (prev + 1) % images.length);
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full glass border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/gallery:opacity-100 hover:bg-cyan-500/20 transition-all"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      {/* Slide Indicators & Caption Footer */}
      <div className="p-3 bg-white/3 border-t border-white/5 flex flex-col gap-2">
        <p className="text-xs text-slate-300 line-clamp-1 italic">{current.caption}</p>

        {images.length > 1 && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {images.map((img, idx) => (
                <button
                  key={img.url}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex
                      ? 'w-6 bg-gradient-to-r from-cyan-400 to-indigo-400'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <span className="text-[10px] text-slate-400 font-mono">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        )}
      </div>

      {/* Active auto-rotate countdown progress bar */}
      {images.length > 1 && !isPaused && (
        <motion.div
          key={currentIndex}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: ROTATE_INTERVAL / 1000, ease: 'linear' }}
          className="h-0.5 bg-cyan-400/80 w-full"
        />
      )}
    </div>
  );
}

function CodeArchitecturePreview({ project }: { project: Project }) {
  return (
    <div className="rounded-xl overflow-hidden glass border border-white/10 bg-[#0a0e17] flex flex-col h-full">
      {/* Header bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-white/5 border-b border-white/8 text-xs text-slate-400">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
          <span className="ml-2 text-[11px] font-mono text-cyan-400 flex items-center gap-1">
            <Cpu className="w-3 h-3" /> architecture_blueprint.ts
          </span>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-slate-400">
          Backend Service
        </span>
      </div>

      {/* Code Editor Body */}
      <div className="p-3 sm:p-4 font-mono text-[11px] sm:text-xs text-slate-300 bg-[#080b11] overflow-x-auto flex-1 leading-relaxed">
        <div className="flex items-center gap-2 text-slate-500 mb-2 pb-2 border-b border-white/5 text-[10px] sm:text-[11px]">
          <Server className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
          <span>System Architecture &amp; API Logic</span>
        </div>
        <pre className="text-cyan-300/90 whitespace-pre-wrap overflow-x-auto font-mono text-[11px] sm:text-xs">{project.codeSnippet}</pre>
      </div>

      {/* Footer Info Badge */}
      <div className="p-2.5 bg-white/3 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 font-mono">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <Sparkles className="w-3 h-3 shrink-0" /> Modular Enterprise Design
        </span>
        <span className="text-slate-500 hidden sm:inline">Source code on GitHub</span>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  onZoom,
}: {
  project: Project;
  index: number;
  onZoom: (url: string, caption: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeInOut' }}
      id={project.id}
      className="glass gradient-border rounded-2xl overflow-hidden group flex flex-col justify-between"
    >
      <div>
        {/* Accent top gradient line */}
        <div className={`h-1.5 bg-gradient-to-r ${project.accent} opacity-80`} />

        <div className="p-4 sm:p-6 md:p-7 space-y-4 sm:space-y-5">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-cyan-400 font-mono">
                  {project.category}
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs text-slate-400">{project.period}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:gradient-text transition-all">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">{project.subtitle}</p>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2 shrink-0 self-start">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${project.title}`}
                className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all shadow-sm"
                title="View Source Code on GitHub"
              >
                <GithubIcon />
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Live website for ${project.title}`}
                  className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all"
                  title="Visit Live Application"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Visual Gallery / Architecture Preview Section */}
          {project.images.length > 0 ? (
            <ImageGallery images={project.images} title={project.title} onZoom={onZoom} />
          ) : (
            <CodeArchitecturePreview project={project} />
          )}

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.stack.map((tech) => (
              <Badge key={tech.label} variant={tech.variant} size="sm">
                {tech.label}
              </Badge>
            ))}
          </div>

          {/* Key Bullet Highlights */}
          <ul className="space-y-1.5 text-xs text-slate-300">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Footer: Expandable Details */}
      <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 border-t border-white/5">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors font-medium w-full justify-between pt-2"
        >
          <span className="flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            {expanded ? 'Hide System Breakdown' : 'Read Case Study Breakdown'}
          </span>
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        <motion.div
          initial={false}
          animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-4 space-y-3">
            <div>
              <h4 className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" /> Problem & Challenge
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Engineering Solution
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">{project.solution}</p>
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
  const [zoomModal, setZoomModal] = useState<{ url: string; caption: string } | null>(null);

  return (
    <section id="projects" className="section-padding relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/8 border border-cyan-400/15 text-cyan-400 text-[11px] sm:text-xs font-semibold tracking-widest uppercase mb-4">
            🚀 Featured Systems &amp; Applications
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3">
            Production <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Full-stack &amp; AI solutions engineered for real-world impact across healthcare, education, career tech &amp; governance. Each project includes complete source code on GitHub.
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onZoom={(url, caption) => setZoomModal({ url, caption })}
            />
          ))}
        </div>
      </div>

      {/* Full-Screen Image Lightbox Modal */}
      <AnimatePresence>
        {zoomModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-2 sm:p-8 flex flex-col items-center justify-center"
            onClick={() => setZoomModal(null)}
          >
            <button
              onClick={() => setZoomModal(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-5xl max-h-[85vh] w-full rounded-2xl overflow-hidden glass border border-white/10 shadow-2xl flex flex-col bg-[#0b0e17]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex-1 min-h-0 flex items-center justify-center p-2 bg-black overflow-hidden">
                <img
                  src={zoomModal.url}
                  alt={zoomModal.caption}
                  className="max-h-[65vh] sm:max-h-[75vh] w-auto max-w-full object-contain"
                />
              </div>
              <div className="p-3 sm:p-4 bg-[#090d16] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-300">
                <span className="font-medium text-slate-200 text-center sm:text-left">{zoomModal.caption}</span>
                <button
                  onClick={() => setZoomModal(null)}
                  className="px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors shrink-0"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
