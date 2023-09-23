import { createContext, useContext } from 'solid-js'
import { PlaygroundContextValue } from '../types'

export const PlaygroundContext = createContext<PlaygroundContextValue>()

export const usePlayground = () => {
  const context = useContext(PlaygroundContext)

  if (!context) {
    throw new Error(`"PlaygroundProvider" must be present in DOM tree`)
  }

  return context
}
