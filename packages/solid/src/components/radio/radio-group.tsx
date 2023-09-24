import { splitProps } from 'solid-js'
import { useTheme } from '../../theme'
import { InputBase } from '../input-base'
import { RadioGroupComponentView } from './radio-group.view'
import type { RadioGroupProps } from './types'

const RadioGroupComponent = (p: RadioGroupProps) => {
  const { size: defaultSize } = useTheme()
  const [{ children, size = defaultSize, ...rest }] = splitProps(p, [
    'children',
    'size',
  ])
  return (
    <InputBase {...rest} size={size}>
      <RadioGroupComponentView>{children}</RadioGroupComponentView>
    </InputBase>
  )
}

export default RadioGroupComponent
