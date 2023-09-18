import { ParentComponent } from 'solid-js'
import { JSX } from 'solid-js/jsx-runtime'
import { twMerge } from 'tailwind-merge'

interface InputBaseContainerInnerProps {
  children?: JSX.Element
  class?: string
}

export const InputBaseContainerInner: ParentComponent<
  InputBaseContainerInnerProps
> = props => {
  return (
    <div class={twMerge('relative max-h-min', props.class)}>
      {props.children}
    </div>
  )
}
