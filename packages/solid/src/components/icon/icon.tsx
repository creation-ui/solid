import type { InternalIconType } from '@creation-ui/core'
import { twMerge } from 'tailwind-merge'
import { Check } from './check'
import { ChevronDown } from './chevron-down'
import { ChevronLeft } from './chevron-left'
import { ChevronRight } from './chevron-right'
import { Close } from './close'
import type { IconProps } from './icon.type'
import { Straight } from './straight'
import { PencilOff } from './pencil-off'
import { Dot } from './dot'
import { Slash } from './slash'
import { Home } from './home'

const classes = [
  //
  'fill-info-500',
  'dark:fill-info-100',
  'hover:fill-primary-500',
  'dark:hover:fill-primary-500',
  'h-5',
  'w-auto',
]

const Icon = (props: IconProps) => {
  const map: Record<InternalIconType, any> = {
    chevron_right: ChevronRight,
    chevron_left: ChevronLeft,
    chevron_down: ChevronDown,
    close: Close,
    check: Check,
    straight: Straight,
    readonly: PencilOff,
    dot: Dot,
    slash: Slash,
    home: Home,
  }

  const Component = map[props.icon]
  const c = twMerge(classes, props.className)

  return <Component class={c} {...props} />
}

export default Icon
