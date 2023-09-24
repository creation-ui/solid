import { Component } from 'solid-js'
import { useInputBase } from '../input-base/input-base.context'
import { InputViewProps } from './types'

export const InputView: Component<InputViewProps> = props => {
  const { componentId, classes, readOnly, error, type, disabled } =
    useInputBase()

  return (
    <input
      {...props}
      id={componentId}
      class={classes.input}
      type={type}
      disabled={disabled}
      aria-invalid={!!error}
      aria-readonly={!!readOnly}
      readOnly={readOnly}
    />
  )
}
