import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: [
      'dc56-2-135-79-7.ngrok-free.app',
      'localhost',
      '127.0.0.1'
    ]
  }
})
