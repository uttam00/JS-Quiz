import { Box, CircularProgress, Typography } from "@mui/material";
import { Fragment, FunctionComponent } from "react";
import CommonButton from "../../components/button";
import { ResultPageProps } from "./type";
import { useUserName } from "../../context/userNameContext";

const ResultPage: FunctionComponent<ResultPageProps> = ({
  message,
  onResetTest,
  score,
}) => {
  const { userName } = useUserName();
  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "inline-flex",
            marginBottom: "30px",
          }}
        >
          <CircularProgress
            variant="determinate"
            color="success"
            value={score}
            size={120}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              component="div"
              sx={{ color: "text.secondary" }}
            >{`${score}%`}</Typography>
          </Box>
        </Box>
        <Typography variant="h6" sx={{ padding: "0px 5px" }}>
          Hey <b>{userName}</b>, {message}
        </Typography>
        <Box
          sx={{
            marginTop: "10px",
          }}
        >
          <CommonButton
            onClick={onResetTest}
            text="Restart"
            variant="contained"
          />
        </Box>
      </Box>
    </Fragment>
  );
};

export default ResultPage;
