import { AnimatePresence, motion } from 'framer-motion'

type AnimationProps = React.ComponentProps<typeof motion.div>

interface ShowProps {
  when?: boolean
  children?: JSX.Element
  fallback?: JSX.Element
  animationProps?: AnimationProps
}

const duration = 0.35

const defaultAnimationProps: AnimationProps = {
  initial: { scale: 0.9, display: 'none' },
  exit: { scale: 0.9, display: 'none' },
  animate: { display: 'block', scale: 1 },
  transition: { duration },
}

export const Show = (_props: ShowProps) => 
  {
  const props = mergeProps({ fallback: null, animationProps: defaultAnimationProps }, _props);
  return (<AnimatePresence>
    {props.when ? (
      <motion.div key='true' {...props.animationProps}>
        {props.children}
      </motion.div>
    ) : (
      <motion.div key='false' {...props.animationProps}>
        {props.fallback}
      </motion.div>
    )}
  </AnimatePresence>);
}

