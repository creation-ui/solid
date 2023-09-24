import { cva } from 'class-variance-authority'
import { Icon, IconProps } from '../icon'
import { splitProps } from 'solid-js'

interface DropdownChevronProps extends Omit<IconProps, 'icon'> {
  open?: boolean
}

const chevron = cva(
  [
    'text-info-400',
    'ease-in-out',
    'duration-300',
    'hover:text-info-800',
    'cursor-pointer',
  ],
  {
    variants: {
      open: {
        true: ['rotate-180'],
      },
    },
  }
)

const DropdownChevron = (p: DropdownChevronProps) => {
  return (
    <Icon
      icon='chevron_down'
      class={chevron({ open: p.open })}
      aria-hidden='true'
      {...p}
    />
  )
}

export default DropdownChevron
