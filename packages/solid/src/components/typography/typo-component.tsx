import {
  ClassName,
  ElementTypography,
  IntrinsicElements,
  TypographyConfig,
} from '@creation-ui/core'
import { cva } from 'class-variance-authority'
import merge from 'lodash.merge'
import values from 'lodash.values'
import { splitProps } from 'solid-js'
import { JSX } from 'solid-js/jsx-runtime'
import { useTheme } from '../../theme'
import { twMerge } from 'tailwind-merge'
import { getElementType } from './get-element-type'

interface GetDetailsArgs {
  as?: IntrinsicElements
  class?: ClassName
  variant: ElementTypography
  children?: JSX.Element
  config?: Partial<TypographyConfig>
}

const UI_PROPS_KEYS: readonly (keyof GetDetailsArgs)[] = [
  'variant',
  'class',
  'config',
  'as',
  'children',
]

export const TypoComponent = (props: GetDetailsArgs) => {
  const { typography } = useTheme()
  const [{ variant, class: className, config, as, children }] = splitProps(
    props,
    UI_PROPS_KEYS
  )

  const mergedConfig = merge(typography?.[variant], config?.[variant])
  const { fontSize, ...textClasses } = mergedConfig

  const classesValues = values(textClasses)

  const classes = cva(twMerge(classesValues, className), {
    variants: {
      size: fontSize,
    },
  })

  const Component = as ?? getElementType(variant)

  return <span class={classes()}>{children}</span>
}
