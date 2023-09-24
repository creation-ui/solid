import { ReactNode } from 'react'
import { useTheme } from '../../theme'
import { PopoverContext } from './context'
import { PopoverOptions } from './types'
import { usePopover } from './use-popover'

export function Popover(_props: {
  children: ReactNode
} & PopoverOptions) {
    const [props, restOptions] = splitProps(mergeProps({ modal: false }, _props), ["children", "modal", "className"]);const { size: defaultSize } = useTheme()
  const { size = defaultSize } = restOptions

  const popover = usePopover({ props.modal, ...restOptions })

  return (
    <PopoverContext.Provider value={{ ...popover, size }}>
      <div class={props.className}>{props.children}</div>
    </PopoverContext.Provider>
  )
}
