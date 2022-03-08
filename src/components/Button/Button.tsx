import React from "react";
import { StyledButton } from "./styles";

export interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

const Button = (props: ButtonProps) => {
  return <StyledButton {...props}>{props.label}</StyledButton>;
};

export default Button;