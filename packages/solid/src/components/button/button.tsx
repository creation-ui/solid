import { text } from '@creation-ui/core'
import { ParentComponent, splitProps } from 'solid-js'
import { twMerge } from 'tailwind-merge'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import { InteractiveContainer } from '../interactive-container'
import { Loader } from '../loader'
import { LoadingOverlay } from '../loading-overlay'
import type { ButtonProps } from './button.types'
import { button } from './classes'

const Button: ParentComponent<ButtonProps> = props => {
  const [
    //
    ui,
    rest
  ] = splitProps(props, [
    'children',
    'loading',
    'iconLeft',
    'iconRight',
    'id',
    'class',
    'circle',
    'size',
    'variant',
    'status',
    'uppercase',
    'disabled',
  ])
  const theme = useTheme()

  const {
    children,
    loading,
    iconLeft,
    iconRight,
    id,
    class: className,
    circle,
    size = theme.size,
    variant = 'contained',
    status = 'primary',
    uppercase,
  } = ui

  const componentId = useId(id)

  const isLoaderWhite = variant === 'contained'
  const disabled = loading || ui.disabled

  const classes = twMerge(
    button({
      size,
      status,
      circle,
      variant,
      disabled,
      uppercase,
      className: [theme.roundness, className, text({ size })],
    })
  )

  const centerSpinner: boolean = Boolean(loading && circle)
  const leftSpinner: boolean = Boolean(loading && !circle)

  return (
    <InteractiveContainer disabled={disabled} class={className}>
      <button id={componentId} disabled={disabled} {...rest} class={classes}>
        {leftSpinner && (
          <Loader size={'sm'} active={leftSpinner} white={isLoaderWhite} />
        )}
        <LoadingOverlay active={centerSpinner} white={isLoaderWhite} />
        {iconLeft}
        <span>{children}</span>
        {iconRight}
      </button>
    </InteractiveContainer>
  )
}

export default Button
