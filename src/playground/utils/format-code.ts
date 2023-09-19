import * as prettier from 'prettier'

export const formatCode = (code: string) =>
  prettier.format(code, {
    semi: false,
    arrowParens: 'avoid',
    printWidth: 80,
    jsxSingleQuote: true,
    trailingComma: 'all',
    tabWidth: 2,
  })
