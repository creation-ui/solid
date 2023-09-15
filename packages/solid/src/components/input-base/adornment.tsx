import { FC } from 'react'
import { HTMLInputType } from '@creation-ui/core'
import { inputIcon } from '@creation-ui/core'

interface AdornmentProps {
  adornment?: JSX.Element
  position?: 'left' | 'right'
  type?: HTMLInputType
}

export const Adornment: FC<AdornmentProps> = ({ position, type, adornment }) =>
  adornment ? (
    <div
      // @ts-expect-error
      class={inputIcon({ position, type })}
    >
      {adornment}
    </div>
  ) : null
