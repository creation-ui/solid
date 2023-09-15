import { cva } from 'class-variance-authority'

export const tooltip = cva(
  [
    'duration-200',
    'ease-in',
    'pointer-events-none',
    'absolute',
    'whitespace-nowrap',
    'rounded',
    'bg-info-900',
    'dark:bg-info-700',
    'px-2',
    'py-1',
    'text-white',
    'opacity-0',
    'transition',
    'before:absolute',
    'before:border-4',
    'before:border-transparent',
    "before:content-['']",
    'group-hover:opacity-100',
  ],
  {
    variants: {
      position: {
        top: [
          'before:top-full',
          '-top-10',
          'left-1/2',
          'before:border-t-info-900',
          'dark:before:border-t-info-700',
          '-translate-x-1/2',
          'before:left-1/2',
          'before:-translate-x-1/2',
        ],
        bottom: [
          'top-full',
          'mt-2',
          '-translate-x-1/2',
          'left-1/2',
          'before:bottom-full',
          'before:left-1/2',
          'before:-translate-x-1/2',
          'before:border-b-info-900',
          'dark:before:border-b-info-700',
        ],
        left: [
          'right-full',
          'mr-2',
          '-translate-y-1/2',
          'top-1/2',
          'before:left-full',
          'before:top-1/2',
          'before:-translate-y-1/2',
          'before:border-l-info-900',
          'dark:before:border-l-info-700',
        ],
        right: [
          'ml-2',
          'top-1/2',
          'left-full',
          '-translate-y-1/2',
          'before:right-full',
          'before:top-1/2',
          'before:-translate-y-1/2',
          'before:border-r-info-900',
          'dark:before:border-r-info-700',
        ],
      },
    },
    defaultVariants: {
      position: 'top',
    },
  }
)