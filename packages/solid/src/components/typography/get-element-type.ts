import type { ElementTypography, IntrinsicElements } from '@creation-ui/core'

export const getElementType = (
  variant: ElementTypography = 'content'
): IntrinsicElements => {
  const map: Record<ElementTypography, IntrinsicElements> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    content: 'p',
    description: 'span',
  }
  return map[variant]
}
