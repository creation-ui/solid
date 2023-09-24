import { For } from "solid-js";
import { Row as RowProps } from '@tanstack/react-table'
import clsx from 'clsx'
import { rowGridClasses } from '../classes'
import { Cell } from './cell'

interface RowCellProps {
  row: RowProps<any>
}

const Row = (props: RowCellProps) => {
  const cells = props.row.getVisibleCells()

  return (
    <tr
      class={clsx(
        'hover:bg-gray-100 dark:hover:bg-gray-800 w-full',
        rowGridClasses,
      )}
    >
      <For each={cells}>{cell => (
        <Cell key={cell.id} cell={cell} />
      )}</For>
    </tr>
  )
}

export default Row
