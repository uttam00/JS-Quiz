import { ButtonProps } from "@mui/material";

export interface CommonButtonProps extends ButtonProps {
  text: string;
  showNextIcon?: boolean;
  showBackIcon?: boolean;
}
