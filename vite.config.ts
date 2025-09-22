import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Módulo nativo de Node.js para resolver rutas

// Plugins de optimización
import { visualizer } from "rollup-plugin-visualizer";
import { compression } from "vite-plugin-compression2";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  // Configuración base
  plugins: [
    react(),
    svgr(), // Permite importar SVGs como componentes de React

    // Plugins de compresión para producción (.gz y .br)
    compression({
      algorithms: ["brotliCompress"],
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),
    compression({
      algorithms: ["gzip"],
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),

    // Visualizador del bundle (activar con `npm run build:stats`)
    // Filtra plugins falsy para evitar errores de tipo
  ].filter(Boolean).concat(
    process.env.STATS
      ? [
          visualizer({
            open: true,
            filename: "stats.html",
            gzipSize: true,
            brotliSize: true,
          }),
        ]
      : []
  ),

  // Alias para rutas más limpias en tus importaciones (opcional pero recomendado)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Opciones de compilación para producción
  build: {
    sourcemap: false, // Desactivado para máximo rendimiento y ofuscación
    rollupOptions: {
      output: {
        // Estrategia de división de código optimizada
        manualChunks: (id) => {
          // Agrupa todas las dependencias pesadas en un chunk 'vendor'
          if (id.includes("node_modules")) {
            // Puedes ser más granular si quieres separar frameworks grandes
            if (id.includes("react") || id.includes("react-dom")) {
              return "framework";
            }
            return "vendor";
          }
        },
        // Nombres de archivos con hash para cache-busting
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },
    chunkSizeWarningLimit: 1000, // Aumenta el límite de advertencia para chunks más grandes
  },
});
