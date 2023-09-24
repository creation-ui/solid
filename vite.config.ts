import solid from 'solid-start/vite'
import { loadEnv, defineConfig, splitVendorChunkPlugin } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'
import devtools from 'solid-devtools/vite'

export default defineConfig(({ mode }): any => {
  // eslint-disable-next-line
  const env = loadEnv(mode, process.cwd(), '')
  const sourcemap = env.BUILD_SOURCEMAP ?? false
  const minify = env.BUILD_MINIFY ?? 'esbuild'

  return {
    plugins: [
      devtools({ autoname: true }),
      solid(),
      svgr(),
      tsconfigPaths(),
      splitVendorChunkPlugin(),
    ],
    server: {
      open: true,
      port: 3000,
      watch: { usePolling: true },
    },
    build: { sourcemap, minify },
  }
})
