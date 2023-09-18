import {
  InputBaseProps,
  errorClasses,
  inputClassesCVA,
  inputContainer,
  label,
  text,
} from '@creation-ui/core'
import { ParentComponent, splitProps } from 'solid-js'
import { twMerge } from 'tailwind-merge'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import { InteractiveContainer } from '../interactive-container'
import { Loader } from '../loader'
import { Description } from '../typography'
import { InputBaseProvider } from './input-base.context'

interface InputProps extends InputBaseProps {
  ref?: any
}

const UI_PROPS_KEYS: readonly (keyof InputProps)[] = ['type', 'size', 'layout']

const InputBaseInline: ParentComponent<InputProps> = props => {
  const { size: defaultSize } = useTheme()
  const [{ size = defaultSize, type = 'text', layout = 'row' }] = splitProps(
    props,
    UI_PROPS_KEYS
  )
  const componentId = useId(props.id)

  const disabled = props.disabled
  const readOnly = props.readOnly || props.loading

  const outerContainerClasses = twMerge(
    inputContainer({ disabled, error: props.error, layout }),
    text({ size }),
    props.cx?.container?.inner
  )

  const inputClasses = twMerge(
    inputClassesCVA({
      size,
      variant: props.variant,
      // @ts-ignore
      className: cx?.input,
      error: props.error,
    })
  )

  return (
    <InteractiveContainer disabled={disabled}>
      <InputBaseProvider
        value={{
          componentId,
          classes: {
            input: inputClasses,
            container: outerContainerClasses,
          },
          disabled,
          readOnly,
          error: props.error,
          type,
        }}
      >
        <div class={props.cx?.container?.outer}>
          <div class={outerContainerClasses}>
            {props.children}
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
            {props.loading && <Loader size={size === 'lg' ? 'md' : 'sm'} />}
          </div>
          <Description
            size={size}
            error={props.error}
            class={props.error ? errorClasses.text : ''}
          >
            {props.error || props.helperText}
          </Description>
        </div>
      </InputBaseProvider>
    </InteractiveContainer>
  )
}

export default InputBaseInline
