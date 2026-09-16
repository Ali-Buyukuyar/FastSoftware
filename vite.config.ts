import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages'te "https://<kullanici>.github.io/<repo-adi>/" altında
// yayınlanacaksa base'i "/<repo-adi>/" olarak değiştirin.
// Kendi domain'inizi kullanacaksanız (veya user/org sayfasıysa: <kullanici>.github.io) '/' bırakın.
export default defineConfig({
  base: '/FastSoftware/',
  plugins: [react()],
})
