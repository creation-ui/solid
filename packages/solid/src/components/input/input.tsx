import { Component, splitProps } from 'solid-js'
import { InputBase } from '../input-base'
import { InputView } from './input.view'
import type { InputProps } from './types'

const Input: Component<InputProps> = props => {
  const [{ ref }, rest] = splitProps(props, ['ref'])

  return (
    <InputBase {...rest}>
      <InputView {...rest} ref={ref} />
    </InputBase>
  )
}

export default Input
