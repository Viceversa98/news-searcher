import React from "react";
import LoginBox from "./LoginBox";
import { Paper } from "@mui/material";
import bgImg from "../../images/background.jpg";
const LoginPage = () => {
  return (
    <Paper
      container
      elevation={3}
      sx={{
        width: "100vw",
        height: "100vh",
        spacing: 0,
        justify: "space-around",
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <LoginBox />
    </Paper>
  );
};

export default LoginPage;
