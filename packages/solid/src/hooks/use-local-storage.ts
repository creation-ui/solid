import { noop, isBrowser } from '@creation-ui/core'

type ParserOptions<T> =
  | {
      raw: true
    }
  | {
      raw: false
      serializer: (value: T) => string
      deserializer: (value: string) => T
    }
import { createSignal, onCleanup } from 'solid-js'

const useLocalStorage = <T>(
  key: string,
  initialValue?: T,
  options?: ParserOptions<T>,
) => {
  if (!isBrowser) {
    return [() => initialValue, noop, noop]
  }
  if (!key) {
    throw new Error('useLocalStorage key may not be falsy')
  }

  const deserializer = options
    ? options.raw
      ? value => value
      : options.deserializer
    : JSON.parse

  const initializer = (key: string) => {
    try {
      const serializer = options
        ? options.raw
          ? String
          : options.serializer
        : JSON.stringify
      const localStorageValue = localStorage.getItem(key)
      if (localStorageValue !== null) {
        return deserializer(localStorageValue)
      } else {
        initialValue && localStorage.setItem(key, serializer(initialValue))
        return initialValue
      }
    } catch {
      return initialValue
    }
  }

  const [state, setState] = createSignal<T | undefined>(initializer(key))

  onCleanup(() => setState(initializer(key)))

  const set = (valOrFunc: any) => {
    try {
      const newState =
        typeof valOrFunc === 'function' ? valOrFunc(state()) : valOrFunc
      if (typeof newState === 'undefined') return
      let value: string

      if (options)
        if (options.raw) {
          if (typeof newState === 'string') value = newState
          else value = JSON.stringify(newState)
        } else if (options.serializer) value = options.serializer(newState)
        else value = JSON.stringify(newState)
      else value = JSON.stringify(newState)

      localStorage.setItem(key, value)
      setState(deserializer(value))
    } catch {}
  }

  const remove = () => {
    try {
      localStorage.removeItem(key)
      setState(undefined)
    } catch {}
  }

  return [state, set, remove]
}

export default useLocalStorage
