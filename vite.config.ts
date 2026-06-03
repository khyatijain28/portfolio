import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// IMPORTANT: Change "portfolio" below to match your exact GitHub repository name
// e.g. if your repo URL is github.com/khyatijain28/my-portfolio → base: "/my-portfolio/"
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  base: "/portfolio/",
});
