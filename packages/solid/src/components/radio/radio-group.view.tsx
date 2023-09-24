import { useInputBase } from '../input-base/input-base.context'
import type { RadioGroupProps } from './types'

export const RadioGroupComponentView = (props: Pick<RadioGroupProps, 'children'>) => {
  const { disabled, readOnly, classes } = useInputBase()

  return (
    <div
      aria-disabled={disabled}
      aria-readonly={readOnly}
      class={classes.container}
    >
      <div class={'flex flex-col gap-2'}>{props.children}</div>
    </div>
  )
}
