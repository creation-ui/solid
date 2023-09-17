import { Component, mergeProps, splitProps } from 'solid-js'
import { useTheme } from '../../theme'
import { InputBase } from '../input-base'
import { InputView } from './input.view'
import type { InputProps } from './types'

const Input: Component<InputProps> = props => {
  const { size: defaultSize } = useTheme()
  const [
    { size = defaultSize, type = 'text', variant = 'outlined', ref },
    rest,
  ] = splitProps(props, ['size', 'type', 'variant', 'ref'])

  return (
    <InputBase {...mergeProps(rest, size, type, variant)}>
      <InputView {...mergeProps(rest, ref)} />
    </InputBase>
  )
}

export default Input
