import { flexRender } from '@tanstack/react-table'
import { twMerge } from 'tailwind-merge'

interface FooterCellProps {
  footer: any
}

const footerClass = 'p-2 text-xs font-medium text-gray-500 dark:text-gray-200'

export default function FooterCell(props: FooterCellProps) {
  const width = props.footer.column.getSize()
  const { className = '', ...meta } =
    (props.footer.column.columnDef.meta as any) ?? {}
  return (
    <td
      colSpan={props.footer.colSpan}
      scope='col'
      class={twMerge(footerClass, className)}
      style={{ width }}
      {...meta}
    >
      {props.footer.isPlaceholder ? null : (
        <div class={'flex items-center'}>
          {flexRender(props.footer.column.columnDef.footer, props.footer.getContext())}
        </div>
      )}
    </td>
  )
}
