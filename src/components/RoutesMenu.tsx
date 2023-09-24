import { Route } from '@src/routes'
import clsx from 'clsx'
import { For, mergeProps } from 'solid-js'
import { A } from 'solid-start'

interface RouteProps {
  routes: Route[]
  parentPath?: string
}

export const RoutesMenu = (_props: RouteProps) =>
  {
  const props = mergeProps({ parentPath: '' }, _props);
  return (<ul class='font-light  text-sm !no-underline'>
    <For each={props.routes}>
      {route => (
        <li class='list-none mb-2'>
          <A
            href={props.parentPath + route.path}
            class={clsx(
              route.completed && 'bg-success-200/50 hover:bg-success-200/75',
              'text-info-500 hover:text-info-800 no-underline py-1 px-3 rounded-md hover:bg-info-200/50 bg-transparent transition-all duration-500 ease-in-out transform',
            )}
          >
            {route.title}
          </A>
          {route.children && (
            <RoutesMenu routes={route.children} parentPath={route.path} />
          )}
        </li>
      )}
    </For>
  </ul>);
}

