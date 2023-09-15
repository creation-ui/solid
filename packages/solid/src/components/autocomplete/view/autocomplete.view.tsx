import { FloatingFocusManager, FloatingPortal } from '@floating-ui/react'
import clsx from 'clsx'
import { FC } from 'react'
import { useInputBase } from '../../input-base/input-base.context'
import { DropdownMenu } from '../../shared/DropdownMenu'
import { useAutocomplete } from '../context'
import { AutocompleteOptionDefault } from '../types'
import { renderOptionInternalContainer } from '../utils/render-option'
import { MultipleSelections } from './multiple-selections.view'

export const AutocompleteView: FC = () => {
  const { classes, componentId } = useInputBase()
  const {
    //
    propsInput,
    multiple,
    selected,
    renderSelection,
    options = [],
    textNotFound,
    floatingContext,
    open,
    propsList,
  } = useAutocomplete()

  const customRenderValue = renderSelection && !multiple && selected
  const hasOptions = options.length > 0

  return (
    <>
      <div class={clsx(classes.input, 'relative h-auto py-1')}>
        <div class={clsx('flex flex-col gap-1')}>
          <div class='inline-flex gap-2 items-center flex-wrap h-fit'>
            {multiple && <MultipleSelections />}
            {customRenderValue ? (
              <>{renderSelection(selected as AutocompleteOptionDefault)}</>
            ) : (
              <input
                {...propsInput}
                id={componentId}
                class={clsx(
                  'reset-input h-fit',
                  propsInput.className as string
                )}
              />
            )}
          </div>
        </div>
        {open && (
          <FloatingPortal>
            <FloatingFocusManager
              initialFocus={-1}
              context={floatingContext}
              visuallyHiddenDismiss
            >
              <DropdownMenu {...propsList} open={open}>
                {hasOptions ? (
                  options?.map(renderOptionInternalContainer)
                ) : (
                  <li class={'py-2 px-3 w-full text-center'}>
                    {textNotFound}
                  </li>
                )}
              </DropdownMenu>
            </FloatingFocusManager>
          </FloatingPortal>
        )}
      </div>
    </>
  )
}
