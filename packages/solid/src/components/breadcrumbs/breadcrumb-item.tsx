import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import type { BreadcrumbLink } from '@creation-ui/core'

interface BreadcrumbItemProps {
  link: BreadcrumbLink
  index: number
  count: number
  separator: ReactNode
}

export const BreadcrumbItem: FC<BreadcrumbItemProps> = memo(
  (props) => {
    const isLast = props.index === props.count - 1

    const props: React.HTMLProps<HTMLLIElement> = {
      ...(isLast && { 'aria-current': 'page' }),
    }

    return (
      <>
        {props.separator}
        <li {...props}>
          <div class='flex items-center capitalize'>
            <a
              href={href}
              class='text-gray-700 hover:text-gray-900 text-sm font-medium'
            >
              {label}
            </a>
          </div>
        </li>
      </>
    )
  },
)
