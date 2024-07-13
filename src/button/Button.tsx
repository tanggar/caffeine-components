import { MouseEventHandler } from "react";
import { tv } from "tailwind-variants";

export type ButtonProps = {
  label: string;
  primary?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const buttonVariants = tv({
  base: "rounded-md py-sm px-xl cursor-pointer active:opacity-80",
  variants: {
    type: {
      primary:
        "bg-accentPrimary text-accentSecondary hover:bg-accentPrimaryHover",
      secondary:
        "bg-white text-accentPrimary border-2 hover:bg-accentSecondary",
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
