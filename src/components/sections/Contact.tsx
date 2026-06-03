import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Github, ArrowUpRight, Download } from "lucide-react";

const channels = [
  {
    label: "Email",
    value: "khyatijain2802@gmail.com",
    href: "mailto:khyatijain2802@gmail.com",
    icon: Mail,
    handle: "// drop a line",
  },
  {
    label: "LinkedIn",
    value: "in/khyati~jain/",
    href: "https://www.linkedin.com/in/khyati~jain/",
    icon: Linkedin,
    handle: "// let's connect",
  },
  {
    label: "GitHub",
    value: "@khyati-jain",
    href: "https://github.com/khyati-jain",
    icon: Github,
    handle: "// browse the code",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[oklch(0.65_0.28_300_/_0.18)] blur-[140px]" />
        <div className="absolute right-[15%] top-[20%] h-[280px] w-[280px] rounded-full bg-[oklch(0.85_0.18_200_/_0.18)] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-[oklch(0.85_0.18_200)]">
            06 — Reach out
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Let's <span className="text-gradient">build something</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Open to engineering roles, collaborations, and interesting problems.
            Pick the channel that works for you — I usually reply within a day.
          </p>
        </motion.div>

        {/* status strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-full glass px-6 py-3 font-mono text-xs"
        >
          <span className="flex items-center gap-2 text-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            available for new roles
          </span>
          <span className="text-muted-foreground">response ~24h</span>
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="h-3 w-3 text-[oklch(0.85_0.18_200)]" /> India · remote-friendly
          </span>
        </motion.div>

        {/* channel cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl glass-strong p-7 transition-colors hover:border-[oklch(0.65_0.28_300_/_0.4)]"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[oklch(0.65_0.28_300_/_0.6)] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[oklch(0.65_0.28_300_/_0.15)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[oklch(0.85_0.18_200)] transition-all group-hover:border-[oklch(0.85_0.18_200_/_0.4)] group-hover:bg-[oklch(0.85_0.18_200_/_0.1)]">
                  <c.icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </div>

              <div className="mt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {c.handle}
              </div>
              <div className="mt-1 text-lg font-semibold tracking-tight">{c.label}</div>
              <div className="mt-1 truncate text-sm text-muted-foreground">{c.value}</div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="mailto:khyatijain2802@gmail.com"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[oklch(0.65_0.28_300)] to-[oklch(0.7_0.22_250)] px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-neon transition-transform hover:scale-[1.02]"
          >
            <Mail className="h-4 w-4" />
            Start a conversation
          </a>
          <a
            href="./Khyati_Jain_Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-white/20 hover:bg-white/10"
          >
            <Download className="h-4 w-4" />
            Download resume
          </a>
        </motion.div>

        <footer className="mt-24 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-8 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Khyati Jain. Built with care.</div>
          <div className="font-mono">designed & developed in india</div>
        </footer>
      </div>
    </section>
  );
}
