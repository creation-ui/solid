import { getElementPosition } from '@creation-ui/core'
import { Component, Index, splitProps } from 'solid-js'
import { useInputBase } from '../input-base/input-base.context'
import { toggleGroup } from './classes'
import type { ToggleGroupOption, ToggleGroupProps } from './toggle-group.types'

export const ToggleGroupView: Component<ToggleGroupProps> = props => {
  const { componentId, readOnly, disabled } = useInputBase()
  const [{ size, class: cs, options }, rest] = splitProps(props, [
    'size',
    'class',
    'options',
  ])

  const isChecked = (value: any) => props.value === value

  return (
    <div
      {...rest}
      id={componentId}
      class={toggleGroup.container({
        disabled: disabled || readOnly,
        class: cs,
      })}
    >
      <Index each={options}>
        {({ label, value, disabled }: ToggleGroupOption, idx) => (
          <div
            data-key={value}
            title={value}
            class={toggleGroup.button({
              checked: isChecked(value),
              disabled,
              size,
              element: getElementPosition(options, idx),
            })}
          >
            <span>{label}</span>
          </div>
        )}
      </Index>
    </div>
  )
}
