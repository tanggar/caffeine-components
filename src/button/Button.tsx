import { MouseEventHandler } from "react";
import styled from "styled-components";

export type ButtonProps = {
  label: string;
  primary?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const StyledButton = styled.button<Partial<ButtonProps>>`
  background-color: ${({ primary }) => (primary ? "blue" : "yellow")};
  border: none;
  border-radius: 8px;
  color: ${({ primary }) => (primary ? "#f1f1f1" : "#555555")};
  cursor: pointer;
  padding: 1rem 2rem;
`;

const Button = ({
  label,
  primary,
  disabled,
  onClick,
  ...otherProps
}: ButtonProps) => {
  return (
    <StyledButton
      disabled={disabled}
      primary={primary}
      onClick={onClick}
      {...otherProps}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
