import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputBaseContainerInnerProps {
  children?: JSX.Element
  className?: string
}

const classes = ['relative', 'max-h-min']

export const InputBaseContainerInner = forwardRef<
  HTMLDivElement,
  InputBaseContainerInnerProps
>(({ children, className }, ref) => (
  <div class={twMerge(classes, className)} ref={ref}>
    {children}
  </div>
))
