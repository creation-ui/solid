import { Component, mergeProps, splitProps } from 'solid-js'
import { createStore } from 'solid-js/store'
import { PlaygroundContext } from './context/context'
import { PlaygroundCode } from './playground.code'
import { PlaygroundComponent } from './playground.component'
import { PlaygroundControls } from './playground.controls'
import { PlaygroundView } from './playground.view'
import { PlaygroundControllerProps, PlaygroundState } from './types'
import { prepareInitialState } from './utils/prepare-initial-state'

export const PlaygroundController: Component<PlaygroundControllerProps> = p => {
  const [{ controls }] = splitProps(mergeProps({ componentProps: {} }, p), [
    'controls',
  ])

  const [state, setState] = createStore<PlaygroundState>(
    prepareInitialState(controls),
  )

  return (
    <PlaygroundContext.Provider
      value={[{ ...p, state }, { handleChange: setState }]}
    >
      <PlaygroundView>
        <PlaygroundComponent />
        <PlaygroundControls />
        <PlaygroundCode visible={!!p.showCode} />
      </PlaygroundView>
    </PlaygroundContext.Provider>
  )
}
