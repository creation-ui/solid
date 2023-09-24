import type { SVGElementProps } from './icon.type'

export const ChevronRight = (p: SVGElementProps) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...p}>
      <title>{p.title}</title>
      <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
    </svg>
  )
}
