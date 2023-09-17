import Counter from '@components/Counter'
import { Box } from '@creation-ui/solid/components'

export default function Home() {
  return (
    <main>
      <Counter />
      <Box>
        A box. No idea what it does.
        <br />I don't think there's docs for it.
      </Box>
      <input type='text'></input>
    </main>
  )
}
