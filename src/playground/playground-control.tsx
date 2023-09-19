import {
  //
  Input,
  // Switch,
  // ToggleGroup,
} from '@creation-ui/solid'

import clsx from 'clsx'
import get from 'lodash.get'
import { classes } from './classes'
import { ColorsSelector } from './components/colors-selector'
import { DEFAULT_CONTROLS } from './constants'
import { usePlayground } from './context/context'
import { PlaygroundControl } from './types'
import { Component, For } from 'solid-js'
import { capitalize } from '@creation-ui/core'

interface PlaygroundControlProps {
  property: PlaygroundControl
  parentKey?: string
}

export const PlaygroundControlComponent: Component<PlaygroundControlProps> = ({
  property,
  parentKey,
}) => {
  const { state, handleChange } = usePlayground()
  const { name: n, type, values, component: controls, helperText } = property

  const name = parentKey ? `${parentKey}.${n}` : n

  const label = property.label ?? capitalize(name)

  const controlType = controls ?? DEFAULT_CONTROLS[type]

  const handleInputChange = (e: any) => {
    handleChange(name, e.target.value)
  }
  const handlePlainChange = (value: any) => {
    handleChange(name, value)
  }
  const onClear = () => handleChange(name, '')

  const value = get(state, name)

  const arrayValue = values?.find(v => v.value === value)

  switch (controlType) {
    case 'input:number':
      return (
        <Input
          value={value as number}
          onChange={handleInputChange}
          label={label}
          type={'number'}
          helperText={helperText}
        />
      )
    case 'colors':
      return (
        <ColorsSelector
          label={label}
          value={arrayValue}
          options={(values ?? []) as any}
          onClick={handlePlainChange}
          helperText={helperText}
        />
      )
    // case 'switch':
    //   return (
    //     <Switch
    //       label={label}
    //       checked={value as boolean}
    //       onChange={handlePlainChange}
    //       helperText={helperText}
    //     />
    //   )
    // case 'toggle-group':
    //   return 'ToggleGroup component not ported yet'
    //   return (
    //     <ToggleGroup
    //       label={label}
    //       options={(values ?? []) as any}
    //       value={value as any}
    //       onChange={handlePlainChange}
    //       helperText={helperText}
    //     />
    //   )
    case 'nested':
      return (
        <div class={clsx(classes.controls, '!pl-0', '!pt-0', '!border-none')}>
          <div class='font-semibold'>{label}</div>
          <For each={property.controls}>
            {childProperty => (
              <PlaygroundControlComponent
                property={childProperty}
                data-key={childProperty.name}
                parentKey={name}
              />
            )}
          </For>
        </div>
      )
    case 'input:text':
    // default:
    return (
      <Input
      onChange={handleInputChange}
      label={label}
      type={'text'}
      value={value as string}
      onClear={onClear}
      clearable={!!value}
      helperText={helperText}
      />
      )
    default:
      return `Control type ${controlType} not supported yet`
  }
}
