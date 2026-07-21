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
      'Available commands:',
      '  about      → Learn about me',
      '  skills     → View my tech stack',
      '  projects   → Browse featured projects',
      '  contact    → Get my contact info',
      '  status     → Check current availability',
      '  api        → Simulate a REST API call',
      '  clear      → Clear the terminal',
    ],
  }),
  about: () => ({
    type: 'success',
    content: [
      '╭─────────────────────────────────────╮',
      '│  Alex Chen · Full-Stack Engineer    │',
      '│  5+ years · Remote-first            │',
      '│  Specialized in scalable systems,   │',
      '│  cloud infrastructure & DX tools.   │',
      '╰─────────────────────────────────────╯',
    ],
  }),
  skills: () => ({
    type: 'info',
    content: [
      '→ Languages    TypeScript · Go · Python · SQL',
      '→ Frontend     React · Next.js · Tailwind · Framer',
      '→ Backend      Node.js · GraphQL · REST · gRPC',
      '→ Databases    PostgreSQL · Redis · ClickHouse · MongoDB',
      '→ DevOps       Docker · Kubernetes · AWS · CI/CD',
    ],
  }),
  projects: () => ({
    type: 'output',
    content: [
      '[1] CloudEdge Platform   → Multi-tenant SaaS, 50k+ DAU',
      '[2] Analytics Engine     → 2M events/min stream pipeline',
      '[3] DevForge CLI         → 2,400+ GitHub stars OSS tool',
      '',
      'See full case studies at #projects ↑',
    ],
  }),
  contact: () => ({
    type: 'success',
    content: [
      '📧  alex@example.com',
      '🐙  github.com/alexchen',
      '💼  linkedin.com/in/alexchen',
      '🐦  @alexchendev',
    ],
  }),
  status: () => ({
    type: 'success',
    content: [
      '🟢 STATUS: Available for new opportunities',
      '',
      '   Preferred: Full-time or contract',
      '   Start date: Immediate',
      '   Location: Remote / Hybrid',
    ],
  }),
  api: () => ({
    type: 'output',
    content: [
      'GET /api/v1/engineer/alex → 200 OK (12ms)',
      '',
      '{',
      '  "name": "Alex Chen",',
      '  "role": "Full-Stack Engineer",',
      '  "available": true,',
      '  "yoe": 5,',
      '  "stack": ["TypeScript","React","Node.js","Go"],',
      '  "uptime": "99.9%"',
      '}',
    ],
  }),
};

const WELCOME_LINES: OutputLine[] = [
  { type: 'info', content: ['Welcome to alex.dev terminal v1.0.0'] },
  { type: 'output', content: ['Type `help` to see available commands.'] },
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

    // Add input line
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
    await new Promise((r) => setTimeout(r, 280 + Math.random() * 200));
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
            Interactive
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Terminal <span className="gradient-text">Playground</span>
          </h2>
          <p className="text-slate-400">
            Explore my profile via an interactive CLI. Try commands like{' '}
            <code className="text-cyan-400 bg-cyan-400/10 px-1.5 py-0.5 rounded text-sm">help</code>,{' '}
            <code className="text-cyan-400 bg-cyan-400/10 px-1.5 py-0.5 rounded text-sm">api</code>, or{' '}
            <code className="text-cyan-400 bg-cyan-400/10 px-1.5 py-0.5 rounded text-sm">about</code>.
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
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Terminal className="w-3.5 h-3.5" />
              <span>alex.dev — bash</span>
            </div>
            <button
              id="terminal-clear-btn"
              onClick={() => setHistory(WELCOME_LINES)}
              className="text-slate-600 hover:text-slate-400 transition-colors"
              aria-label="Clear terminal"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Terminal body */}
          <div
            className="bg-[#0d1117] h-80 overflow-y-auto p-4 terminal-font text-sm cursor-text"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((line, i) => {
              const lines = Array.isArray(line.content) ? line.content : [line.content];
              return (
                <div key={i} className={`${lineStyle[line.type]} mb-0.5`}>
                  {lines.map((l, j) => (
                    <div key={j} className="leading-6">
                      {l || '\u00A0'}
                    </div>
                  ))}
                </div>
              );
            })}

            {/* Typing indicator */}
            {isTyping && (
              <div className="text-cyan-400 flex items-center gap-1">
                <span>processing</span>
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
                className="flex-1 bg-transparent outline-none caret-cyan-400 text-slate-200 placeholder-slate-600 terminal-font"
                placeholder="type a command..."
                autoComplete="off"
                spellCheck={false}
              />
            </div>
            <div ref={bottomRef} />
          </div>

          {/* Quick command chips */}
          <div className="px-4 py-3 bg-[#0d1117] border-t border-white/5 flex flex-wrap gap-2">
            {['help', 'about', 'skills', 'projects', 'api', 'status'].map((cmd) => (
              <button
                key={cmd}
                id={`terminal-cmd-${cmd}`}
                onClick={() => {
                  runCommand(cmd);
                  inputRef.current?.focus();
                }}
                className="px-3 py-1 text-xs rounded-lg bg-white/5 border border-white/8 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/5 transition-all font-mono flex items-center gap-1"
              >
                <CornerDownLeft className="w-3 h-3" />
                {cmd}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
