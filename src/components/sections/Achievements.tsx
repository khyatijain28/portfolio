import { motion } from "framer-motion";
import { Award, Trophy, GraduationCap, Medal } from "lucide-react";

const items = [
  { Icon: Trophy, title: "TCS NQT", detail: "75.94 Percentile" },
  { Icon: Award, title: "Wipro Project Certificate", detail: "Project Engineer Internship" },
  { Icon: GraduationCap, title: "HP LIFE Certifications", detail: "Professional development" },
  { Icon: Medal, title: "NCFE National Merit", detail: "National-level recognition" },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-[oklch(0.85_0.18_200)]">
            05 — Achievements
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Recognition & <span className="text-gradient">certifications</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition-all hover:border-[oklch(0.65_0.28_300_/_0.4)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[oklch(0.65_0.28_300_/_0.0)] to-[oklch(0.85_0.18_200_/_0.0)] transition-all group-hover:from-[oklch(0.65_0.28_300_/_0.1)] group-hover:to-[oklch(0.85_0.18_200_/_0.05)]" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.65_0.28_300_/_0.2)] to-[oklch(0.85_0.18_200_/_0.1)]">
                  <it.Icon className="h-5 w-5 text-[oklch(0.85_0.18_200)]" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{it.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{it.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
