import type { ElementTypography } from '@creation-ui/core'
import { splitProps } from 'solid-js'
import { TypographyProps } from './types'
import { Typography } from './typo-component'

export const createTypographyComponent = (variant: ElementTypography) => {
  return (props: TypographyProps) => {
    const [{ children }, rest] = splitProps(props, ['children'])

    return (
      <Typography {...rest} variant={variant}>
        {children}
      </Typography>
    )
  }
}
