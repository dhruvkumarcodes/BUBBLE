import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4001,
    proxy: {
      "/api": {
        target: "https://bubble-backend-a2x9.onrender.com",
        changeOrigin: true,
      },
    },
  },
})
