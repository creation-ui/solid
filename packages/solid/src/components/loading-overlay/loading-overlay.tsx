import { Loader } from '../loader'
import { Overlay } from '../overlay'
import type { LoadingOverlayProps } from './loading-overlay.types'

export const LoadingOverlay = (props: LoadingOverlayProps) => {
  return (
    <Overlay {...props} cursorWait>
      <Loader {...props} />
    </Overlay>
  )
}
