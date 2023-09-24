import { flexRender } from '@tanstack/react-table'
import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import { Icon } from '../../icon'
import { sortIconClasses } from '../classes'
import { useTable } from '../table.context'
import { cellClasses } from './classes'
import Filter from './filter'

interface HeaderCellProps {
  header: any
}

const headerCellClass = cva(
  [
    'select-none',
    'text-sm',
    'font-medium',
    'text-gray-500',
    'dark:text-gray-200',
    'capitalize',
    'tracking-wider',
    'flex',
    'flex-col',
  ],
  {
    variants: {
      sortable: {
        true: ['cursor-pointer'],
        false: [],
      },
      align: {
        left: 'items-start',
        center: 'items-center',
        right: 'items-end',
      },
    },
    defaultVariants: {
      align: 'left',
    },
  },
)

export default function HeaderCell(props: HeaderCellProps) {
  const { table } = useTable()
  const width = props.header.column.getSize()
  const sortable = props.header.column.getCanSort()
  const isSorted = props.header.column.getIsSorted()

  const { className, align, ...meta } =
    (props.header.column.columnDef.meta as any) ?? {}

  return (
    <th
      colSpan={props.header.colSpan}
      scope='col'
      onClick={props.header.column.getToggleSortingHandler()}
      class={cellClasses({ align, className, padding: false })}
      {...meta}
    >
      {props.header.isPlaceholder ? null : (
        <div
          style={{ width }}
          class={headerCellClass({
            sortable,
            align,
          })}
        >
          <span class={clsx('flex', 'items-center')}>
            {flexRender(props.header.column.columnDef.header, props.header.getContext())}
            {isSorted && (
              <Icon
                aria-hidden='true'
                icon='straight'
                class={sortIconClasses({
                  desc: isSorted === 'desc',
                })}
              />
            )}
          </span>

          {props.header.column.getCanFilter() ? (
            <Filter column={props.header.column} table={table} />
          ) : null}
        </div>
      )}
    </th>
  )
}
