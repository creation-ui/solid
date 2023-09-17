import { JSX } from 'solid-js'

export type Context = {
  pageOpts: any
}

export type SearchResult = {
  children: JSX.Element
  id: string
  prefix?: JSX.Element
  route: string
}
