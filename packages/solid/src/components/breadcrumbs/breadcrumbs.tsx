import { BreadcrumbLink, ElementSize, JSXNode } from '@creation-ui/core'
import { cva } from 'class-variance-authority'
import { mergeProps, JSX, Component } from 'solid-js'
import { Icon } from '../icon'
import { BreadcrumbItem } from './breadcrumb-item'
import { separators } from './seperators'

export interface BreadcrumbsProps extends JSX.HTMLAttributes<HTMLDivElement> {
  /**
   * You can provide a custom home icon or disable it
   */
  homeIcon?: JSXNode | false
  /**
   * You can provide a custom separator
   */
  separator?: JSXNode | 'chevron' | 'slash' | 'dot'
  /**
   * first will be treated as home path
   */
  links?: BreadcrumbLink[] | string[]
  spacing?: ElementSize
}

const listClasses = cva(['inline-flex', 'items-center'], {
  variants: {
    spacing: {
      sm: 'gap-1',
      md: 'gap-2',
      lg: 'gap-3',
    },
  },
})

export const Breadcrumbs: Component<BreadcrumbsProps> = _props => {
  const props = mergeProps(
    { separator: 'chevron', homeIcon: <Icon icon='home' />, spacing: 'sm' },
    _props
  )

  const normalizedLinks = props.links?.map((link, idx) => {
    return typeof link === 'string'
      ? { href: link, label: link, id: idx }
      : link
  })

  const separatingIcon =
    typeof props.separator === 'string'
      ? separators[props.separator]
      : props.separator

  return (
    <nav class='flex' {...props}>
      <ol class={listClasses({ spacing: props.spacing })}>
        {normalizedLinks?.map((link, idx, array) => (
          <BreadcrumbItem
            count={array?.length}
            index={idx}
            link={link}
            separator={
              idx === 0 ? (
                <div class='mr-1'>{props.homeIcon}</div>
              ) : (
                separatingIcon
              )
            }
            key={link.href}
          />
        ))}
      </ol>
    </nav>
  )
}
