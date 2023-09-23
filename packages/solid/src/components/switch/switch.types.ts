import type { BaseComponentProps } from '@creation-ui/core'
import { JSX } from 'solid-js/jsx-runtime'

export type SwitchProps = BaseComponentProps & {
  checked?: boolean
  loading?: boolean
  defaultChecked?: boolean
  onChange?: (value: boolean) => void
} & Omit<JSX.HTMLAttributes<HTMLInputElement>, 'size'>
