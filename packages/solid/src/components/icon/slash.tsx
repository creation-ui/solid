import type { SVGElementProps } from './icon.type'

export const Slash = (p: SVGElementProps) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...p}>
      <title>{p.title}</title>
      <path d='M7 21L14.9 3H17L9.1 21H7Z' />
    </svg>
  )
}
