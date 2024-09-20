import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
import { FunctionComponent } from "react";
import { CommonButtonProps } from "./type";

const CommonButton: FunctionComponent<CommonButtonProps> = ({
  text,
  showBackIcon,
  showNextIcon,
  ...otherButtonProps
}) => {
  return (
    <Button
      fullWidth
      color="primary"
      variant="contained"
      startIcon={showBackIcon ? <KeyboardArrowLeftIcon /> : null}
      endIcon={showNextIcon ? <ChevronRightIcon /> : null}
      {...otherButtonProps}
    >
      {text}
    </Button>
  );
};

export default CommonButton;
