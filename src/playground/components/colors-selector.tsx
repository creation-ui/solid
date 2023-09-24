import type {
  BaseComponentProps,
  ElementSize,
  ElementStatus,
} from '@creation-ui/core'
import { inputContainer, label as labelClasses, text } from '@creation-ui/core'
import { useId, useTheme } from '@creation-ui/solid'
import clsx from 'clsx'
import { capitalize } from '../../utils/capitalize'
import { Component, For, splitProps } from 'solid-js'

export type ColorDefinition = {
  label: ElementStatus
  value: ElementStatus
  class: string
}

interface ColorsSelectorProps extends BaseComponentProps {
  options: ColorDefinition[]
  onClick: (value: string | boolean | undefined) => void
  label: string
  value?: string
  size?: ElementSize
}

export const ColorsSelector: Component<ColorsSelectorProps> = props => {
  const componentId = useId()

  const { size: defaultSize } = useTheme()
  const [{ size = defaultSize }] = splitProps(props, ['size'])

  const disabled = props.disabled || props.readOnly
  const containerClasses = clsx(
    inputContainer({ disabled, error: !!props.error }),
    text({ size }),
  )
  return (
    <div class={containerClasses}>
      <label
        for={componentId}
        class={labelClasses({ size, required: props.required })}
        aria-label={props.label?.toString()}
      >
        {props.label}
      </label>
      <div class='flex gap-3 w-fit' aria-required={props.required}>
        <For each={props.options}>
          {o => (
            <div
              data-key={o.value}
              title={capitalize(o.label)}
              onClick={props.onClick.bind(null, o.value)}
              class={clsx([
                'transform',
                'transition-transform',
                o.class,
                'h-6',
                'w-6',
                'rounded',
                'cursor-pointer',
                props.value === o.value && 'scale-125',
              ])}
            />
          )}
        </For>
      </div>
    </div>
  )
}
