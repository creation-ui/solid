import clsx from 'clsx'
import { For } from 'solid-js'
import { classes } from './classes'
import { usePlayground } from './context/context'
import { PlaygroundControlComponent } from './playground-control'

export const PlaygroundControls = () => {
  const [{ controls }] = usePlayground()

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
