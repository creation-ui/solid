import { useTheme } from '../../theme'
import { ClearButton } from '../clear-button'
import { chipClasses } from './classes'
import type { ChipProps } from './chip.types'
import { Component, splitProps } from 'solid-js'

export const Chip: Component<ChipProps> = props => {
  const { size: defaultSize } = useTheme()

  const [
    {
      label,
      onClick,
      onDelete,
      size = defaultSize,
      startAdornment = null,
      status,
      uppercase,
      variant,
    },
  ] = splitProps(props, [
    'label',
    'onClick',
    'onDelete',
    'size',
    'startAdornment',
    'status',
    'uppercase',
    'variant',
  ])

  return (
    <div
      class={chipClasses({
        size,
        status,
        variant,
        uppercase,
        interactive: !!onClick,
      })}
      onClick={onClick}
    >
      <div class='min-w-[8px]'>{startAdornment}</div>
      <span>{label ?? status}</span>
      <div class='min-w-[8px]'>
        {onDelete && (
          <div class='bg-info-50 dark:bg-info-500/50 p-[1px] m-[2px] rounded-full'>
            <ClearButton onClick={onDelete} />
          </div>
        )}
      </div>
    </div>
  )
}
