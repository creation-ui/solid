import { HTMLInputType, JSXNode, inputIcon } from '@creation-ui/core'
import { Component, splitProps } from 'solid-js'

type AdornmentPosition = 'left' | 'right'

interface AdornmentProps {
  adornment?: JSXNode
  type?: HTMLInputType
  position?: AdornmentPosition
}

export const Adornment: Component<AdornmentProps> = props => {
  const [{ adornment }, rest] = splitProps(props, ['adornment'])
  // @ts-expect-error
  return adornment ? <div class={inputIcon(rest)}>{adornment}</div> : null
}
