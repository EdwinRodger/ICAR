import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: './',
    plugins: [react()],
    server: {
        watch: {
            usePolling: true
        }
    },
    build: {
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    const ext = assetInfo.name ? assetInfo.name.split('.').pop() : ''
                    const imageExts = ['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'avif', 'ico']
                    if (ext && imageExts.includes(ext.toLowerCase())) {
                        return 'images/[name]-[hash][extname]'
                    }
                    return 'assets/[name]-[hash][extname]'
                }
            }
        }
    }
})
