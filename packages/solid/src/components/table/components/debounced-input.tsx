import React from 'react'
import { Input } from '../../input'

function DebouncedInput(_props: {
  value: string | number
  onChange: (value: string | number) => void
  debounce?: number
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
    const [props, rest] = splitProps(mergeProps({ debounce: 500 }, _props), ["value", "onChange", "debounce", "size"]);const [value, setValue] = React.useState(props.value)

  React.useEffect(() => {
    setValue(props.value)
  }, [props.value])

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      props.onChange(value)
    }, props.debounce)

    return () => clearTimeout(timeout)
  }, [value])

  const handleChange = e => setValue(e.target.value)

  return (
    <Input
      //
      {...props}
      size='sm'
      value={value}
      onChange={handleChange}
    />
  )
}

export default DebouncedInput
