import { Button } from '@creation-ui/solid'
import {
  ELEMENT_SIZES,
  ELEMENT_VARIANTS,
  ELEMENT_STATUS,
} from '@creation-ui/core'
import { For } from 'solid-js'
import clsx from 'clsx'
const ExamplesColumn = ({ children, class: className }: any) => (
  <div class={clsx(className, 'flex gap-3 flex-col items-center')}>
    {children}
  </div>
)

export const ButtonExamplesPage = () => {
  return (
    <div class='flex flex-col gap-5'>
      Button Variants
      <div class='flex gap-3'>
        <For each={ELEMENT_VARIANTS}>
          {variant => (
            <ExamplesColumn>
              <For each={ELEMENT_SIZES}>
                {size => (
                  <Button variant={variant} size={size} uppercase>
                    {variant} {size}
                  </Button>
                )}
              </For>
            </ExamplesColumn>
          )}
        </For>
      </div>
      Status
      <div class='flex gap-3'>
        <For each={ELEMENT_STATUS}>
          {status => (
            <ExamplesColumn>
              <For each={ELEMENT_SIZES}>
                {size => (
                  <Button status={status} size={size} uppercase>
                    {status} {size}
                  </Button>
                )}
              </For>
            </ExamplesColumn>
          )}
        </For>
      </div>
      Button Circle Variants
      <div class='flex gap-3'>
        <For each={ELEMENT_VARIANTS}>
          {variant => (
            <ExamplesColumn>
              <For each={ELEMENT_SIZES}>
                {size => (
                  <Button circle variant={variant} size={size} uppercase>
                    {size}
                  </Button>
                )}
              </For>
            </ExamplesColumn>
          )}
        </For>
      </div>
      Status
      <div class='flex gap-3'>
        <For each={ELEMENT_STATUS}>
          {status => (
            <ExamplesColumn>
              <For each={ELEMENT_SIZES}>
                {size => (
                  <Button circle status={status} size={size} uppercase>
                    {size}
                  </Button>
                )}
              </For>
            </ExamplesColumn>
          )}
        </For>
      </div>
      Loading
      <ExamplesColumn class='w-fit'>
        <Button loading>Loading</Button>
        <Button loading circle>
          +
        </Button>
      </ExamplesColumn>
    </div>
  )
}
