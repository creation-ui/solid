import { Component, splitProps } from 'solid-js'
import { useTheme } from '../../theme'
import { InputBaseInline } from '../input-base'
import type { SwitchProps } from './switch.types'
import { SwitchView } from './switch.view'

const Switch: Component<SwitchProps> = props => {
  const { size: defaultSize } = useTheme()
  const [{ size = defaultSize }, rest] = splitProps(props, ['size'])

  return (
    <InputBaseInline {...rest} size={size} layout='row'>
      <SwitchView {...rest} size={size} />
    </InputBaseInline>
  )
}

export default Switch
