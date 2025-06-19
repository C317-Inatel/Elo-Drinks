import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    define: {
    'import.meta.env.VITE_SPACE': JSON.stringify(process.env.VITE_SPACE),
    'import.meta.env.VITE_ENVIRONMENT': JSON.stringify(process.env.VITE_ENVIRONMENT),
    'import.meta.env.VITE_ACESSTOKEN': JSON.stringify(process.env.VITE_ACESSTOKEN),
  },
  base: '/Elo-Drinks/',
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: 'dist',
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
