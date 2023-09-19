import type { ThemeProps, ThemeProviderProps } from '@creation-ui/core'
import { defaultTheme } from '@creation-ui/core'
import {
  ParentComponent,
  createContext,
  mergeProps,
  useContext,
} from 'solid-js'

const ThemeCtx = createContext<Partial<ThemeProps>>()

export const Theme: ParentComponent<ThemeProviderProps> = props => {
  return (
    <ThemeCtx.Provider value={mergeProps(defaultTheme, props.theme)}>
      {props.children}
    </ThemeCtx.Provider>
  )
}

export const useTheme = (): Partial<ThemeProps> => {
  const context = useContext(ThemeCtx)
  if (!context) {
    throw new Error(`useTheme must be used within a ThemeProvider`)
  }
  return context
}
