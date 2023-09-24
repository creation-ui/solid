import { Show, For } from "solid-js";
import type { Column, Table } from '@tanstack/react-table'
import React from 'react'
import DebouncedInput from './debounced-input'

export default function Filter(props: {
  column: Column<any, unknown>
  table: Table<any>
}) {
  const firstValue = props.table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(props.column.id)

  const columnFilterValue = props.column.getFilterValue()

  const sortedUniqueValues = React.useMemo(
    () =>
      typeof firstValue === 'number'
        ? []
        : Array.from(props.column.getFacetedUniqueValues().keys()).sort(),
    [props.column.getFacetedUniqueValues()],
  )

  return <Show when={typeof firstValue === 'number'} fallback={<>
      <datalist id={props.column.id + 'list'}>
        <For each={sortedUniqueValues.slice(0, 5000)}>{(value: any) => (
          <option value={value}  />
        )}</For>
      </datalist>
      <DebouncedInput
        type='text'
        value={(columnFilterValue ?? '') as string}
        onChange={value => props.column.setFilterValue(value)}
        placeholder={`Search... (${props.column.getFacetedUniqueValues().size})`}
        class='w-36 border shadow rounded'
        list={props.column.id + 'list'}
      />
      <div class='h-1' />
    </>}><div>
      <div class='flex space-x-2'>
        <DebouncedInput
          type='number'
          min={Number(props.column.getFacetedMinMaxValues()?.[0] ?? '')}
          max={Number(props.column.getFacetedMinMaxValues()?.[1] ?? '')}
          value={(columnFilterValue as [number, number])?.[0] ?? ''}
          onChange={value =>
            props.column.setFilterValue((old: [number, number]) => [value, old?.[1]])
          }
          placeholder={`Min ${
            props.column.getFacetedMinMaxValues()?.[0]
              ? `(${props.column.getFacetedMinMaxValues()?.[0]})`
              : ''
          }`}
          class='w-24 border shadow rounded'
        />
        <DebouncedInput
          type='number'
          min={Number(props.column.getFacetedMinMaxValues()?.[0] ?? '')}
          max={Number(props.column.getFacetedMinMaxValues()?.[1] ?? '')}
          value={(columnFilterValue as [number, number])?.[1] ?? ''}
          onChange={value =>
            props.column.setFilterValue((old: [number, number]) => [old?.[0], value])
          }
          placeholder={`Max ${
            props.column.getFacetedMinMaxValues()?.[1]
              ? `(${props.column.getFacetedMinMaxValues()?.[1]})`
              : ''
          }`}
          class='w-24 border shadow rounded'
        />
      </div>
      <div class='h-1' />
    </div></Show>
}
