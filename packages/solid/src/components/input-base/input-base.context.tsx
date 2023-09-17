import { HTMLInputType } from '@creation-ui/core'
import { JSX, ParentComponent, createContext, useContext } from 'solid-js'

interface InputBaseContextValue {
  componentId: string
  type: HTMLInputType
  classes: {
    input: string
    container: string
  }
  disabled?: boolean
  readOnly?: boolean
  error?: boolean
}

export const InputBaseContext = createContext<InputBaseContextValue>()

export const useInputBase = () => {
  const context = useContext(InputBaseContext)
  if (!context) {
    throw new Error('useInputBase must be used within an InputBaseProvider')
  }
  return context
}

interface InputBaseProviderProps {
  value: InputBaseContextValue
  children: JSX.Element
}

export const InputBaseProvider: ParentComponent<
  InputBaseProviderProps
> = props => {
  return (
    <InputBaseContext.Provider value={props.value}>
      {props.children}
    </InputBaseContext.Provider>
  )
}
