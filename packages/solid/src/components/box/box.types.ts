import type { ClassName } from '@creation-ui/core'
import { JSX } from 'solid-js'

export interface BoxProps {
  children?: JSX.Element
  className?: ClassName
  border?: boolean
}
