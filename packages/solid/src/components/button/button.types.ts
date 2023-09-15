import type {
  ElementSize,
  ElementStatus,
  ElementVariant,
} from '@creation-ui/core'
import { JSX } from 'solid-js'

export interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  /**
   * Is button loading?
   */
  loading?: boolean
  /**
   * Is button a circle?
   */
  circle?: boolean
  /**
   * What variant should button be ?
   */
  variant?: ElementVariant
  /**
   * How large should the button be?
   */
  size?: ElementSize
  /**
   * Icon to be displayed on the left side of the button
   */
  iconLeft?: JSX.Element
  /**
   * Icon to be displayed on the right side of the button
   */
  iconRight?: JSX.Element
  /**
   * Status of the button
   */
  status?: ElementStatus
  /**
   * Is button text to be uppercase
   */
  uppercase?: boolean
  /**
   * Is button disabled?
   */
  disabled?: boolean
}

export type ButtonGroupProps = {
  options: ButtonGroupOption[]
  className?: string
  size?: ElementSize
  status?: ElementStatus
}

type ButtonGroupOption = {
  label: string
  disabled?: boolean
  className?: string
  onClick: () => void
}
