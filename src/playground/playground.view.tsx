import { Theme } from '@creation-ui/solid'
import clsx from 'clsx'
import { JSXElement, ParentComponent } from 'solid-js'
import { classes } from './classes'

interface PlaygroundViewProps {
  children?: JSXElement
}

export const PlaygroundView: ParentComponent<PlaygroundViewProps> = props => (
  <Theme theme={{ size: 'sm' }}>
    <div class={clsx(classes.container, 'z-0')}>{props.children}</div>
  </Theme>
)
