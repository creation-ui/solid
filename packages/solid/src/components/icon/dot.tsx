import type { SVGElementProps } from './icon.type'

export const Dot = (p: SVGElementProps) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...p}>
      <title>{p.title ?? 'dot'}</title>
      <path d='M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z' />
    </svg>
  )
}
