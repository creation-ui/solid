import { Component, JSX } from 'solid-js'

export function renderComponent<T>(
  ComponentOrNode: Component<T> | JSX.Element | null | undefined,
  props?: T,
) {
  if (!ComponentOrNode) return null
  if (typeof ComponentOrNode !== 'function') return ComponentOrNode
  return <ComponentOrNode {...props} />
}

export function renderString<T>(
  stringOrFunction?: string | ((props: T) => string),
  // @ts-expect-error TS2322: Type '{}' is not assignable to type 'T'.
  props: T = {},
): string {
  const result =
    typeof stringOrFunction === 'function'
      ? stringOrFunction(props)
      : stringOrFunction
  return result || ''
}
