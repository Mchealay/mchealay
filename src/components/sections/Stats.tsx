'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { GraduationCap, Award, Cpu, Code2 } from 'lucide-react';

interface Stat {
  id: string;
  icon: React.ReactNode;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
  color: string;
  iconBg: string;
}

const stats: Stat[] = [
  {
    id: 'stat-gpa',
    icon: <GraduationCap className="w-6 h-6" />,
    value: 3.67,
    suffix: '',
    label: 'Academic GPA / 4.0',
    description: 'B.Sc. in Software Engineering at Mekelle University (2019 – 2026)',
    color: 'text-cyan-400',
    iconBg: 'bg-cyan-400/10 border-cyan-400/20 text-cyan-400',
  },
  {
    id: 'stat-exit-exam',
    icon: <Award className="w-6 h-6" />,
    value: 86.25,
    suffix: '%',
    label: 'National Exit Exam',
    description: 'Top national score achieved in Software Engineering Exit Exam',
    color: 'text-emerald-400',
    iconBg: 'bg-emerald-400/10 border-emerald-400/20 text-emerald-400',
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
  },
  {
    id: 'stat-ai-gestures',
    icon: <Cpu className="w-6 h-6" />,
    value: 30,
    suffix: ' (ሀ-ፐ)',
    label: 'Tigrinya Sign Letters',
    description: 'First real-time AI computer vision recognition model (20k+ training images)',
    color: 'text-amber-400',
    iconBg: 'bg-amber-400/10 border-amber-400/20 text-amber-400',
  },
];

function CountUp({ target, suffix, prefix = '' }: { target: number; suffix: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(parseFloat(start.toFixed(2)));
      }
    }, step);

    return () => clearInterval(timer);
  }, [inView, target]);

  const display = Number.isInteger(target) ? Math.floor(count) : count.toFixed(2);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="stats" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-3 block">
            Proven Performance
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Key <span className="gradient-text">Highlights</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Quantifiable achievements in software engineering academics, AI model development, and full-stack software delivery.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              id={stat.id}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass glass-hover gradient-border rounded-2xl p-6 flex flex-col gap-4 group"
            >
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${stat.iconBg} group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>

              <div>
                <div className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${stat.color}`}>
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white font-semibold mt-1 text-sm">{stat.label}</div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
