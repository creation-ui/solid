import {
  ClassName,
  ElementTypography,
  IntrinsicElements,
  TypographyConfig,
} from '@creation-ui/core'
import { cva } from 'class-variance-authority'
import merge from 'lodash.merge'
import values from 'lodash.values'
import { JSX } from 'solid-js/jsx-runtime'
import { twMerge } from 'tailwind-merge'
import { useTheme } from '../../theme'
import { getElementType } from './get-element-type'
import { Dynamic } from 'solid-js/web'

interface TypographyProps {
  as?: IntrinsicElements
  class?: ClassName
  variant: ElementTypography
  children?: JSX.Element
  config?: Partial<TypographyConfig>
}

export interface TypographyComponentProps
  extends Omit<TypographyProps, 'variant'> {}

export const Typography = (props: TypographyProps) => {
  const { typography } = useTheme()

  const mergedConfig = merge(
    typography?.[props.variant],
    props.config?.[props.variant]
  )
  const { fontSize, ...textClasses } = mergedConfig

  const classesValues = values(textClasses)

  const classes = cva(twMerge(classesValues, props.class), {
    variants: {
      size: fontSize,
    },
  })

  const component = props.as ?? getElementType(props.variant)

  return (
    <Dynamic component={component} class={classes()}>
      {props.children}
    </Dynamic>
  )
}
