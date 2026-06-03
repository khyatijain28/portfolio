import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Code2, Database, Zap, Network, Users, GitBranch } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toString());
  useEffect(() => {
    if (inView) {
      const c = animate(mv, to, { duration: 2, ease: "easeOut" });
      return c.stop;
    }
  }, [inView, to]);
  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const cards = [
  { Icon: Code2, title: "Backend Engineering", desc: "Architecting scalable services in .NET, C#, and ASP.NET MVC." },
  { Icon: Database, title: "SQL Optimization", desc: "Tuning queries, stored procedures, and indexes for sub-second response." },
  { Icon: Zap, title: "Performance", desc: "Driving measurable improvements in throughput and latency." },
  { Icon: Network, title: "API Integration", desc: "Designing and consuming clean RESTful interfaces." },
  { Icon: Users, title: "Agile Collaboration", desc: "Shipping iteratively with cross-functional Scrum teams." },
  { Icon: GitBranch, title: "Enterprise Systems", desc: "Building production-grade compliance and workflow platforms." },
];

const stats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 20, suffix: "%", label: "Performance Boost" },
  { value: 25, suffix: "%", label: "Defect Reduction" },
  { value: 500, suffix: "+", label: "Vendors Managed" },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-[oklch(0.85_0.18_200)]">
            01 — About
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Engineering software that <span className="text-gradient">scales with the business</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Software Engineer with 3+ years of experience building enterprise
            .NET applications, optimizing SQL workloads, and shipping
            performance-critical dashboards used across pharmaceutical
            operations.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:border-[oklch(0.65_0.28_300_/_0.4)]"
            >
              <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[oklch(0.65_0.28_300_/_0.15)] blur-3xl transition-opacity opacity-0 group-hover:opacity-100" />
              <c.Icon className="h-6 w-6 text-[oklch(0.85_0.18_200)]" />
              <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 rounded-3xl glass-strong p-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-gradient sm:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
