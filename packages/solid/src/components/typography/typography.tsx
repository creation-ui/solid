import { ParentComponent } from 'solid-js'
import { Typography } from './typo-component'
import { TypographyProps } from './types'

export const H1: ParentComponent<TypographyProps> = props => (
  <Typography variant={'h1'} {...props} />
)
export const H2: ParentComponent<TypographyProps> = props => (
  <Typography variant={'h2'} {...props} />
)
export const H3: ParentComponent<TypographyProps> = props => (
  <Typography variant={'h3'} {...props} />
)
export const H4: ParentComponent<TypographyProps> = props => (
  <Typography variant={'h4'} {...props} />
)
export const H5: ParentComponent<TypographyProps> = props => (
  <Typography variant={'h5'} {...props} />
)
export const H6: ParentComponent<TypographyProps> = props => (
  <Typography variant={'h6'} {...props} />
)
export const Content: ParentComponent<TypographyProps> = props => (
  <Typography variant={'content'} {...props} />
)
export const Description: ParentComponent<TypographyProps> = props => (
  <Typography variant={'description'} {...props} />
)
