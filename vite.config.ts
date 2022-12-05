import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import electron from "vite-electron-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist/renderer",
  },
  plugins: [
    vue(),
    // https://github.com/electron-vite/vite-electron-plugin#api-define
    electron({
      // The Electron source codes directory
      include: ["src/electron"],
      outDir: "dist",
      transformOptions: {
        minify: true,
      },
    }),
  ],
});
