import type { ElementTypography } from '@creation-ui/core'
import { splitProps } from 'solid-js'
import { TypographyProps } from './types'
import { TypoComponent } from './typo-component'

export const createTypographyComponent = (variant: ElementTypography) => {
  return (props: TypographyProps) => {
    const [{ children }, rest] = splitProps(props, ['children'])

    return (
      <TypoComponent {...rest} variant={variant}>
        {children}
      </TypoComponent>
    )
  }
}
