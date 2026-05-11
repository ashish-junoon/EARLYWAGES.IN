import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  
  plugins: [
    react(),
    tailwindcss(),
  ],

  server: {
    host: '0.0.0.0', // This allows all devices on the network to connect
    port: 3002, // Or any other port you prefer
  },
})
