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

const InputBase: ParentComponent<InputProps> = props => {
  const { size: defaultSize, variant: defaultVariant = 'outlined' } = useTheme()
  const [
    {
      size = defaultSize,
      variant = defaultVariant,
      type = 'text',
      layout = 'column',
    },
  ] = splitProps(props, ['size', 'type', 'variant', 'layout'])

  const componentId = useId(props.id)

  const disabled = props.disabled
  const readOnly = props.readOnly || props.loading
  const disableInteractions = disabled || readOnly || props.loading

  const outerContainerClasses = twMerge(
    inputContainer({ disabled, error: props.error, layout }),
    text({ size }),
    props.cx?.container?.outer
  )

  const isUnstyled = UNSTYLED_TYPES.includes(type)
  const hasError = Boolean(props.error)
  const hasStartAdornment = Boolean(props.startAdornment)
  const hasEndAdornment = Boolean(props.endAdornment)
  const finalVariant = isUnstyled ? 'unstyled' : variant

  const inputClasses = twMerge(
    inputClassesCVA({
      size,
      variant: finalVariant,
      startAdornment: hasStartAdornment,
      endAdornment: hasEndAdornment,
      clearable: props.clearable,
      error: hasError,
      interactionsDisabled: props.interactionsDisabled,
      className: props.cx?.input,
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
        error: props.error,
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
              className: props.cx?.label,
            })}
            children={props.label}
            aria-label={props.label?.toString()}
          />
          <InputBaseContainerInner class={props.cx?.container?.inner}>
            <Adornment
              position='left'
              type={type}
              adornment={props.startAdornment}
            />
            {props.children}
            {props.loading ? (
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
                    {props.clearable && !disableInteractions && (
                      <ClearButton onClick={props.onClear} />
                    )}
                    {props.endAdornment}
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
            {props.error || props.helperText}
          </Description>
        </div>
      </InteractiveContainer>
    </InputBaseProvider>
  )
}

export default InputBase
