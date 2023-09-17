import solid from 'solid-start/vite'
import { loadEnv, defineConfig, splitVendorChunkPlugin } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ mode }): any => {
  const env = loadEnv(mode, process.cwd(), '')
  const sourcemap = env.BUILD_SOURCEMAP ?? false
  const minify = env.BUILD_MINIFY ?? 'esbuild'

  return {
    plugins: [solid(), svgr(), tsconfigPaths(), splitVendorChunkPlugin()],
    server: {
      open: true,
      port: 3000,
      watch: { usePolling: true },
    },
    build: { sourcemap, minify },
  }
})
