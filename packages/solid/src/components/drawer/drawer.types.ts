import type { ElementPosition } from '@creation-ui/core'

export interface DrawerProps {
  children?: JSX.Element
  position?: ElementPosition
  open?: boolean
  onClose?: () => void
  onOverlayClick?: () => void
}
