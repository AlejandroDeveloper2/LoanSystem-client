import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@assets", replacement: "/src/assets" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@routes", replacement: "/src/routes" },
      { find: "@modules", replacement: "/src/modules" },
      { find: "@config", replacement: "/src/config" },
      { find: "@layout", replacement: "/src/layout" },
    ],
  },
});
