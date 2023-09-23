import clsx from 'clsx'
import Prism from 'prismjs'
import 'prismjs/themes/prism-dark.css'
import { Component } from 'solid-js'
import { classes } from './classes'
import { usePlayground } from './context/context'
import { getComponentCode } from './utils/get-component-code'
import { objectToPropsText } from './utils/object-to-props-text'

export const PlaygroundCode: Component<{ visible: boolean }> = props => {
  const [
    {
      state: { children, ...state },
      name,
    },
  ] = usePlayground()

  if (!props.visible) return null

  const stateAsProps = objectToPropsText(state).join('\n')
  const code = getComponentCode(name, stateAsProps, children)

  const html = Prism.highlight(code, Prism.languages.javascript, 'js')

  return (
    <pre class={clsx(classes.code,'rounded-tl-none rounded-tr-none')}>
      <code class='language-tsx ' innerHTML={html} />
    </pre>
  )
}
