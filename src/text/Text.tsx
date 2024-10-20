import cx from 'classnames';
import { ReactNode } from 'react';
import { tv } from 'tailwind-variants';

import { CommonProps, TextSize } from '../types';

export type TextProps = {
  /**
   * What element to render. By default, the <span> element will be used.
   */
  as?: keyof JSX.IntrinsicElements;

  /**
   * Should this text be bold.
   */
  bold?: boolean;

  /**
   * The text content to render.
   */
  children: ReactNode;

  /**
   * Set a specific color for this heading.
   * Must follow a color token name, or be a name from the palette.
   */
  color?: string;

  /**
   * Set a specific size for the font-size of this heading.
   */
  size?: TextSize;
} & CommonProps;

const textVariants = tv({
  base: 'font-body',
  variants: {
    bold: {
      true: 'font-medium',
      false: 'font-regular',
    },
  },
});

const Text = ({
  as = 'span',
  bold,
  children,
  className,
  color = 'content',
  size = 'base',
  ...props
}: TextProps) => {
  const overrides = [];
  if (size) {
    overrides.push(`text-${size}`);
  }

  if (color) {
    overrides.push(`text-${color}`);
  }

  const TextComponent = as;
  return (
    <TextComponent
      className={cx(
        className,
        textVariants({
          bold,
          class: overrides.join(' '),
        }),
      )}
      {...props}
    >
      {children}
    </TextComponent>
  );
};

export default Text;
