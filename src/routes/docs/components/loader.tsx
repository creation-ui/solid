import { Loader } from '@creation-ui/solid'

export default function LoaderPage() {
  return (
    <>
      <h1>Loader</h1>
      <div class='flex flex-col gap-3'>
        <Loader active size='sm' />
        <Loader active size='md' />
        <Loader active size='lg' />
      </div>
      <div class='flex flex-col gap-3'>
        <Loader active size='sm' white />
        <Loader active size='md' white />
        <Loader active size='lg' white />
      </div>
    </>
  )
}
