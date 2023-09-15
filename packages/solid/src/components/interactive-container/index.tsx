import clsx from 'clsx'
import { JSX, ParentComponent, splitProps } from 'solid-js'
import { getWidthClasses } from '../utils'
import { interactiveContainerClasses } from './classes'

interface InteractiveContainerProps extends JSX.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean
}

export const InteractiveContainer: ParentComponent<
  InteractiveContainerProps
> = props => {
  const [{ children, disabled, class: className }, ...rest] = splitProps(
    props,
    ['disabled', 'children', 'class']
  )

  const classes = clsx(className)?.split(' ')
  const widthClasses = getWidthClasses(classes)

  return (
    <div
      {...rest}
      class={interactiveContainerClasses({
        disabled,
        className: [widthClasses],
      })}
    >
      {children}
    </div>
  )
}
