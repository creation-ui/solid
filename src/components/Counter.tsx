import { Button } from '@creation-ui/solid'
import { createSignal } from 'solid-js'

export default function Counter() {
  const [count, setCount] = createSignal(0)
  return (
    <Button onClick={() => setCount(count() + 1)}>Clicks: {count()}</Button>
  )
}
