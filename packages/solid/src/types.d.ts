import '@creation-ui/core'
import { JSX } from 'solid-js'

declare module '@creation-ui/core' {
  type JSXNode = JSX.Element
  type HTMLInputType = JSX.InputHTMLAttributes<HTMLInputElement>['type']
}
