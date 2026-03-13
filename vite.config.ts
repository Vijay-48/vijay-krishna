import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";
import { generateSitemap } from "./app/sitemap.js";
import { generateRobots } from "./app/robots.js";

// Plugin that writes sitemap.xml and robots.txt into the build output directory
function seoPlugin() {
  let outDir = "dist";
  return {
    name: "seo-files",
    configResolved(config: { build: { outDir: string } }) {
      outDir = config.build.outDir;
    },
    closeBundle() {
      if (!fs.existsSync(outDir)) return;
      fs.writeFileSync(path.join(outDir, "sitemap.xml"), generateSitemap());
      fs.writeFileSync(path.join(outDir, "robots.txt"), generateRobots());
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    seoPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
