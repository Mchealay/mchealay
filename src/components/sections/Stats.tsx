'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { GraduationCap, Award, Cpu, Code2 } from 'lucide-react';

interface Stat {
  id: string;
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  description: string;
  color: string;
  iconBg: string;
  glowColor: string;
}

const stats: Stat[] = [
  {
    id: 'stat-gpa',
    icon: <GraduationCap className="w-6 h-6" />,
    value: 3.67,
    suffix: '',
    label: 'Academic GPA / 4.0',
    description: 'B.Sc. Software Engineering at Mekelle University (2019 – 2026)',
    color: 'text-cyan-400',
    iconBg: 'bg-cyan-400/10 border-cyan-400/20 text-cyan-400',
    glowColor: 'rgba(34, 211, 238, 0.1)',
  },
  {
    id: 'stat-exit-exam',
    icon: <Award className="w-6 h-6" />,
    value: 86.25,
    suffix: '%',
    label: 'National Exit Exam',
    description: 'Top national score in Software Engineering Exit Exam',
    color: 'text-emerald-400',
    iconBg: 'bg-emerald-400/10 border-emerald-400/20 text-emerald-400',
    glowColor: 'rgba(52, 211, 153, 0.1)',
  },
  {
    id: 'stat-projects',
    icon: <Code2 className="w-6 h-6" />,
    value: 5,
    suffix: '+',
    label: 'Production Projects',
    description: 'Delivered across AI, healthcare, real estate, career tech & governance',
    color: 'text-indigo-400',
    iconBg: 'bg-indigo-400/10 border-indigo-400/20 text-indigo-400',
    glowColor: 'rgba(129, 140, 248, 0.1)',
  },
  {
    id: 'stat-ai-gestures',
    icon: <Cpu className="w-6 h-6" />,
    value: 30,
    suffix: '',
    label: 'Tigrinya Sign Letters (ሀ-ፐ)',
    description: 'First real-time AI vision model trained on 20k+ images',
    color: 'text-amber-400',
    iconBg: 'bg-amber-400/10 border-amber-400/20 text-amber-400',
    glowColor: 'rgba(251, 191, 36, 0.1)',
  },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (!inView || hasStartedRef.current) return;
    hasStartedRef.current = true;
    let start = 0;
    const duration = 1600;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(parseFloat(start.toFixed(2)));
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  const display = Number.isInteger(target) ? Math.floor(count) : count.toFixed(2);
  return <span ref={ref}>{display}{suffix}</span>;
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="stats" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-400/8 border border-indigo-400/15 text-indigo-400 text-[11px] sm:text-xs font-semibold tracking-widest uppercase mb-4">
            ✦ Proven Performance
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Key <span className="gradient-text">Highlights</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm sm:text-base">
            Quantifiable achievements across software engineering, AI development &amp; full-stack delivery.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              id={stat.id}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass glass-hover gradient-border rounded-2xl p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 group cursor-default"
              style={{ '--glow': stat.glowColor } as React.CSSProperties}
            >
              {/* Icon */}
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl border flex items-center justify-center shrink-0 ${stat.iconBg} group-hover:scale-110 transition-transform duration-200`}>
                {stat.icon}
              </div>

              {/* Number */}
              <div>
                <div className={`text-2xl sm:text-4xl font-extrabold tracking-tight leading-none ${stat.color}`}>
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white font-semibold mt-1.5 text-xs sm:text-sm leading-tight">
                  {stat.label}
                </div>
              </div>

              {/* Description */}
              <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
