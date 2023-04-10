import React from "react";
import LoginBox from "./LoginBox";
import { Paper } from "@mui/material";

const LoginPage = () => {
  return (
    <Paper
      sx={{
        width: "100vw",
        height: "100vh",
        spacing: 0,
        justify: "space-around",
      }}
    >
      <LoginBox />
    </Paper>
  );
};

export default LoginPage;
