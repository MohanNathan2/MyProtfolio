import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: "assets", // Specify your assets directory
    // rollupOptions: {
    //   external: ['emailjs-com'], // Add any other external modules as needed
    // },
  },
});
