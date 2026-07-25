'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Code2, Heart, Mail } from 'lucide-react';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const footerLinks = [
  { href: '#stats', label: 'Highlights' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#playground', label: 'CLI Playground' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://github.com/mchealay', icon: <GithubIcon />, label: 'GitHub' },
  { href: 'https://linkedin.com/in/mchealay', icon: <LinkedinIcon />, label: 'LinkedIn' },
  { href: 'mailto:haftemchealay@gmail.com', icon: <Mail className="w-4 h-4" />, label: 'Email' },
];

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/6 overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-20 bg-cyan-500/4 blur-2xl" />

      <div
        className="relative"
        style={{ background: 'rgba(6, 10, 18, 0.95)', backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          {/* Main Footer Row */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 mb-8 sm:mb-10">
            {/* Brand */}
            <div className="flex flex-col items-center lg:items-start gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                  <Code2 className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-white text-lg tracking-tight">
                  mchealay<span className="gradient-text">.dev</span>
                </span>
              </div>
              <p className="text-slate-500 text-xs sm:text-sm text-center lg:text-left max-w-[220px] leading-relaxed">
                Full-Stack Developer building AI-powered solutions from Mekelle, Ethiopia.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg glass border border-white/8 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Nav */}
            <nav className="flex flex-wrap justify-center lg:justify-end gap-x-5 gap-y-2.5">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs sm:text-sm text-slate-500 hover:text-slate-200 transition-colors animated-underline"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-slate-500 text-center sm:text-left">
              © {new Date().getFullYear()} Mchealay Hafte. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-1.5 text-xs text-slate-500">
                Built with <Heart className="w-3 h-3 text-rose-500/80" /> Next.js &amp; Framer Motion
              </p>
              {/* Back to top */}
              <motion.button
                id="back-to-top-btn"
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.92 }}
                className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-200"
                aria-label="Back to top"
                title="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
