'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  onClick?: () => void;
}

export function Card({ children, className = '', hover = false, gradient = false, onClick }: CardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.2 }}
      className={`
        glass rounded-2xl
        ${hover ? 'glass-hover cursor-pointer' : ''}
        ${gradient ? 'gradient-border' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
