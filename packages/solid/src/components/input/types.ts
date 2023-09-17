import type { InputBaseProps } from '@creation-ui/core'
import { JSX } from 'solid-js'

type InputAttributes = JSX.InputHTMLAttributes<HTMLInputElement>

export type InputProps = Omit<InputAttributes, 'size'> &
  Omit<InputBaseProps, 'children'> & {
    ref?: HTMLElement
  }

export type InputViewProps = InputAttributes & {
  ref?: HTMLElement
}
