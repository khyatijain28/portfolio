import { motion } from "framer-motion";

const groups = [
  {
    title: "Frontend",
    color: "oklch(0.85 0.18 200)",
    items: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Backend",
    color: "oklch(0.65 0.28 300)",
    items: ["C#", ".NET Framework", "ASP.NET MVC", "REST APIs"],
  },
  {
    title: "Database",
    color: "oklch(0.7 0.22 250)",
    items: ["SQL Server", "PostgreSQL", "Stored Procedures", "Query Optimization"],
  },
  {
    title: "Tools & Workflow",
    color: "oklch(0.78 0.18 180)",
    items: ["Git", "GitHub", "Visual Studio", "Agile / Scrum"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-[oklch(0.85_0.18_200)]">
            02 — Tech Stack
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            The tools I use to <span className="text-gradient">ship production systems</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              className="relative overflow-hidden rounded-2xl glass p-7"
            >
              <div
                className="pointer-events-none absolute -top-24 -left-24 h-48 w-48 rounded-full blur-3xl opacity-30"
                style={{ background: g.color }}
              />
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-xl font-semibold">{g.title}</h3>
                <span
                  className="font-mono text-[10px] uppercase tracking-widest"
                  style={{ color: g.color }}
                >
                  {String(gi + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.1 + i * 0.05 }}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="cursor-default rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-foreground/90 transition-colors hover:border-[oklch(0.65_0.28_300_/_0.5)] hover:text-foreground"
                    style={{ boxShadow: `0 0 0 0 ${g.color}` }}
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
