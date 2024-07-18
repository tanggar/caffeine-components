import { MouseEventHandler } from "react";
import { tv } from "tailwind-variants";

export type ButtonProps = {
  label: string;
  primary?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const buttonVariants = tv({
  base: "font-body rounded-md py-sm px-xl cursor-pointer active:opacity-80",
  variants: {
    type: {
      primary:
        "bg-accent-primary text-accent-secondary hover:bg-accent-primary-hover",
      secondary:
        "bg-white text-accent-primary border-2 hover:bg-accent-secondary",
    },
  },
});

const Button = ({
  label,
  primary,
  disabled,
  onClick,
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      className={buttonVariants({ type: primary ? "primary" : "secondary" })}
      disabled={disabled}
      onClick={onClick}
      {...otherProps}
    >
      {label}
    </button>
  );
};

export default Button;
