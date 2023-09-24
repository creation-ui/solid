import clsx from 'clsx'
import { JSXElement, ParentComponent, mergeProps } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { classes } from './classes'
import { usePlayground } from './context/context'

interface PlaygroundComponentProps {
  children?: JSXElement
}

export const PlaygroundComponent: ParentComponent<
  PlaygroundComponentProps
> = () => {
  const [{ component, componentProps, state }] = usePlayground()
  const merged = mergeProps({ component }, componentProps, state)

  return (
    <div class={clsx(classes.view)}>
      <Dynamic {...merged} />
    </div>
  )
}
