import clsx from 'clsx'
import type { CommitInfo } from '@creation-ui/core'
import { Component } from 'solid-js'

interface VersionProps {
  classNameOverride?: string
  gitHash: CommitInfo
}

const zeroPad = (n: number) => n.toString().padStart(2, '0')

export const Version: Component<VersionProps> = (props) => {
  const { shortHash, hash, version, timestamp } = props.gitHash
  const date = new Date(timestamp)

  const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ]
  const [hour, minutes] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ]

  const formatted = [
    { value: day, formatter: zeroPad },
    { value: month, formatter: zeroPad },
    {
      value: year,
      formatter: (v: any) => String(v).split('').slice(2).join(''),
    },
    { value: hour, formatter: zeroPad },
    { value: minutes, formatter: zeroPad },
  ]
    .map(({ value, formatter }) => formatter(value))
    .join('')

  // prettier-ignore
  const classNames = [
    'cursor-pointer',
    'rounded',
    'hover:ring-1',
  ]

  return (
    <div
      class={clsx(
        'text-[8px]',
        props.classNameOverride
          ? props.classNameOverride
          : 'absolute bottom-0 right-0 px-2',
      )}
    >
      <span
        title={'Version'}
        class={clsx([classNames, 'hover:bg-sky-100', 'hover:ring-sky-200'])}
      >
        v{version}
      </span>
      -
      <span
        title={`Last commit hash: ${hash}`}
        class={clsx(classNames, 'hover:bg-orange-100', 'hover:ring-orange-200')}
      >
        {shortHash}
      </span>
    </div>
  )
}

interface VersionBodyProps {
  date: string
  version: string
  hash: string
  branch: string
}

const VersionBody = (props: VersionBodyProps) => (
  <div>
    <div>Version: {props.version}</div>
    <dl>
      <dt>Build details</dt>
      <dd>Build: {props.date}</dd>
      <dd>Branch: {props.branch}</dd>
      <dd>Commit Hash: {props.hash}</dd>
    </dl>
  </div>
)
