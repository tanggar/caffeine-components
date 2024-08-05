import { MouseEventHandler } from "react";
import cx from "classnames";
import { tv } from "tailwind-variants";

import { CommonProps } from "../types";

export type ButtonProps = {
  /**
   * A boolean indicating whether the button should be disabled or not. When
   * disabled, the button cannot be clicked or interacted with.
   */
  disabled?: boolean;

  /**
   * A string that represents the text content of the button.
   */
  label: string;

  /**
   * A string indicating which type of button will be used. Available options
   * include, "primary", "ghost", and "text". Typically, a primary button stands
   * out as the main action in a user interface.
   */
  type?: "primary" | "secondary" | "ghost";

  /**
   * A function that is called when the button is clicked. It receives a
   * MouseEventHandler for handling the click event on the button element.
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & CommonProps;

const buttonVariants = tv({
  base: "font-body rounded-lg py-sm px-xl active:brightness-90",
  variants: {
    type: {
      primary:
        "bg-accent-primary text-accent-secondary disabled:bg-background-disabled disabled:text-content-disabled hover:bg-accent-primary-hover",
      secondary:
        "bg-white text-accent-primary border-2 border-accent-primary hover:bg-blue-200",
      ghost:
        "bg-transparent text-accent-primary disabled:text-content-disabled border-none hover:bg-blue-200",
    },
  },
});

const Button = ({
  className,
  label,
  disabled,
  onClick,
  type = "primary",
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      aria-disabled={disabled}
      className={cx(className, buttonVariants({ type }))}
      disabled={disabled}
      onClick={onClick}
      {...otherProps}
    >
      {label}
    </button>
  );
};

export default Button;
