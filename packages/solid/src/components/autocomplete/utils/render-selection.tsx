import { Show } from 'solid-js'
import { useAutocomplete } from '../context'
import { AutocompleteOptionDefault } from '../types'

export const _renderSelection = (option: AutocompleteOptionDefault) => {
  const { getOptionLabel } = useAutocomplete()
  return (
    <Show when={option}>
      <span>{getOptionLabel?.(option)}</span>
    </Show>
  )
}
