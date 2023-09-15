import { Switch as HSwitch } from '@headlessui/react'
import { useInputBase } from '../input-base/input-base.context'
import { switchCircle, switchClasses } from './classes'
import type { SwitchProps } from './switch.types'

export const SwitchView = ({
  checked,
  size,
  required,
  ...props
}: SwitchProps) => {
  const { componentId, readOnly, disabled, classes } = useInputBase()

  return (
    <div class={classes.container}>
      <HSwitch
        {...props}
        id={componentId}
        disabled={disabled}
        aria-required={required}
        class={switchClasses({ size, checked, readOnly })}
      >
        <span aria-hidden='true' class={switchCircle({ size, checked })} />
      </HSwitch>
    </div>
  )
}
