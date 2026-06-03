import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-20 w-20"
            >
              <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[oklch(0.85_0.18_200)] border-r-[oklch(0.65_0.28_300)]" />
              <div className="absolute inset-2 animate-pulse rounded-full border border-[oklch(1_0_0_/_0.1)]" />
              <div className="absolute inset-0 flex items-center justify-center font-mono text-sm text-gradient">
                KJ
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground"
            >
              Initializing
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
