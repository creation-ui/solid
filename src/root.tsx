// @refresh reload
import { Show, Suspense } from 'solid-js'
import {
  useLocation,
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from 'solid-start'
import './root.css'
import { Theme } from '@creation-ui/solid/theme'
import { RoutesMenu } from '@components/RoutesMenu'
import { routes } from './routes'

export default function Root() {
  const location = useLocation()
  const isIndex = location.pathname == '/'

  return (
    <Html lang='en'>
      <Head>
        <Title>Creation UI | Solid.js</Title>
        <Meta charset='utf-8' />
        <Meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Theme>
              <div class='w-screen h-screen relative overflow-y-auto'>
                <nav class='fixed w-full  backdrop-blur-sm bg-white/10 z-10 top-0 left-0 flex justify-between items-center py-3 px-5 border-b border-info-200 font-light text-sm'>
                  <div>Creation UI</div>
                  <div class='flex items-center gap-3'>
                    <div class={'hover:text-info-500'}>
                      <A href='/docs'>Documentation</A>
                    </div>
                    <input
                      placeholder='Search documentation...'
                      class='border rounded-md p-1 bg-info-300 min-w-fit placeholder:text-info-100'
                    />
                    <div>GitHub</div>
                  </div>
                </nav>

                <main class='grid grid-cols-3 gap-10 mt-20 prose min-w-full'>
                  <Show when={!isIndex}>
                    <RoutesMenu routes={routes} />
                  </Show>
                  <div class='mx-auto max-w-6xl'>
                    <Routes>
                      <FileRoutes />
                    </Routes>
                  </div>
                  <Show when={!isIndex}>
                    <div>On this page</div>
                  </Show>
                </main>
              </div>
            </Theme>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  )
}
