import '@creation-ui/core'
import { JSX } from 'solid-js'

declare module '@creation-ui/core' {
  type JSXNode = JSX.Element
  type HTMLInputType = JSX.InputHTMLAttributes<HTMLInputElement>['type']
  type IntrinsicElements =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'span'
}
