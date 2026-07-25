'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Award, CheckCircle, ShieldCheck, Cpu } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  icon: React.ReactNode;
  accent: string;
}

const certifications: Certification[] = [
  {
    title: 'Artificial Intelligence',
    issuer: 'Udacity',
    icon: <Cpu className="w-5 h-5 text-cyan-400" />,
    accent: 'from-cyan-500/20 to-indigo-500/10',
  },
  {
    title: 'Cisco IT Essentials',
    issuer: 'Cisco Networking Academy',
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    accent: 'from-emerald-500/20 to-teal-500/10',
  },
  {
    title: 'Computer Maintenance & Hardware',
    issuer: 'Certified Training',
    icon: <Award className="w-5 h-5 text-amber-400" />,
    accent: 'from-amber-500/20 to-orange-500/10',
  },
];

export function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-3 block">
            Academic Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Strong academic foundations in software engineering and continuous technical learning.
          </p>
        </motion.div>

        {/* Degree & Academics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Main Degree Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 glass gradient-border rounded-2xl p-6 md:p-8 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-mono">
                  2019 — 2026
                </span>
                <span className="text-xs text-slate-400 font-mono">Mekelle, Ethiopia</span>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    B.Sc. in Software Engineering
                  </h3>
                </div>
                <p className="text-base text-slate-300 font-semibold">Mekelle University</p>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed">
                Comprehensive software engineering curriculum covering data structures & algorithms, web architecture, artificial intelligence, software design patterns, backend microservices, and database systems.
              </p>
            </div>

            {/* Metrics Chips */}
            <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-white/8">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/8">
                <span className="text-xs text-slate-400 uppercase tracking-widest block font-mono">
                  Cumulative GPA
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 mt-1 block">
                  3.67 <span className="text-xs text-slate-400 font-normal">/ 4.0</span>
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/8">
                <span className="text-xs text-slate-400 uppercase tracking-widest block font-mono">
                  National Exit Exam
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1 block">
                  86.25%
                </span>
              </div>
            </div>
          </motion.div>

          {/* Languages Spoken Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass gradient-border rounded-2xl p-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-400" />
                Languages Spoken
              </h3>
              <p className="text-xs text-slate-400">
                Fluent in technical and intercultural communication for globally distributed teams:
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  { lang: 'English', proficiency: 'Professional Working Proficiency', flag: '🇬🇧' },
                  { lang: 'Amharic', proficiency: 'Native / Bilingual', flag: '🇪🇹' },
                  { lang: 'Tigrigna', proficiency: 'Native / Bilingual', flag: '🇪🇹' },
                ].map((item) => (
                  <li
                    key={item.lang}
                    className="p-3 rounded-xl bg-white/5 border border-white/8 flex items-center justify-between"
                  >
                    <div>
                      <span className="text-sm font-semibold text-white block">{item.lang}</span>
                      <span className="text-xs text-slate-400">{item.proficiency}</span>
                    </div>
                    <span className="text-lg">{item.flag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Certifications Row */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-cyan-400" />
            Professional Certifications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="glass glass-hover rounded-xl p-5 border border-white/10 flex items-start gap-3"
              >
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 shrink-0">
                  {cert.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{cert.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
