import cx from "classnames";
import { tv } from "tailwind-variants";
import { CommonProps, TextSize } from "../types";

export type HeadingProps = {
  /**
   * Determines whether this heading should be rendered
   * with the display font rather than the regular heading
   * font. Should only be used at large font sizes.
   */
  asDisplay?: boolean;

  /**
   * The children to render in this heading.
   */
  children: React.ReactNode;

  /**
   * Which level of heading this should be (1 - 6).
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;

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

const headingVariants = tv({
  base: "font-heading font-bold",
  variants: {
    asDisplay: {
      true: "font-display",
    },
    level: {
      1: "text-6xl",
      2: "text-4xl",
      3: "text-3xl",
      4: "text-2xl",
      5: "text-xl",
      6: "text-lg",
    },
  },
});

const Heading = ({
  asDisplay,
  children,
  className,
  color,
  level = 2,
  size,
  ...commonProps
}: HeadingProps) => {
  const HeadingComponent = `h${level}` as keyof JSX.IntrinsicElements;

  const overrides = [];
  if (size) {
    overrides.push(`text-${size}`);
  }

  if (color) {
    overrides.push(`text-${color}`);
  }

  return (
    <HeadingComponent
      className={cx(
        className,
        headingVariants({
          asDisplay,
          level,
          class: overrides.length ? overrides.join(" ") : undefined,
        }),
      )}
      {...commonProps}
    >
      {children}
    </HeadingComponent>
  );
};

export default Heading;
