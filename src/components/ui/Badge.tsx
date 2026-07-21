'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'cyan' | 'indigo' | 'amber' | 'green' | 'red';
  size?: 'sm' | 'md';
}

const variantStyles: Record<string, string> = {
  default: 'bg-white/5 text-slate-300 border-white/10',
  cyan: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/20',
  indigo: 'bg-indigo-400/10 text-indigo-400 border-indigo-400/20',
  amber: 'bg-amber-400/10 text-amber-400 border-amber-400/20',
  green: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
  red: 'bg-red-400/10 text-red-400 border-red-400/20',
};

const sizeStyles: Record<string, string> = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-3 py-1',
};

export function Badge({ children, variant = 'default', size = 'sm' }: BadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={`inline-flex items-center rounded-full border font-medium ${variantStyles[variant]} ${sizeStyles[size]} transition-colors`}
    >
      {children}
    </motion.span>
  );
}
