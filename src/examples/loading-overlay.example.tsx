// import { Container } from '@components/container'
import { Button, LoadingOverlay, LoadingOverlayProps } from '@creation-ui/solid'
import { Component, createSignal } from 'solid-js'

// import {
//   classNameProps,
//   loaderWhiteProp,
//   onClickCallback,
//   openProp,
//   sizeProp,
// } from './shared-props'

export const LoadingOverlayExample: Component<LoadingOverlayProps> = props => {
  const [loading, setLoading] = createSignal(true)

  const handleClick = () => setLoading(v => !v)

  return (
    <div class='flex flex-col gap-3'>
      <div
        class='
      relative
      overflow-clip
      bg-blue-200 h-36 w-36 rounded-lg'
      >
        <LoadingOverlay active={loading()} {...props} />
      </div>

      <Button onClick={handleClick}>
        {loading() ? 'Stop' : 'Start'} loading
      </Button>
    </div>
  )
}

// export const properties: DocumentedProperty[] = [
//   classNameProps,
//   openProp,
//   sizeProp,
//   loaderWhiteProp,
//   onClickCallback,
// ]
