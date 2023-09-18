import { JSXNode } from '@creation-ui/core'

export interface OverlayProps {
  active?: boolean
  onClick?: () => void
  class?: string
  cursorWait?: boolean
  children?: JSXNode
}
