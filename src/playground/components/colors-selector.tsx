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
import { twMerge } from 'tailwind-merge'

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

export const ColorsSelector: Component<ColorsSelectorProps> = p => {
  const componentId = useId()

  const { size: defaultSize } = useTheme()
  const [{ size = defaultSize }] = splitProps(p, ['size'])

  return (
    <div
      class={twMerge(
        inputContainer({
          disabled: p.disabled || p.readOnly,
          error: !!p.error,
        }),
        text({ size }),
      )}
    >
      <label
        for={componentId}
        class={labelClasses({ size, required: p.required })}
        aria-label={p.label?.toString()}
      >
        {p.label}
      </label>
      <div class='flex gap-3 w-fit' aria-required={p.required}>
        <For each={p.options}>
          {o => (
            <div
              data-key={o.value}
              title={capitalize(o.label)}
              onClick={p.onClick.bind(null, o.value)}
              class={clsx([
                'transform',
                'transition-transform',
                o.class,
                'h-6',
                'w-6',
                'rounded',
                'cursor-pointer',
                p.value === o.value && 'scale-125',
              ])}
            />
          )}
        </For>
      </div>
    </div>
  )
}
