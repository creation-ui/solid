import { splitProps } from 'solid-js'
import { useTheme } from '../../theme'
import { InputBase } from '../input-base'
import type { ToggleGroupProps } from './toggle-group.types'
import { ToggleGroupView } from './toggle-group.view'

export const ToggleGroup = (props: ToggleGroupProps) => {
  const { size: defaultSize } = useTheme()
  const [{ size = defaultSize }, rest] = splitProps(props, ['size'])

  return (
    <InputBase {...rest} size={size}>
      <ToggleGroupView {...props} size={size} />
    </InputBase>
  )
}
