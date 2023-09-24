import { Component, splitProps } from 'solid-js'
import { createStore } from 'solid-js/store'
import { PlaygroundContext } from './context/context'
import { PlaygroundCode } from './playground.code'
import { PlaygroundComponent } from './playground.component'
import { PlaygroundControls } from './playground.controls'
import { PlaygroundView } from './playground.view'
import { PlaygroundControllerProps, PlaygroundState } from './types'
import { prepareInitialState } from './utils/prepare-initial-state'

export const PlaygroundController: Component<
  PlaygroundControllerProps
> = props => {
  const [{ controls }] = splitProps(props, ['controls'])

  const [state, setState] = createStore<PlaygroundState>(
    prepareInitialState(controls),
  )

  return (
    <PlaygroundContext.Provider
      value={[{ ...props, state }, { handleChange: setState }]}
    >
      <PlaygroundView>
        <PlaygroundComponent />
        <PlaygroundControls />
        <PlaygroundCode visible={Boolean(props.showCode)} />
      </PlaygroundView>
    </PlaygroundContext.Provider>
  )
}
