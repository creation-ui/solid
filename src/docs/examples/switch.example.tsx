import { LoadingOverlayProps, Switch } from '@creation-ui/solid'
import { Component, createSignal } from 'solid-js'

export const SwitchExample: Component<LoadingOverlayProps> = props => {
  const [checked, setChecked] = createSignal(true)

  return (
    <div>
      <Switch checked={checked()} onChange={setChecked} />
      {checked() ? 'true' : 'false'}
    </div>
  )
}
