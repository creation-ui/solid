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

const InputBaseInline: ParentComponent<InputProps> = props => {
  const { size: defaultSize } = useTheme()
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
      variant,
      layout = 'row',
      // onClear,
    },
  ] = splitProps(props, UI_PROPS_KEYS)
  const componentId = useId(id)

  const disabled = props.disabled
  const readOnly = props.readOnly || loading

  const outerContainerClasses = twMerge(
    inputContainer({ disabled, error: !!error, layout }),
    text({ size }),
    cx?.container?.inner
  )

  const inputClasses = twMerge(
    inputClassesCVA({
      size,
      variant,
      // @ts-ignore
      className: cx?.input,
      error: !!error,
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
          error: !!error,
          type,
        }}
      >
        <div class={cx?.container?.outer}>
          <div class={outerContainerClasses}>
            {children}
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
            {loading && <Loader size={size === 'lg' ? 'md' : 'sm'} />}
          </div>
          <Description
            size={size}
            error={!!error}
            class={error ? errorClasses.text : ''}
          >
            {error || helperText}
          </Description>
        </div>
      </InputBaseProvider>
    </InteractiveContainer>
  )
}

export default InputBaseInline
