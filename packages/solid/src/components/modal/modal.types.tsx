import type { ClassName } from '@creation-ui/core'
import type React from 'react'

export type ModalProps = {
  onClose?: (value?: boolean) => void
  onOverlayClick?: () => void
  open?: boolean
  className?: string
  children?: JSX.Element
}

export interface ModalTitleProps {
  children: JSX.Element
  className?: ClassName
  as?: React.ElementType
}
