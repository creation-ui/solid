import { Component, splitProps } from 'solid-js'
import { useInputBase } from '../input-base/input-base.context'
import { switchCircle, switchClasses } from './classes'
import type { SwitchProps } from './switch.types'

export const SwitchView: Component<SwitchProps> = props => {
  const { componentId, readOnly, disabled, classes } = useInputBase()
  const [{ onChange, required, size }] = splitProps(props, [
    'size',
    'required',

    'onChange',
  ])

  const handleClick = () => {
    onChange?.(!props.checked)
  }

  return (
    <div class={classes.container}>
      <div
        onClick={handleClick}
        class={switchClasses({ size, checked: props.checked, readOnly })}
      >
        <input
          type='checkbox'
          id={componentId}
          aria-required={required}
          class={'hidden'}
          disabled={disabled}
          {...props}
        />
        <span
          aria-hidden='true'
          class={switchCircle({ checked: props.checked, size })}
        />
      </div>
    </div>
  )
}
