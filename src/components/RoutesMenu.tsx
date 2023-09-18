import { Route } from '@src/routes'
import { For } from 'solid-js'
import { A } from 'solid-start'

interface RouteProps {
  routes: Route[]
  parentPath?: string
}

export const RoutesMenu = ({ routes, parentPath = '' }: RouteProps) => (
  <ul class='font-light  text-sm !no-underline'>
    <For each={routes}>
      {({ title, path, children }) => (
        <li class='list-none mb-2'>
          <A
            href={parentPath + path}
            class='text-info-500 hover:text-info-800 no-underline py-2 px-3 rounded-md hover:bg-info-200/50 bg-transparent transition-all duration-500 ease-in-out transform'
          >
            {title}
          </A>
          {children && <RoutesMenu routes={children} parentPath={path} />}
        </li>
      )}
    </For>
  </ul>
)
