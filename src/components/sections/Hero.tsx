import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HeroScene } from "../HeroScene";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";

const titles = [
  ".NET Developer",
  "Full Stack Engineer",
  "SQL Engineer",
  "Backend Architect",
];

function Typer() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = titles[i];
    const speed = del ? 40 : 90;
    const t = setTimeout(() => {
      if (!del) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDel(true), 1400);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDel(false);
          setI((i + 1) % titles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);
  return <span className="cursor-blink text-gradient">{text}</span>;
}

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-transparent via-background/20 to-background" />
      <div className="absolute inset-0 z-10 grid-bg opacity-30" />

      <div className="relative z-20 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-[oklch(0.85_0.18_200)] shadow-glow-cyan" />
          Available for opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl"
        >
          Khyati <span className="text-gradient">Jain</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-4 font-mono text-lg text-muted-foreground sm:text-xl"
        >
          <Typer />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-8 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg"
        >
          I build scalable enterprise applications, modern dashboards, and
          performance-driven systems with <span className="text-foreground">.NET</span>,{" "}
          <span className="text-foreground">C#</span>, and{" "}
          <span className="text-foreground">SQL Server</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[oklch(0.65_0.28_300)] to-[oklch(0.7_0.22_250)] px-6 py-3 text-sm font-medium text-primary-foreground shadow-neon transition-transform hover:scale-[1.03]"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="./Khyati_Jain_Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl glass-strong px-6 py-3 text-sm font-medium transition-all hover:border-[oklch(0.85_0.18_200_/_0.5)] hover:shadow-glow-cyan"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="mt-10 flex items-center gap-3"
        >
          {[
            { Icon: Linkedin, href: "https://www.linkedin.com/in/khyati~jain/", label: "LinkedIn" },
            { Icon: Github, href: "https://github.com/khyatijain28", label: "GitHub" },
            { Icon: Mail, href: "mailto:khyatijain2802@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid h-11 w-11 place-items-center rounded-xl glass transition-all hover:-translate-y-0.5 hover:border-[oklch(0.65_0.28_300_/_0.5)] hover:text-[oklch(0.85_0.18_200)]"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}
