import { ParentComponent, splitProps } from 'solid-js'
import { JSX } from 'solid-js/jsx-runtime'
import { twMerge } from 'tailwind-merge'

interface InputBaseContainerInnerProps {
  children?: JSX.Element
  class?: string
  ref?: any
}

const UI_PROPS_KEYS: readonly (keyof InputBaseContainerInnerProps)[] = [
  'children',
  'class',
]

export const InputBaseContainerInner: ParentComponent<
  InputBaseContainerInnerProps
> = props => {
  const [{ children, class: className }] = splitProps(props, UI_PROPS_KEYS)
  return (
    <div class={twMerge('relative', 'max-h-min', className)}>{children}</div>
  )
}
