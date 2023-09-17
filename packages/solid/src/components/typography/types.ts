import {
  ClassName,
  ElementSize,
  IntrinsicElements,
  TypographyConfig,
} from '@creation-ui/core'
import { JSX } from 'solid-js'

export interface TypographyProps {
  as?: IntrinsicElements
  children?: JSX.Element
  config?: Partial<TypographyConfig>
  class?: ClassName
  size?: ElementSize
  error?: JSX.Element
  ref?: any
}
