import { ParentComponent, createContext, useContext } from 'solid-js'
import { PlaygroundContextValue } from '../types'

export const PlaygroundContext = createContext<PlaygroundContextValue>(
  {} as any,
)

export const usePlayground = () => {
  const context = useContext(PlaygroundContext)

  if (!context) {
    throw new Error(`"PlaygroundProvider" must be present in DOM tree`)
  }

  return context
}

interface PlaygroundProviderProps {
  value: PlaygroundContextValue
  children: JSX.Element
}

export const PlaygroundProvider: ParentComponent<
  PlaygroundProviderProps
> = props => (
  <PlaygroundContext.Provider value={props.value}>
    {props.children}
  </PlaygroundContext.Provider>
)
