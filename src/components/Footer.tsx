'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Code2, Heart } from 'lucide-react';

const footerLinks = [
  { href: '#stats', label: 'Impact' },
  { href: '#projects', label: 'Projects' },
  { href: '#playground', label: 'Playground' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/8 bg-[#07090f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center">
              <Code2 className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-bold text-white">
              alex<span className="gradient-text">.dev</span>
            </span>
          </div>

          {/* Quick nav */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-500 hover:text-slate-300 transition-colors animated-underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Back to top */}
          <motion.button
            id="back-to-top-btn"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>
            © {new Date().getFullYear()} Alex Chen. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-500/70 mx-0.5" /> using Next.js, Tailwind & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
