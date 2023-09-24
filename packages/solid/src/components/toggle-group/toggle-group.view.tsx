import { getElementPosition } from '@creation-ui/core'
import { Component, Index, splitProps } from 'solid-js'
import { useInputBase } from '../input-base/input-base.context'
import { toggleGroup } from './classes'
import type { ToggleGroupProps } from './toggle-group.types'

export const ToggleGroupView: Component<ToggleGroupProps> = props => {
  const { componentId, readOnly, disabled } = useInputBase()
  const [{ size, class: cs }, rest] = splitProps(props, ['size', 'class'])

  return (
    <div
      {...rest}
      id={componentId}
      class={toggleGroup.container({
        disabled: disabled || readOnly,
        class: cs,
      })}
    >
      <Index each={props.options}>
        {(option, idx) => (
          <div
            data-key={option().value}
            title={option().value}
            onClick={() => props.onChange(option().value)}
            class={toggleGroup.button({
              checked: option().value === props.value,
              disabled,
              size,
              element: getElementPosition(props.options, idx),
            })}
          >
            <span>{option().label}</span>
          </div>
        )}
      </Index>
    </div>
  )
}
