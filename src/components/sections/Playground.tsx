'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { Terminal, CornerDownLeft, Trash2, ChevronRight } from 'lucide-react';

interface OutputLine {
  type: 'input' | 'output' | 'error' | 'success' | 'info';
  content: string | string[];
}

const COMMANDS: Record<string, () => OutputLine> = {
  help: () => ({
    type: 'output',
    content: [
      'Available CLI commands:',
      '  about      → Overview of Mchealay Hafte',
      '  skills     → View technical stack & languages',
      '  projects   → Browse featured full-stack & AI projects',
      '  education  → Degree, GPA & exit exam scores',
      '  contact    → Email, phone, website & socials',
      '  status     → Check current availability',
      '  api        → Simulate JSON REST API response',
      '  clear      → Clear the terminal output',
    ],
  }),
  about: () => ({
    type: 'success',
    content: [
      'MCHEALAY HAFTE · Full-Stack Software Developer',
      'Location: Mekelle, Ethiopia (Open to Remote)',
      'Delivering AI-powered solutions in healthcare,',
      'education, career tech, and governance.',
    ],
  }),
  skills: () => ({
    type: 'info',
    content: [
      '→ Languages & Frameworks:  Python · Node.js · Express · Next.js · NestJS · Django · PHP · Flutter · React',
      '→ Databases:              PostgreSQL · MongoDB · NeonDB · Prisma ORM',
      '→ AI & Platforms:          TensorFlow · OpenCV · MediaPipe · Gemini API · Clerk Auth · PayPal API',
      '→ Spoken Languages:        English (Professional) · Amharic (Native) · Tigrigna (Native)',
    ],
  }),
  projects: () => ({
    type: 'output',
    content: [
      '[1] TASL              → AI Tigrigna Sign Language Recognition (20k images, 30 letters)',
      '[2] SkillSync         → AI Career Coach & Resume Reviewer (Next.js, Gemini API, NeonDB)',
      '[3] HomeHub           → Full-Stack Real Estate Marketplace (Node.js, Express, MongoDB)',
      '[4] EHealthSuite      → Multi-tenant Health Insurance Platform (NestJS, PostgreSQL)',
      '[5] Job Boards        → Full-Stack Employer & Applicant Portal (Node.js, React)',
      '',
      'View detailed case studies at #projects ↑',
    ],
  }),
  education: () => ({
    type: 'success',
    content: [
      '🎓 Degree: B.Sc. in Software Engineering — Mekelle University (2019 – 2026)',
      '📊 Cumulative GPA: 3.67 / 4.0',
      '🏆 National Exit Exam Score: 86.25%',
      '📜 Certifications: Cisco IT Essentials · Udacity AI · Computer Maintenance',
    ],
  }),
  contact: () => ({
    type: 'success',
    content: [
      '📧 Email:     haftemchealay@gmail.com',
      '📞 Phone:     +251914297180',
      '🌐 Website:   mchealay.vercel.app',
      '🐙 GitHub:    github.com/mchealay',
      '💼 LinkedIn:  linkedin.com/in/mchealay',
    ],
  }),
  status: () => ({
    type: 'success',
    content: [
      '🟢 STATUS: Available for Full-Stack, Backend & AI Developer opportunities',
      '   Location: Mekelle, Ethiopia / Open to Remote worldwide',
      '   Degree: B.Sc. Software Engineering (GPA: 3.67/4.0)',
    ],
  }),
  api: () => ({
    type: 'output',
    content: [
      'GET /api/v1/developer/mchealay → 200 OK (8ms)',
      '',
      '{',
      '  "name": "Mchealay Hafte",',
      '  "role": "Full-Stack Software Developer",',
      '  "email": "haftemchealay@gmail.com",',
      '  "gpa": "3.67/4.0",',
      '  "exitExamScore": "86.25%",',
      '  "university": "Mekelle University",',
      '  "internship": "Vite PLC",',
      '  "available": true,',
      '  "projectsCount": 5',
      '}',
    ],
  }),
};

const WELCOME_LINES: OutputLine[] = [
  { type: 'info', content: ['Welcome to mchealay.dev terminal CLI v1.0.0'] },
  { type: 'output', content: ['Type `help` to list available commands.'] },
];

export function Playground() {
  const [history, setHistory] = useState<OutputLine[]>(WELCOME_LINES);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: '-100px' });

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const runCommand = useCallback(async (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    setHistory((h) => [...h, { type: 'input', content: `> ${cmd}` }]);
    setCommandHistory((ch) => [cmd, ...ch.slice(0, 19)]);
    setHistoryIndex(-1);

    if (trimmed === 'clear') {
      setTimeout(() => {
        setHistory(WELCOME_LINES);
      }, 120);
      return;
    }

    setIsTyping(true);
    await new Promise((r) => setTimeout(r, 200 + Math.random() * 150));
    setIsTyping(false);

    const handler = COMMANDS[trimmed];
    if (handler) {
      setHistory((h) => [...h, handler()]);
    } else {
      setHistory((h) => [
        ...h,
        {
          type: 'error',
          content: [`Command not found: "${trimmed}". Type 'help' for options.`],
        },
      ]);
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      runCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const next = Math.min(historyIndex + 1, commandHistory.length - 1);
      setHistoryIndex(next);
      setInput(commandHistory[next] ?? '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = historyIndex - 1;
      if (next < 0) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        setHistoryIndex(next);
        setInput(commandHistory[next] ?? '');
      }
    }
  };

  const lineStyle: Record<string, string> = {
    input: 'text-slate-200',
    output: 'text-slate-400',
    error: 'text-red-400',
    success: 'text-emerald-400',
    info: 'text-cyan-400',
  };

  return (
    <section id="playground" className="section-padding">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-3 block">
            Interactive CLI
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Terminal <span className="gradient-text">Playground</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Explore Mchealay&apos;s CV interactively. Try running{' '}
            <code className="text-cyan-400 bg-cyan-400/10 px-1.5 py-0.5 rounded text-sm">help</code>,{' '}
            <code className="text-cyan-400 bg-cyan-400/10 px-1.5 py-0.5 rounded text-sm">education</code>, or{' '}
            <code className="text-cyan-400 bg-cyan-400/10 px-1.5 py-0.5 rounded text-sm">api</code>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl overflow-hidden glow-cyan shadow-2xl"
        >
          {/* Terminal header bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#1a1f2e] border-b border-white/8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors cursor-pointer" />
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>mchealay.dev — bash</span>
            </div>
            <button
              id="terminal-clear-btn"
              onClick={() => setHistory(WELCOME_LINES)}
              className="text-slate-500 hover:text-slate-300 transition-colors"
              aria-label="Clear terminal"
              title="Clear Terminal"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Terminal body */}
          <div
            className="bg-[#0d1117] h-72 sm:h-80 overflow-y-auto p-3 sm:p-4 terminal-font text-[11px] sm:text-sm cursor-text leading-relaxed"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((line, i) => {
              const lines = Array.isArray(line.content) ? line.content : [line.content];
              return (
                <div key={i} className={`${lineStyle[line.type]} mb-0.5 whitespace-pre-wrap break-words`}>
                  {lines.map((l, j) => (
                    <div key={j} className="leading-5 sm:leading-6">
                      {l || '\u00A0'}
                    </div>
                  ))}
                </div>
              );
            })}

            {isTyping && (
              <div className="text-cyan-400 flex items-center gap-1">
                <span>executing</span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  ...
                </motion.span>
              </div>
            )}

            {/* Input line */}
            <div className="flex items-center gap-2 text-slate-200 mt-1">
              <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <input
                ref={inputRef}
                id="terminal-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 min-w-0 bg-transparent outline-none caret-cyan-400 text-slate-200 placeholder-slate-600 terminal-font text-xs sm:text-sm"
                placeholder="type a command..."
                autoComplete="off"
                spellCheck={false}
              />
            </div>
            <div ref={bottomRef} />
          </div>

          {/* Quick command buttons */}
          <div className="px-3 sm:px-4 py-3 bg-[#0d1117] border-t border-white/5 flex flex-wrap gap-1.5 sm:gap-2">
            {['help', 'about', 'skills', 'projects', 'education', 'contact', 'api'].map((cmd) => (
              <button
                key={cmd}
                id={`terminal-cmd-${cmd}`}
                onClick={() => {
                  runCommand(cmd);
                  inputRef.current?.focus();
                }}
                className="px-2.5 py-1 text-[11px] sm:text-xs rounded-lg bg-white/5 border border-white/8 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/5 transition-all font-mono flex items-center gap-1 shrink-0"
              >
                <CornerDownLeft className="w-3 h-3 shrink-0" />
                {cmd}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
