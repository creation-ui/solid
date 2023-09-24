import { Chip, ChipProps } from '@creation-ui/solid'
import {
  ELEMENT_SIZES,
  // ELEMENT_VARIANTS,
  ELEMENT_STATUS,
} from '@creation-ui/core'
import { For } from 'solid-js'
import clsx from 'clsx'
const ExamplesColumn = (props: any) => (
  <div class={clsx(props.class, 'flex gap-3 flex-col items-center')}>
    {props.children}
  </div>
)

const ELEMENT_VARIANTS: ChipProps['variant'][] = ['contained', 'outlined']

export const ChipExamplesPage = () => {
  return (
    <div class='flex flex-col gap-5'>
      Chip Variants
      <div class='flex gap-3'>
        <For each={ELEMENT_VARIANTS}>
          {variant => (
            <ExamplesColumn>
              <For each={ELEMENT_SIZES}>
                {size => (
                  <Chip
                    data-key={variant + size}
                    variant={variant}
                    label={variant}
                    size={size}
                  />
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
                  <Chip
                    data-key={status + size}
                    status={status}
                    size={size}
                    uppercase
                  />
                )}
              </For>
            </ExamplesColumn>
          )}
        </For>
      </div>
    </div>
  )
}
