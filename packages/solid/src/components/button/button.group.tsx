import { twMerge } from 'tailwind-merge'
import { getElementPosition } from '@creation-ui/core'
import { toggleGroup } from '../toggle-group/classes'
import type { ButtonGroupProps } from './button.types'
import { Component, mergeProps, Index } from 'solid-js'

const ButtonGroup: Component<ButtonGroupProps> = _props => {
  const props: ButtonGroupProps = mergeProps({ size: 'md' }, _props)
  return (
    <div
      class={twMerge(
        toggleGroup.container({
          disabled: props.disabled,
        }),
        props.className
      )}
    >
      <Index each={props.options}>
        {(button, index) => (
          <button
            data-key={index}
            class={twMerge(
              toggleGroup.button({
                size: props.size,
                disabled: button().disabled,
                element: getElementPosition(props.options, index),
              }),
              button().className
            )}
            onClick={button().onClick}
          >
            {button().label}
          </button>
        )}
      </Index>
    </div>
  )
}

export default ButtonGroup
