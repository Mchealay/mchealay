'use client';

import { motion, Variants } from 'framer-motion';
import { Mail, Download, ExternalLink, ArrowRight, Zap, Phone, Award, GraduationCap } from 'lucide-react';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const socialLinks = [
  {
    id: 'github-link',
    href: 'https://github.com/mchealay',
    label: 'GitHub',
    icon: <GithubIcon />,
  },
  {
    id: 'linkedin-link',
    href: 'https://linkedin.com/in/mchealay',
    label: 'LinkedIn',
    icon: <LinkedinIcon />,
  },
  {
    id: 'email-link',
    href: 'mailto:haftemchealay@gmail.com',
    label: 'Email',
    icon: <Mail className="w-5 h-5" />,
  },
  {
    id: 'phone-link',
    href: 'tel:+251914297180',
    label: 'Phone',
    icon: <Phone className="w-5 h-5" />,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Availability Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-400/20 text-emerald-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Available for Full-Stack & Backend Roles
            </span>
          </motion.div>

          {/* Name & Title */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
              Hi, I&apos;m <span className="gradient-text">MCHEALAY HAFTE</span>
            </h1>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500/50" />
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300">
                Full-Stack Software Developer
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-indigo-500/50" />
            </div>
          </motion.div>

          {/* Professional Summary Statement */}
          <motion.p
            variants={itemVariants}
            className="max-w-3xl text-base sm:text-lg text-slate-400 leading-relaxed"
          >
            Full-stack developer with a proven track record delivering{' '}
            <span className="text-cyan-400 font-medium">full-stack, AI-powered solutions</span> across
            healthcare, education, career tech, and governance. Skilled in Python, Django, Node.js, Express, Next.js, NestJS, Flutter, PostgreSQL, and MongoDB.
          </motion.p>

          {/* Highlights Chips */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: <GraduationCap className="w-4 h-4 text-cyan-400" />, text: 'B.Sc. Software Engineering (GPA 3.67 / 4.0)' },
              { icon: <Award className="w-4 h-4 text-emerald-400" />, text: 'National Exit Exam: 86.25%' },
              { icon: <Zap className="w-4 h-4 text-amber-400" />, text: 'Vite PLC Backend Intern' },
            ].map((chip) => (
              <span
                key={chip.text}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300"
              >
                {chip.icon}
                {chip.text}
              </span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 mt-2"
          >
            <a
              id="view-projects-btn"
              href="#projects"
              className="px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:from-cyan-400 hover:to-indigo-400 transition-all duration-200 flex items-center gap-2"
            >
              View Projects & Source Code
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              id="contact-btn"
              href="#contact"
              className="px-6 py-3 rounded-xl font-semibold text-sm glass border border-white/10 text-slate-200 hover:bg-white/8 hover:border-cyan-400/30 transition-all duration-200"
            >
              Get in Touch
            </a>
            <a
              id="website-btn"
              href="https://mchealay.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-semibold text-sm border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/60 transition-all duration-200 flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              mchealay.vercel.app
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mt-2">
            {socialLinks.map((link) => (
              <motion.a
                key={link.id}
                id={link.id}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-colors"
                title={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-1 text-slate-600 text-xs"
            >
              <span>scroll</span>
              <div className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center p-1">
                <div className="w-1 h-2 rounded-full bg-cyan-400/60" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
