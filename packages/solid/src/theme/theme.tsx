import type { ThemeProps, ThemeProviderProps } from '@creation-ui/core'
import { defaultTheme } from '@creation-ui/core'
import { createContext, useContext } from 'solid-js'

const ThemeCtx = createContext<Partial<ThemeProps>>()

export const Theme: (props: ThemeProviderProps) => JSX.Element = props => {
  const mergedTheme = { ...defaultTheme, ...props.theme }
  return (
    <ThemeCtx.Provider value={mergedTheme}>{props.children}</ThemeCtx.Provider>
  )
}

export const useTheme = (): Partial<ThemeProps> => {
  const context = useContext(ThemeCtx)
  if (!context) {
    throw new Error(`useTheme must be used within a ThemeProvider`)
  }
  return context
}
