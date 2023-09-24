import { FloatingPortal } from '@floating-ui/react'
import { twMerge } from 'tailwind-merge'

interface BuggyProps {
  value: any
  className?: string
}

export const Buggy = (props: BuggyProps) => (
  <FloatingPortal>
    <>
      <div
        class={twMerge(
          [
            'fixed',
            'top-20',
            'right-10',
            'rounded-md',
            'backdrop-blur-3xl',
            'bg-white',
            'bg-opacity-95',
            'z-[9999]',
            'p-5',
            'w-80',
            'border',
            'shadow-xl',
            'max-h-1/2',
          ],
          props.className,
        )}
      >
        <h4 class='leading-relaxed text-xl font-semibold'>Debug</h4>
        <pre class='text-xs overflow-y-auto'>
          {JSON.stringify(props.value, null, 2)}
        </pre>
      </div>
    </>
  </FloatingPortal>
)
