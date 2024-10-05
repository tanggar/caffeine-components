import React from 'react';

export type CommonProps = {
  /**
   * A space-delimited string of CSS class names to be given to this component.
   */
  className?: string;

  /**
   * An object of CSS styles to be applied to this component.
   */
  style?: React.CSSProperties;
};

export type TextSize =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl';
