import { Button as MuiButton, ButtonProps } from "@mui/material";
import { FC } from "react";

const Button: FC<ButtonProps> = ({ children }) => {
  return <MuiButton>{children}</MuiButton>;
};

export default Button;
