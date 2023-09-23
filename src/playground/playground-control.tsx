import {
  Input,
  Switch,
  ToggleGroup,
} from '@creation-ui/solid'
import { capitalize } from '@creation-ui/core'
import clsx from 'clsx'
import get from 'lodash.get'
import { Component, For } from 'solid-js'
import { classes } from './classes'
import { ColorsSelector } from './components/colors-selector'
import { DEFAULT_CONTROLS } from './constants'
import { usePlayground } from './context/context'
import { PlaygroundControl } from './types'

interface PlaygroundControlProps {
  property: PlaygroundControl
  parentKey?: string
}

export const PlaygroundControlComponent: Component<
  PlaygroundControlProps
> = props => {
  const [{ state }, { handleChange }] = usePlayground()

  const name = props.parentKey
    ? `${props.parentKey}.${props.property.name}`
    : props.property.name

  const label = props.property.label ?? capitalize(name)

  const controlType =
    props.property.component ?? DEFAULT_CONTROLS[props.property.type]

  const handleInputChange = (e: any) => {
    handleChange(name, e.target.value)
  }
  const handlePlainChange = (value: any) => {
    handleChange(name, value)
  }
  const onClear = () => handleChange(name, '')

  const value = get(state, name)
  const arrayValue = props.property.values?.find(v => v.value === value)

  switch (controlType) {
    case 'input:number':
      return (
        <Input
          value={value as number}
          onChange={handleInputChange}
          label={label}
          type={'number'}
          helperText={props.property.helperText}
        />
      )
    case 'colors':
      return (
        <ColorsSelector
          label={label}
          value={arrayValue}
          options={(props.property.values ?? []) as any}
          onClick={handlePlainChange}
          helperText={props.property.helperText}
        />
      )
    case 'switch':
      console.log('switch', value)
      return (
        <Switch
          label={label}
          checked={value as boolean}
          onChange={handlePlainChange}
          helperText={props.property.helperText}
        />
      )
    case 'toggle-group':
      return (
        <ToggleGroup
          label={label}
          options={(props.property.values ?? []) as any}
          value={value as any}
          onChange={handlePlainChange}
          helperText={props.property.helperText}
        />
      )
    case 'nested':
      return (
        <div class={clsx(classes.controls, '!pl-0', '!pt-0', '!border-none')}>
          <div class='font-semibold'>{label}</div>
          <For each={props.property.controls}>
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
          helperText={props.property.helperText}
        />
      )
    default:
      return `Control type ${controlType} not supported yet`
  }
}
