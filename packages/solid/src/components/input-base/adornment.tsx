import { HTMLInputType, inputIcon } from '@creation-ui/core'
import { Component, splitProps } from 'solid-js'
import { JSX } from 'solid-js/jsx-runtime'

interface AdornmentProps {
  adornment?: JSX.Element
  position?: 'left' | 'right'
  type?: HTMLInputType
}

export const Adornment: Component<AdornmentProps> = props => {
  const [{ position, type, adornment }] = splitProps(props, [
    'position',
    'type',
    'adornment',
  ])
  return adornment ? (
    <div
      class={inputIcon({
        position,
        // @ts-expect-error
        type,
      })}
    >
      {adornment}
    </div>
  ) : null
}
