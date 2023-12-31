import { ELEMENT_SIZES, ELEMENT_VARIANTS } from '@creation-ui/core'
import { Input } from '@creation-ui/solid'
import clsx from 'clsx'
import { For } from 'solid-js'

const ExamplesColumn = (props: any) => (
  <div class={clsx(props.class, 'flex gap-3 flex-col items-center')}>
    {props.children}
  </div>
)

export const InputExamples = () => {
  return (
    <div class='flex flex-col gap-5'>
      Input examples
      <div class='flex gap-3'>
        <For each={ELEMENT_VARIANTS}>
          {variant => (
            <ExamplesColumn>
              <For each={ELEMENT_SIZES}>
                {size => <Input variant={variant} size={size} />}
              </For>
            </ExamplesColumn>
          )}
        </For>
      </div>
    </div>
  )
}
