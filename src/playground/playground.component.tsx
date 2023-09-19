import clsx from 'clsx'
import { JSXElement, ParentComponent } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { classes } from './classes'
import { usePlayground } from './context/context'

interface PlaygroundComponentProps {
  children?: JSXElement
}

export const PlaygroundComponent: ParentComponent<
  PlaygroundComponentProps
> = () => {
  const { componentProps, component, state } = usePlayground()
  return (
    <div class={clsx(classes.view)}>
      <Dynamic component={component} {...componentProps} {...state} />
    </div>
  )
}
