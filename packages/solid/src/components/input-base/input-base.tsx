import {
  InputBaseProps,
  errorClasses,
  inputClassesCVA,
  inputContainer,
  inputIcon,
  label,
  text,
} from '@creation-ui/core'
import clsx from 'clsx'
import { ParentComponent, splitProps } from 'solid-js'
import { twMerge } from 'tailwind-merge'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import { ClearButton } from '../clear-button'
import { InteractiveContainer } from '../interactive-container'
import { Loader } from '../loader'
import { Description } from '../typography'
import { Adornment } from './adornment'
import { UNSTYLED_TYPES } from './constants'
import { InputBaseContainerInner } from './input-base.container-inner'
import { InputBaseProvider } from './input-base.context'

interface InputProps extends InputBaseProps {
  ref?: any
}

const UI_PROPS_KEYS: readonly (keyof InputProps)[] = [
  'loading',
  'helperText',
  'error',
  'size',
  'type',
  'cx',
  'id',
  'children',
  'startAdornment',
  'endAdornment',
  'clearable',
  'variant',
  'layout',
  'interactionsDisabled',
  'onClear',
  'ref',
]

const InputBase: ParentComponent<InputProps> = props => {
  const { size: defaultSize, variant: defaultVariant = 'outlined' } = useTheme()
  const [
    {
      loading,
      helperText,
      error,
      size = defaultSize,
      type = 'text',
      cx,
      id,
      children,
      startAdornment,
      endAdornment,
      clearable,
      variant = defaultVariant,
      layout = 'column',
      interactionsDisabled,
      ref,
      onClear,
    },
  ] = splitProps(props, UI_PROPS_KEYS)

  const componentId = useId(id)

  const disabled = props.disabled
  const readOnly = props.readOnly || loading
  const disableInteractions = disabled || readOnly || loading

  const outerContainerClasses = twMerge(
    inputContainer({ disabled, error: !!error, layout }),
    text({ size }),
    cx?.container?.outer
  )

  const isUnstyled = UNSTYLED_TYPES.includes(type)
  const hasError = Boolean(error)
  const hasStartAdornment = Boolean(startAdornment)
  const hasEndAdornment = Boolean(endAdornment)
  const finalVariant = isUnstyled ? 'unstyled' : variant

  const inputClasses = twMerge(
    inputClassesCVA({
      size,
      variant: finalVariant,
      startAdornment: hasStartAdornment,
      endAdornment: hasEndAdornment,
      clearable,
      error: hasError,
      interactionsDisabled,
      className: cx?.input,
      // @ts-expect-error
      type,
    })
  )
  return (
    <InputBaseProvider
      value={{
        componentId,
        classes: { input: inputClasses, container: outerContainerClasses },
        disabled,
        readOnly,
        error: !!error,
        type,
      }}
    >
      <InteractiveContainer disabled={disabled}>
        <div class={outerContainerClasses}>
          <label
            for={componentId}
            class={label({
              size,
              required: props.required,
              className: cx?.label,
            })}
            children={props.label}
            aria-label={props.label?.toString()}
          />
          <InputBaseContainerInner class={cx?.container?.inner} ref={ref}>
            <Adornment position='left' type={type} adornment={startAdornment} />
            {children}
            {loading ? (
              <Loader
                class={inputIcon({
                  position: 'right',
                  // @ts-expect-error
                  type,
                })}
                size={size === 'lg' ? 'md' : 'sm'}
              />
            ) : (
              <Adornment
                position='right'
                type={type}
                adornment={
                  <>
                    {clearable && !disableInteractions && (
                      <ClearButton onClick={onClear} />
                    )}
                    {endAdornment}
                  </>
                }
              />
            )}
          </InputBaseContainerInner>
          <Description
            size={size}
            error={hasError}
            class={clsx(hasError && errorClasses.text)}
          >
            {error || helperText}
          </Description>
        </div>
      </InteractiveContainer>
    </InputBaseProvider>
  )
}

export default InputBase
