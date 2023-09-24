import { For } from "solid-js";
import clsx from 'clsx'
import { Callout } from '../callout'
import { LoadingOverlay } from '../loading-overlay'
import {
  bodyClasses,
  footerClasses,
  headerClasses,
  headerRowClasses,
  sharedTableClasses,
  tableClasses,
} from './classes'
import FooterCell from './components/footer-cell'
import HeaderCell from './components/header-cell'
import Pagination from './components/pagination'
import Row from './components/row'
import { useTable } from './table.context'

const Table = () => {
  const { table, height, pagination, loading, error, errorVariant } = useTable()
  const data = table.getRowModel()
  const head = table.getHeaderGroups()
  const foot = table.getFooterGroups()

  return (
    <div class='overflow-hidden rounded-lg relative'>
      <LoadingOverlay active={loading} />
      <table class={tableClasses()} style={{ height, "max-height": height }}>
        <thead class={headerClasses}>
          <For each={head}>{headerGroup => (
            <tr  class={headerRowClasses}>
              <For each={headerGroup.headers}>{column => (
                <HeaderCell header={column} key={column.id} />
              )}</For>
            </tr>
          )}</For>
        </thead>
        {error ? (
          <div
            class={clsx(sharedTableClasses.border, 'relative', 'w-full')}
            style={{ height, "max-height": height }}
          >
            <div
              class={clsx(
                'absolute',
                'left-1/2',
                'transform',
                '-translate-x-1/2',
                'top-1/2',
                '-translate-y-1/2',
                'w-2/3',
              )}
            >
              <Callout
                title={error.title}
                content={error.message}
                variant={errorVariant}
                status={'error'}
              />
            </div>
          </div>
        ) : (
          <tbody class={bodyClasses()} style={{ height, "max-height": height }}>
            <For each={data.rows}>{row => (
              <Row key={row.id} row={row} />
            )}</For>
          </tbody>
        )}

        <tfoot class={footerClasses}>
          <For each={foot}>{group => (
            <tr >
              <For each={group.headers}>{column => (
                <FooterCell footer={column} key={column.id} />
              )}</For>
            </tr>
          )}</For>
          {pagination && <Pagination />}
        </tfoot>
      </table>
    </div>
  )
}

export default Table
