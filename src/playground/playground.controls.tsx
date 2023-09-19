import clsx from 'clsx'
import { classes } from './classes'
import { usePlayground } from './context/context'
import { PlaygroundControlComponent } from './playground-control'
import { For } from 'solid-js'

export const PlaygroundControls = () => {
  const { controls } = usePlayground()

  return (
    <div class={clsx(classes.controls)}>
      <For each={controls}>
        {control => (
          <div data-key={control.name}>
            <PlaygroundControlComponent property={control} />
          </div>
        )}
      </For>
    </div>
  )
}
