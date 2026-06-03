import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const items = [
  {
    company: "Akums Drugs & Pharmaceuticals Ltd",
    role: "Software Engineer",
    period: "June 2024 — Present",
    highlights: [
      "Improved application performance by 20% through caching and query tuning",
      "Developed scalable .NET applications powering core business workflows",
      "Built optimized SQL queries and stored procedures across mission-critical systems",
      "Reduced defect rates by 25% through robust validation and test coverage",
      "Collaborated with Agile teams across product, QA, and operations",
    ],
  },
  {
    company: "Akums",
    role: "Graduate Apprentice Trainee",
    period: "June 2023 — June 2024",
    highlights: [
      "Developed internal web applications used by enterprise teams",
      "Built responsive UI components in ASP.NET MVC",
      "Assisted with database administration and schema design",
    ],
  },
  {
    company: "Wipro",
    role: "Project Engineer Intern",
    period: "Remote · 2022",
    highlights: [
      "Performed Root Cause Analysis on production defects",
      "Optimized testing strategy and regression coverage",
      "Contributed to Java + SQL based enterprise projects",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-[oklch(0.85_0.18_200)]">
            03 — Experience
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            A timeline of <span className="text-gradient">shipped systems</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[oklch(0.65_0.28_300_/_0.6)] via-[oklch(0.85_0.18_200_/_0.4)] to-transparent md:left-1/2" />
          {items.map((it, i) => (
            <motion.div
              key={it.company + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className={`relative mb-10 md:mb-16 md:grid md:grid-cols-2 md:gap-12 ${
                i % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"
              }`}
            >
              <div className={i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}>
                <div className="ml-12 md:ml-0">
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {it.period}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold">{it.role}</h3>
                  <div className="text-[oklch(0.85_0.18_200)]">{it.company}</div>
                </div>
              </div>

              {/* Dot */}
              <div className="absolute left-4 top-1 -translate-x-1/2 md:left-1/2">
                <div className="grid h-8 w-8 place-items-center rounded-full glass-strong shadow-neon">
                  <Briefcase className="h-3.5 w-3.5 text-[oklch(0.85_0.18_200)]" />
                </div>
              </div>

              <div className={i % 2 === 0 ? "md:pl-8" : "md:pr-8 md:text-right"}>
                <div className="ml-12 mt-4 rounded-2xl glass p-5 md:ml-0 md:mt-0">
                  <ul className={`space-y-2 text-sm text-muted-foreground ${i % 2 !== 0 ? "md:text-right" : ""}`}>
                    {it.highlights.map((h) => (
                      <li key={h} className="flex gap-2 md:items-start">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[oklch(0.85_0.18_200)]" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
