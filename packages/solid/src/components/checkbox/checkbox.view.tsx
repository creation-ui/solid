import { JSX, createEffect } from 'solid-js'
import { useInputBase } from '../input-base/input-base.context'
import { CheckboxProps } from './checkbox.types'
import { checkboxClasses } from './classes'

export const CheckboxView = (p: CheckboxProps) => {
  let ref: HTMLInputElement | undefined
  const { componentId, error, readOnly, disabled } = useInputBase()
  const checkboxClassNames = checkboxClasses({
    size: p.size,
    class: p.className,
    error: !!error,
    readOnly,
  })

  createEffect(() => {
    if (p.indeterminate) {
      ref.indeterminate = true
    }
  })

  const _onChange: JSX.ChangeEventHandler<HTMLInputElement, Event> = e => {
    if (readOnly || disabled) {
      e.preventDefault()
      return
    }

    p.onChange?.(e)
  }

  return (
    <input
      ref={ref}
      {...p}
      onChange={_onChange}
      disabled={disabled}
      readOnly={readOnly}
      id={componentId}
      type='checkbox'
      class={checkboxClassNames}
    />
  )
}
