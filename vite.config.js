import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./ https://mybabb.github.io/MyBABB-Remember/" , 
  plugins: [react()],
})
