import clsx from 'clsx'
import type { FC } from 'react'

interface PlaceholderProps {
  children: JSX.Element
}

const classes = clsx(['text-info-400', 'cursor-default'])

export const Placeholder: FC<PlaceholderProps> = ({ children }) => (
  <span class={classes}>{children}</span>
)
