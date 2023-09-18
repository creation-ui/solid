import { twMerge } from 'tailwind-merge'
import { useTheme } from '../../theme'
import { overlay } from './classes'
import type { OverlayProps } from './overlay.types'
import { ParentComponent, splitProps } from 'solid-js'

export const Overlay: ParentComponent<OverlayProps> = props => {
  const { zIndex } = useTheme()
  const [{ class: className }] = splitProps(props, ['class'])

  return (
    <div
      class={twMerge(
        overlay({ visible: props.active, cursorWait: props.cursorWait }),
        zIndex?.overlays,
        className
      )}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  )
}
