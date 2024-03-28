import { defineConfig } from 'vite'
import { ViteToml } from 'vite-plugin-toml'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), ViteToml()],
    resolve: {
      alias: {
        '~': "/src",
      },
    }
})
