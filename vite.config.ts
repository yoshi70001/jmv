import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ya no excluimos lucide-react, permitiendo que Vite lo optimice.
  // optimizeDeps: {
  //   exclude: ['lucide-react'],
  // },
});
