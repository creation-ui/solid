import { Cell as CellType, flexRender } from '@tanstack/react-table'
import { cellClasses } from './classes'

export interface CellProps {
  cell: CellType<any, unknown>
}

export const Cell = (props: CellProps) => {
  const column = props.cell.column
  const width = column.getSize()

  const { className, align, ...meta } =
    (props.cell.column.columnDef.meta as any) ?? {}
  return (
    <td
      class={cellClasses({ className, align })}
      
      style={{ width }}
      {...meta}
    >
      {flexRender(props.cell.column.columnDef.cell, props.cell.getContext())}
    </td>
  )
}
