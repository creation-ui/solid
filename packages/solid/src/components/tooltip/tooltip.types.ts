import type { ClassName, ElementPosition } from '@creation-ui/core'

export interface TooltipProps {
  className?: ClassName
  children?: JSX.Element
  content?: JSX.Element
  position?: ElementPosition
}
