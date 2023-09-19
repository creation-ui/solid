import { PlaygroundValues } from '../types'

export const getComponentCode = (
  name: string,
  stateAsProps: string,
  children?: PlaygroundValues,
): string =>
  `
    import { ${name} } from '@creation-ui/solid';

    export const Example = () =>
      <${name} ${stateAsProps}${
        children
          ? `>
            ${children}
          </${name}>`
          : ' />'
      }
  `
