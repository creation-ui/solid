import { cloneDeep, set } from 'lodash-es'
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
import { Component } from 'solid-js'
import { createStore } from 'solid-js/store'

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

  const handleChange = (name: string, value: any) => {
    setState(state => {
      const newState = set(cloneDeep(state), name, value)
      return newState
    })
  }

  return (
    <PlaygroundContext.Provider value={{ ...props, state, handleChange }}>
      <PlaygroundView>
        <PlaygroundComponent />
        <PlaygroundControls />
        <PlaygroundCode visible={Boolean(props.showCode)} />
      </PlaygroundView>
    </PlaygroundContext.Provider>
  )
}
