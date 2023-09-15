import { createSignal, onCleanup } from 'solid-js';
import { useId } from '../../hooks';
import { useTheme } from '../../theme';
import type { ButtonProps } from './button.types';
import { button } from './classes';
import { text } from '@creation-ui/core';
import { InteractiveContainer } from '../interactive-container';
import { LoadingOverlay } from '../loading-overlay';
import { Loader } from '../loader';
import { twMerge } from 'tailwind-merge';

const Button: (props: ButtonProps, ref: any) => JSX.Element = (props, ref) => {
  const [componentId] = createSignal(useId(props.id));
  const theme = useTheme();

  const {
    children,
    loading,
    iconLeft,
    iconRight,
    className,
    id,
    ...otherProps
  } = props;

  const {
    circle,
    size = theme.size,
    variant = 'contained',
    status = 'primary',
    uppercase,
  } = otherProps;

  const isLoaderWhite = variant === 'contained';
  const disabled = loading || otherProps.disabled;

  const classes = twMerge(
    button({
      size,
      status,
      circle,
      variant,
      disabled,
      uppercase,
      className: [theme.roundness, className, text({ size })],
    })
  );

  const centerSpinner: boolean = Boolean(loading && circle);
  const leftSpinner: boolean = Boolean(loading && !circle);

  return (
    <InteractiveContainer disabled={disabled} className={className}>
      <button
        id={componentId()}
        ref={ref}
        disabled={disabled}
        {...otherProps}
        className={classes}
      >
        {leftSpinner && (
          <Loader size={'sm'} active={leftSpinner} white={isLoaderWhite} />
        )}
        <LoadingOverlay active={centerSpinner} white={isLoaderWhite} />
        {iconLeft}
        <span>{children}</span>
        {iconRight}
      </button>
    </InteractiveContainer>
  );
};

export default Button;
