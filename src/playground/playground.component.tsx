import clsx from 'clsx'
import { Component } from 'solid-js'
import { classes } from './classes'
import { usePlayground } from './context/context'

export const PlaygroundComponent: Component = () => {
  const [{ component, componentProps, state }] = usePlayground()

  return (
    <div class={clsx(classes.view)}>
      {component({ ...componentProps, ...state })}
    </div>
  )
}
