import { Button } from "@mui/material";
import { FC } from "react";

interface AppButtonProps {
  children: React.ReactNode;
  variant?: "outlined" | "text" | "contained";
  sx?: object;
  [key: string]: any;
}

const AppButton: FC<AppButtonProps> = ({ children, variant = "contained", sx, ...restProps }) => {
  return (
    <Button variant={variant} sx={{ textTransform: "none", width: "135px", height: "41px", ...sx }} {...restProps}>
      {children}
    </Button>
  );
};

export default AppButton;
