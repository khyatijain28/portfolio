import { motion, useMotionValue, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { MouseEvent } from "react";

const projects = [
  {
    title: "Letterhead Issuance & Tracking System",
    tagline: "Enterprise document control with serial range validation.",
    impact: ["60% less manual setup time", "70% reduction in misallocation"],
    features: ["Serial range validation", "Stock control", "Dashboard reporting", "SQL optimization"],
    stack: ["ASP.NET MVC", "C#", "SQL Server", "JavaScript"],
    accent: "from-[oklch(0.65_0.28_300)] to-[oklch(0.7_0.22_250)]",
  },
  {
    title: "Audit Observation & Analytics Engine",
    tagline: "Rich audit workflow with PDF reporting and analytics.",
    impact: ["Centralized audit lifecycle", "Real-time analytics dashboards"],
    features: ["Rich text editor", "PDF generation", "Audit dashboards", "Analytics tracking"],
    stack: ["ASP.NET", "C#", "SQL Server", "iTextSharp"],
    accent: "from-[oklch(0.85_0.18_200)] to-[oklch(0.7_0.22_250)]",
  },
  {
    title: "Vendor Onboarding & Compliance System",
    tagline: "Automating onboarding for 500+ enterprise vendors.",
    impact: ["500+ vendors managed", "End-to-end compliance"],
    features: ["Vendor onboarding automation", "Dynamic PDF generation", "Compliance tracking", "Advanced SQL procedures"],
    stack: ["ASP.NET MVC", "C#", "SQL Server", "Stored Procedures"],
    accent: "from-[oklch(0.78_0.18_180)] to-[oklch(0.65_0.28_300)]",
  },
];

function Card({ p, i }: { p: typeof projects[number]; i: number }) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const tx = useTransform(ry, (v) => v);
  const ty = useTransform(rx, (v) => v);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    rx.set((0.5 - y) * 8);
    ry.set((x - 0.5) * 10);
  };
  const reset = () => { rx.set(0); ry.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX: ty, rotateY: tx, transformPerspective: 1200 }}
      className="group relative overflow-hidden rounded-3xl glass-strong p-7 transition-shadow hover:shadow-neon"
    >
      <div className={`pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-3xl transition-opacity group-hover:opacity-40`} />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />

      <div className="relative">
        <div className="flex items-center justify-between">
          <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${p.accent} text-primary-foreground font-mono text-sm font-bold`}>
            0{i + 1}
          </div>
          <div className="flex gap-2">
            <button aria-label="Live demo" className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:border-[oklch(0.85_0.18_200_/_0.5)] hover:text-[oklch(0.85_0.18_200)]">
              <ExternalLink className="h-4 w-4" />
            </button>
            <button aria-label="GitHub" className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:border-[oklch(0.85_0.18_200_/_0.5)] hover:text-[oklch(0.85_0.18_200)]">
              <Github className="h-4 w-4" />
            </button>
          </div>
        </div>

        <h3 className="mt-6 text-2xl font-semibold leading-tight">{p.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>

        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          {p.features.map((f) => (
            <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-[oklch(0.85_0.18_200)]" />
              {f}
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {p.impact.map((m) => (
            <div key={m} className="rounded-lg border border-[oklch(0.65_0.28_300_/_0.3)] bg-[oklch(0.65_0.28_300_/_0.08)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-[oklch(0.78_0.18_220)]">
              {m}
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/5 pt-5">
          {p.stack.map((s) => (
            <span key={s} className="rounded-md bg-white/5 px-2 py-1 font-mono text-[10px] text-muted-foreground">
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-[oklch(0.85_0.18_200)]">
            04 — Selected Work
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Systems shipped in <span className="text-gradient">production</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Card key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
