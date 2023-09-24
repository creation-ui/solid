import { capitalize } from '@creation-ui/core'
import { Input, ToggleGroup, Switch } from '@creation-ui/solid'
import clsx from 'clsx'
import get from 'lodash.get'
import {
  Component,
  For,
  Match,
  Switch as SolidSwitch,
  splitProps,
} from 'solid-js'
import { classes } from './classes'
import { ColorsSelector } from './components/colors-selector'
import { DEFAULT_CONTROLS } from './constants'
import { usePlayground } from './context/context'
import { PlaygroundControl } from './types'

interface PlaygroundControlProps {
  property: PlaygroundControl
  parentKey?: string
}

const getName = (name: string, parentKey?: string) =>
  parentKey ? `${parentKey}.${name}` : name

const getLabel = (name: string, label?: string) => label ?? capitalize(name)

const getCtrlType = (property: PlaygroundControl) =>
  property.component ?? DEFAULT_CONTROLS[property.type]

export const PlaygroundControlComponent: Component<
  PlaygroundControlProps
> = props => {
  const [{ state }, { handleChange }] = usePlayground()
  const [{ property, parentKey }] = splitProps(props, ['property', 'parentKey'])

  const name = getName(property.name, parentKey)
  const label = getLabel(property.name, property.label)
  const controlType = getCtrlType(property)

  const onClear = () => handleChange(name, '')
  const handleInputChange = (e: any) => handleChange(name, e.target.value)
  const handlePlainChange = (value: any) => handleChange(name, value)

  const value = get(state, name)
  const arrayValue = props.property.values?.find(v => v.value === value)

  const isType = (type: string) => type === controlType

  return (
    <SolidSwitch fallback={`Control type ${controlType} not supported yet`}>
      <Match when={isType('input:number')}>
        <Input
          value={value as number}
          onChange={handleInputChange}
          label={label}
          type={'number'}
          helperText={props.property.helperText}
          onClear={onClear}
        />
      </Match>
      <Match when={isType('colors')}>
        <ColorsSelector
          label={label}
          value={arrayValue}
          options={(props.property.values ?? []) as any}
          onClick={handlePlainChange}
          helperText={props.property.helperText}
        />
      </Match>
      <Match when={isType('switch')}>
        <Switch
          label={label}
          checked={value as boolean}
          onChange={handlePlainChange}
          helperText={props.property.helperText}
        />
      </Match>
      <Match when={isType('toggle-group')}>
        <ToggleGroup
          label={label}
          options={(props.property.values ?? []) as any}
          value={value as any}
          onChange={handlePlainChange}
          helperText={props.property.helperText}
        />
      </Match>
      <Match when={isType('nested')}>
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
      </Match>
      <Match when={isType('input:text')}>
        <Input
          onChange={handleInputChange}
          label={label}
          type={'text'}
          value={value as string}
          onClear={onClear}
          clearable={!!value}
          helperText={props.property.helperText}
        />
      </Match>
    </SolidSwitch>
  )
}
