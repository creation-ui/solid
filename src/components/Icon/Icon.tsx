import { Component, JSX, splitProps } from 'solid-js'
import { IconProps } from './Icon.props'

// export { default as Stack } from './Stack'

let idCounter = 0

export const Icon: Component<IconProps> = props => {
  const pathStyle: any = {}

  const [
    {
      path,
      id = ++idCounter,
      title = null,
      description = null,
      size = null,
      color = 'currentColor',
      horizontal = false,
      vertical = false,
      rotate = 0,
      spin = false,
      style = {},
      inStack = false,
    },
    rest,
  ] = splitProps(props, [
    'path',
    'id',
    'title',
    'description',
    'size',
    'color',
    'horizontal',
    'vertical',
    'rotate',
    'spin',
    'style',
    'inStack',
  ])

  const transform: JSX.CSSProperties['transform'][] = []
  if (size !== null) {
    if (inStack) {
      transform.push(`scale(${size})`)
    } else {
      style.width = typeof size === 'string' ? size : `${size * 1.5}rem`
      style.height = style.width
    }
  }
  if (horizontal) {
    transform.push('scaleX(-1)')
  }
  if (vertical) {
    transform.push('scaleY(-1)')
  }
  if (rotate !== 0) {
    transform.push(`rotate(${rotate}deg)`)
  }
  if (color !== null) {
    pathStyle.fill = color
  }
  let pathElement = (
    <path d={path} style={pathStyle} {...((inStack ? rest : {}) as any)} />
  )
  let transformElement = pathElement
  if (transform.length > 0) {
    style.transform = transform.join(' ')
    style['transform-origin'] = 'center'
    if (inStack) {
      transformElement = (
        <g style={style}>
          {pathElement}
          <rect width='24' height='24' fill='transparent' />
        </g>
      )
    }
  }
  let spinElement = transformElement
  const spinSec = spin === true || typeof spin !== 'number' ? 2 : spin
  let inverse = !inStack && (horizontal || vertical)
  if (spinSec < 0) {
    inverse = !inverse
  }
  if (spin) {
    spinElement = (
      <g
        style={{
          animation: `spin${inverse ? '-inverse' : ''} linear ${Math.abs(
            spinSec,
          )}s infinite`,
          'transform-origin': 'center',
        }}
      >
        {transformElement}
        {!(horizontal || vertical || rotate !== 0) && (
          <rect width='24' height='24' fill='transparent' />
        )}
      </g>
    )
  }
  if (inStack) {
    return spinElement
  }
  let ariaLabelledby
  let labelledById = `icon_labelledby_${id}`
  let describedById = `icon_describedby_${id}`
  let role
  if (title) {
    ariaLabelledby = description
      ? `${labelledById} ${describedById}`
      : labelledById
  } else {
    role = 'presentation'
    if (description) {
      throw new Error('title attribute required when description is set')
    }
  }
  return (
    <svg
      viewBox='0 0 24 24'
      style={style}
      // @ts-expect-error
      role={role}
      aria-labelledby={ariaLabelledby}
      {...rest}
    >
      {title && <title id={labelledById}>{title}</title>}
      {description && <desc id={describedById}>{description}</desc>}
      {!inStack &&
        spin &&
        (inverse ? (
          <style>
            {
              '@keyframes spin-inverse { from { transform: rotate(0deg) } to { transform: rotate(-360deg) } }'
            }
          </style>
        ) : (
          <style>
            {
              '@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }'
            }
          </style>
        ))}
      {spinElement}
    </svg>
  )
}

export default Icon
