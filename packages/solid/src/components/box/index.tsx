import { cva } from 'class-variance-authority'
import type { BoxProps } from './box.types'
import { mergeProps } from 'solid-js'

const box = cva([], {
  variants: {
    body: {
      base: ['flex', 'justify-center', 'dark:text-info-50', 'rounded-lg'],
    },
    content: {
      base: [
        'block',
        'p-5',
        'rounded-lg',
        'shadow-lg',
        'bg-gray-50',
        'dark:bg-gray-800',
        'dark:text-gray-50',
      ],
    },
    border: {
      true: ['border', 'border-info-100', 'dark:border-info-800'],
      false: [],
    },
  },
})

export const Box = (_props: BoxProps) => {
  const props = mergeProps({ border: true }, _props)
  return (
    <div class={box({ body: 'base', class: props.className })}>
      <div class={box({ content: 'base', border: props.border })}>
        {props.children}
      </div>
    </div>
  )
}
