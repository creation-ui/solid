import type { SVGElementProps } from './icon.type'

export const ChevronLeft = (p: SVGElementProps) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...p}>
      <title>{p.title}</title>
      <path d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z' />
    </svg>
  )
}
