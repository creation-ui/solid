import {
  ElementSize,
  inputContainer,
  label as labelClasses,
  text,
} from '@creation-ui/core'
import { useId } from '@creation-ui/solid/hooks'
import { useTheme } from '@creation-ui/solid/theme'
import clsx from 'clsx'
import { JSXElement, splitProps } from 'solid-js'

interface ToolContainerProps {
  children?: JSXElement
  label: JSXElement
  size?: ElementSize
}

export const ToolContainer = (props: ToolContainerProps) => {
  const componentId = useId()

  const { size: defaultSize } = useTheme()
  const [{ size = defaultSize }] = splitProps(props, ['size'])

  const containerClasses = clsx(inputContainer(), text({ size }))
  return (
    <div class={containerClasses}>
      <label
        for={componentId}
        class={labelClasses({ size })}
        aria-label={props.label?.toString()}
      >
        {props.label}
      </label>
      <div class='flex gap-3 w-fit'>{props.children}</div>
    </div>
  )
}
