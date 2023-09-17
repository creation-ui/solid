export interface Route {
  path: string
  title: string
  hide?: boolean
  children?: Route[]
}

export const routes: Route[] = [
  {
    path: '/docs',
    title: 'Introduction',
  },
  {
    path: '/docs/components',
    title: 'Components',
    children: [
      {
        path: '/button',
        title: 'Button',
      },
      {
        path: '/input',
        title: 'Input',
      },
    ],
  },
]
