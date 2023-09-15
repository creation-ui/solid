import type { ElementStatus, ElementVariant } from '@creation-ui/core'

export interface CalloutProps {
  content: JSX.Element
  title?: JSX.Element
  icon?: JSX.Element
  status?: ElementStatus
  variant?: ElementVariant
  onClose?: () => void
  className?: string
}
