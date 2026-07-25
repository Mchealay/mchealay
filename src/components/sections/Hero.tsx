'use client';

import { motion, Variants } from 'framer-motion';
import { Mail, ExternalLink, ArrowRight, Zap, Phone, Award, GraduationCap, MapPin, Sparkles } from 'lucide-react';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const socialLinks = [
  {
    id: 'github-link',
    href: 'https://github.com/mchealay',
    label: 'GitHub',
    icon: <GithubIcon />,
    color: 'hover:text-white hover:border-white/40 hover:bg-white/8',
  },
  {
    id: 'linkedin-link',
    href: 'https://linkedin.com/in/mchealay',
    label: 'LinkedIn',
    icon: <LinkedinIcon />,
    color: 'hover:text-blue-400 hover:border-blue-400/40 hover:bg-blue-400/8',
  },
  {
    id: 'email-link',
    href: 'mailto:haftemchealay@gmail.com',
    label: 'Email',
    icon: <Mail className="w-[18px] h-[18px]" />,
    color: 'hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/8',
  },
  {
    id: 'phone-link',
    href: 'tel:+251914297180',
    label: 'Phone',
    icon: <Phone className="w-[18px] h-[18px]" />,
    color: 'hover:text-emerald-400 hover:border-emerald-400/40 hover:bg-emerald-400/8',
  },
];

const highlights = [
  {
    icon: <GraduationCap className="w-3.5 h-3.5 text-cyan-400 shrink-0" />,
    text: 'GPA 3.67 / 4.0 — B.Sc. Software Eng.',
    color: 'border-cyan-400/15 bg-cyan-400/5',
  },
  {
    icon: <Award className="w-3.5 h-3.5 text-emerald-400 shrink-0" />,
    text: 'National Exit Exam: 86.25%',
    color: 'border-emerald-400/15 bg-emerald-400/5',
  },
  {
    icon: <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />,
    text: 'Vite PLC Backend Intern',
    color: 'border-amber-400/15 bg-amber-400/5',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Multi-layer ambient glow orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-80 h-80 sm:w-[450px] sm:h-[450px] bg-cyan-500/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 sm:w-[450px] sm:h-[450px] bg-indigo-500/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[700px] sm:h-[700px] bg-cyan-500/4 rounded-full blur-[120px]" />
        {/* Extra subtle accent orbs */}
        <div className="absolute top-10 right-1/4 w-40 h-40 bg-indigo-400/6 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-emerald-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-5 sm:gap-6 text-center"
        >
          {/* — Availability Badge — */}
          <motion.div variants={itemVariants}>
            <span className="badge-glow inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-400/25 bg-emerald-400/8 text-emerald-400 text-xs sm:text-sm font-medium backdrop-blur-sm">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Open to Full-Stack &amp; Backend Roles
            </span>
          </motion.div>

          {/* — Name & Title — */}
          <motion.div variants={itemVariants} className="space-y-3 w-full">
            {/* Location mini-chip */}
            <div className="flex items-center justify-center gap-1.5 text-slate-500 text-xs mb-1">
              <MapPin className="w-3 h-3 text-indigo-400" />
              <span>Mekelle, Ethiopia &nbsp;·&nbsp; Open to Remote Worldwide</span>
            </div>

            <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              Hi, I&apos;m{' '}
              <span className="gradient-text block sm:inline">MCHEALAY HAFTE</span>
            </h1>

            {/* Title with decorative lines */}
            <div className="flex items-center justify-center gap-3 mt-2">
              <div className="hidden sm:block flex-1 max-w-[80px] h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-cyan-500/60" />
              <p className="text-base sm:text-xl lg:text-2xl font-semibold text-slate-300 tracking-wide">
                Full-Stack Software Developer
              </p>
              <div className="hidden sm:block flex-1 max-w-[80px] h-px bg-gradient-to-l from-transparent via-indigo-500/40 to-indigo-500/60" />
            </div>
          </motion.div>

          {/* — Professional Summary — */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed sm:leading-loose"
          >
            Delivering{' '}
            <span className="text-cyan-400 font-semibold">AI-powered, full-stack solutions</span>{' '}
            across healthcare, education, career tech &amp; governance. Skilled in Python, Django, Node.js, NestJS, Next.js, Flutter, PostgreSQL &amp; MongoDB.
          </motion.p>

          {/* — Highlight Chips — */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            {highlights.map((chip) => (
              <span
                key={chip.text}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] sm:text-xs text-slate-300 font-medium ${chip.color}`}
              >
                {chip.icon}
                {chip.text}
              </span>
            ))}
          </motion.div>

          {/* — CTA Buttons — */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto"
          >
            {/* Primary CTA */}
            <a
              id="view-projects-btn"
              href="#projects"
              className="btn-gradient relative group px-7 py-3.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:from-cyan-400 hover:to-indigo-400 transition-all duration-300 flex items-center justify-center gap-2.5 w-full sm:w-auto overflow-hidden"
            >
              <Sparkles className="w-4 h-4" />
              View My Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary CTA */}
            <a
              id="contact-btn"
              href="#contact"
              className="relative px-7 py-3.5 rounded-2xl font-semibold text-sm glass border border-white/12 text-slate-200 hover:bg-white/8 hover:border-cyan-400/35 hover:text-white transition-all duration-300 text-center w-full sm:w-auto"
            >
              Get in Touch
            </a>

            {/* External link */}
            <a
              id="website-btn"
              href="https://mchealay.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-2xl font-semibold text-sm border border-cyan-400/25 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <ExternalLink className="w-4 h-4" />
              mchealay.vercel.app
            </a>
          </motion.div>

          {/* — Social Icons — */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-2.5">
            {socialLinks.map((link) => (
              <motion.a
                key={link.id}
                id={link.id}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
                whileHover={{ scale: 1.12, y: -3 }}
                whileTap={{ scale: 0.92 }}
                className={`w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-400 transition-all duration-200 ${link.color}`}
                title={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* — Scroll Indicator — */}
          <motion.div
            variants={itemVariants}
            className="hidden sm:flex flex-col items-center gap-2 mt-4 text-slate-600"
          >
            <span className="text-[11px] tracking-widest uppercase font-medium">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-5 h-9 rounded-full border border-slate-700/60 flex items-start justify-center pt-1.5"
            >
              <div className="w-1 h-2 rounded-full bg-gradient-to-b from-cyan-400/80 to-transparent" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
