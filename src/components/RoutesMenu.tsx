import { Route } from '@src/routes'
import { For } from 'solid-js'
import { A } from 'solid-start'

interface RouteProps {
  routes: Route[]
  parentPath?: string
}

export const RoutesMenu = ({ routes, parentPath = '' }: RouteProps) => (
  <ul>
    <For each={routes}>
      {({ title, path, children }) => (
        <li>
          <A href={parentPath + path}>{title}</A>
          {children && <RoutesMenu routes={children} parentPath={path} />}
        </li>
      )}
    </For>
  </ul>
)
