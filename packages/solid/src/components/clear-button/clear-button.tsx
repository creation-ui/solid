import { ElementSize } from '@creation-ui/core'
import { twMerge } from 'tailwind-merge'
import type { IconProps } from '../icon'
import { Icon } from '../icon'
import { cva } from 'class-variance-authority'
import { sharedSizeSquareCVA } from '@creation-ui/core'
import { Component } from 'solid-js'

const classes = cva(
  [
    'hover:fill-error-500',
    'dark:hover:fill-error-500',
    'cursor-pointer',
    'select-none',
    'z-0',
    'h-4',
    'w-4',
  ],
  {
    variants: {
      size: sharedSizeSquareCVA,
    },
  }
)

export interface ClearButtonProps extends Omit<IconProps, 'icon' | 'size'> {
  size?: ElementSize
  ref?: HTMLElement
}

const ClearButton: Component<ClearButtonProps> = p => {
  return (
    <Icon
      icon='close'
      onClick={p.onClick}
      class={twMerge(classes({ size: p.size }), p.className)}
      aria-hidden='true'
      {...p}
    />
  )
}

export default ClearButton
