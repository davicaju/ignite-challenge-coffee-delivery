import { InputHTMLAttributes } from "react";

import { Input as InputStyled } from "../../styles/input";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: InputProps) {
  return <InputStyled {...rest} />;
}
