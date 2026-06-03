import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed left-1/2 top-4 z-50 w-[min(1100px,92vw)] -translate-x-1/2 rounded-2xl transition-all ${
        scrolled ? "glass-strong shadow-neon" : "glass"
      }`}
    >
      <div className="flex items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-[oklch(0.65_0.28_300)] to-[oklch(0.7_0.22_250)] text-primary-foreground font-bold">
            K
          </span>
          <span className="text-foreground">khyati<span className="text-gradient">.dev</span></span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="./Khyati_Jain_Resume.pdf"
          download
          className="hidden rounded-lg border border-[oklch(0.85_0.18_200_/_0.4)] bg-[oklch(0.85_0.18_200_/_0.08)] px-4 py-1.5 text-sm text-[oklch(0.85_0.18_200)] transition-all hover:shadow-glow-cyan md:inline-block"
        >
          Resume
        </a>
      </div>
    </motion.header>
  );
}
