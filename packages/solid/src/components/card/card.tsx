import { twMerge } from 'tailwind-merge'

export interface CardProps {
  children?: JSX.Element
  className?: string
}

const classes = {
  card: [
    'bg-white',
    'dark:bg-info-800',
    'dark:text-info-100',
    'text-info-900',
    'border',
    'border-gray-200',
    'dark:border-gray-700',
    'rounded-md',
    'p-4',
    'flex',
    'flex-col',
    'gap-4',
    'w-fit',
    'h-fit',
    'overflow-clip',
  ],
  header: ['text-lg', 'font-semibold', 'mb-2', 'leading-relaxed'],
  body: ['text-info-600', 'dark:text-info-400'],
  footer: [],
}

export const Card = (props: CardProps) => {
  return <div class={twMerge(props.className, classes.card)}>{props.children}</div>
}

const Header = (props: CardProps) => {
  return <h3 class={twMerge(props.className, classes.header)}>{props.children}</h3>
}

const Body = (props: CardProps) => {
  return <div class={twMerge(props.className, classes.body)}>{props.children}</div>
}

const Footer = (props: CardProps) => {
  return <div class={twMerge(props.className, classes.footer)}>{props.children}</div>
}

Card.Footer = Footer
Card.Body = Body
Card.Header = Header
