import { Box, TextField, Typography } from "@mui/material";
import React, { FunctionComponent, useCallback, useState } from "react";
import CommonButton from "../../components/button";
import { useUserName } from "../../context/userNameContext";
import "./style.css";

const GreetingsPage: FunctionComponent = () => {
  const { userName, updateUserName, updateIsQuizStarted } = useUserName();
  const [error, setError] = useState<string | null>(null);

  const handleStartClick = useCallback(() => {
    if (userName && userName?.length > 0) {
      setError(null);
      updateIsQuizStarted(true);
    } else {
      setError("User Name is required");
    }
  }, [userName]);

  return (
    <Box className="main_body">
      <Box className="greeting_box">
        <Typography color="success" variant="h4" gutterBottom>
          Welcome to Uttam's Javascript Quiz...
        </Typography>

        <Typography variant="h5" gutterBottom>
          To start your quiz please enter your name in the below field and click
          the start button
        </Typography>
        <TextField
          variant="outlined"
          label="Enter Your Name"
          value={userName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            updateUserName(event.target.value);
            if (error) setError(null);
          }}
          error={!!error}
          helperText={error}
        />
        <Box
          sx={{
            marginTop: "10px",
          }}
        >
          <CommonButton onClick={() => handleStartClick()} text="Start" />
        </Box>
      </Box>
    </Box>
  );
};

export default GreetingsPage;
