import { For } from "solid-js";
import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import { FC, useCallback, useEffect, useRef } from 'react'
import { OnTimeSliderSelectArgs, TimeSelectorProps } from './types'

const cellClasses = cva(
  ['cursor-pointer', 'px-2', 'py-1', 'hover:bg-primary-50/50'],
  {
    variants: {
      selected: {
        true: [
          //
          'bg-primary-100',
          'dark:bg-primary-100',
          'dark:text-info-700',
        ],
        false: '',
      },
    },
  },
)

const columnClasses = clsx('overflow-y-scroll', 'h-48')

export const TimeSelector: FC<TimeSelectorProps> = (_props) => {
    const props = mergeProps({ format: 24 }, _props);
const hours = Array.from({ length: props.format }, (_, i) => i)
  const minutes = Array.from({ length: 60 }, (_, i) => i)

  const currentDate = props.value ? new Date(props.value) : undefined

  const handleSelect = useCallback(
    ({ hour, minute }: OnTimeSliderSelectArgs) => {
      const newDate = currentDate ? new Date(currentDate) : new Date()
      if (!currentDate) newDate.setHours(0, 0, 0, 0)

      const h = hour ?? newDate.getHours()
      const min = minute ?? newDate.getMinutes()

      newDate.setHours(h, min)

      props.onSelect(newDate)
    },
    [props.onSelect],
  )

  const hourRef = useRef<HTMLDivElement[]>([])
  const minuteRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const h = currentDate?.getHours()
    const m = currentDate?.getMinutes()

    h &&
      hourRef.current[h]?.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth',
      })

    m &&
      minuteRef.current[m]?.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth',
      })
  }, [props.value])

  return (
    <div
      class={clsx(
        'bg-white dark:bg-info-800 dark:border-info-700 border rounded-md',
        'grid grid-cols-2 gap-2',
      )}
    >
      <div class={columnClasses}>
        <For each={hours}>{hour => (
          <div
            ref={el => ((hourRef as any).current[hour] = el)}
            
            onClick={() => handleSelect({ hour })}
            class={cellClasses({
              selected: currentDate?.getHours() === hour,
            })}
          >
            {hour.toString().padStart(2, '0')}
          </div>
        )}</For>
      </div>
      <div class={columnClasses}>
        <For each={minutes}>{minute => (
          <div
            ref={el => ((minuteRef as any).current[minute] = el)}
            
            onClick={() => handleSelect({ minute })}
            class={cellClasses({
              selected: currentDate?.getMinutes() === minute,
            })}
          >
            {minute.toString().padStart(2, '0')}
          </div>
        )}</For>
      </div>
    </div>
  )
}
