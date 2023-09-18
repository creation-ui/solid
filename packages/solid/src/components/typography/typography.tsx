import { ParentComponent } from 'solid-js'
import { Typography, TypographyComponentProps } from './typo-component'

export const H1: ParentComponent<TypographyComponentProps> = props => (
  <Typography variant={'h1'} {...props} />
)
export const H2: ParentComponent<TypographyComponentProps> = props => (
  <Typography variant={'h2'} {...props} />
)
export const H3: ParentComponent<TypographyComponentProps> = props => (
  <Typography variant={'h3'} {...props} />
)
export const H4: ParentComponent<TypographyComponentProps> = props => (
  <Typography variant={'h4'} {...props} />
)
export const H5: ParentComponent<TypographyComponentProps> = props => (
  <Typography variant={'h5'} {...props} />
)
export const H6: ParentComponent<TypographyComponentProps> = props => (
  <Typography variant={'h6'} {...props} />
)
export const Content: ParentComponent<TypographyComponentProps> = props => (
  <Typography variant={'content'} {...props} />
)
export const Description: ParentComponent<TypographyComponentProps> = props => (
  <Typography variant={'description'} {...props} />
)
