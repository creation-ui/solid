import { JSX } from 'solid-js'

export interface IconProps extends JSX.HTMLAttributes<SVGSVGElement> {
  id?: string
  path: string
  ref?: SVGSVGElement
  description?: string | null
  size?: number | string | null
  horizontal?: boolean
  vertical?: boolean
  rotate?: number
  spin?: boolean | number
  inStack?: boolean
  style?: JSX.CSSProperties
}
