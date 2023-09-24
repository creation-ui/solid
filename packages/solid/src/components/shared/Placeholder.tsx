import { JSXNode } from '@creation-ui/core'
import clsx from 'clsx'
import { Component } from 'solid-js'

interface PlaceholderProps {
  children: JSXNode
}

const classes = clsx(['text-info-400', 'cursor-default'])

export const Placeholder: Component<PlaceholderProps> = props => (
  <span class={classes}>{props.children}</span>
)
