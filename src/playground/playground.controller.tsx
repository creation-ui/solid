import { Component, mergeProps } from 'solid-js'
import { createStore } from 'solid-js/store'
import { PlaygroundContext } from './context/context'
import { PlaygroundCode } from './playground.code'
import { PlaygroundComponent } from './playground.component'
import { PlaygroundControls } from './playground.controls'
import { PlaygroundView } from './playground.view'
import {
  PlaygroundControl,
  PlaygroundControllerProps,
  PlaygroundState,
} from './types'

const prepareInitialState = (controls: PlaygroundControl[]) =>
  controls?.reduce(
    (acc: any, { type, name, defaultValue, values, controls: c }) => {
      if (c) {
        acc[name] = prepareInitialState(c)
        return acc
      }

      const [first] = values ?? []
      const fallback =
        type === 'boolean'
          ? false
          : type === 'string'
          ? ''
          : type === 'array'
          ? first.value
          : null

      return { ...acc, [name]: defaultValue ?? fallback }
    },
    {},
  )

export const PlaygroundController: Component<
  PlaygroundControllerProps
> = props => {
  const [state, setState] = createStore<PlaygroundState>(
    prepareInitialState(props.controls),
  )

  return (
    <PlaygroundContext.Provider
      value={[mergeProps({ ...props, state }), { handleChange: setState }]}
    >
      <PlaygroundView>
        <PlaygroundComponent />
        <PlaygroundControls />
        <PlaygroundCode visible={Boolean(props.showCode)} />
      </PlaygroundView>
    </PlaygroundContext.Provider>
  )
}
