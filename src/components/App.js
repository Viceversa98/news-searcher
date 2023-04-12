import "./App.css";
import React from "react";
import Grid from "@mui/material/Grid"; // 1 grid column has 12 xs
import { NewsCrudContextProvider } from "../context/NewsCRUDContext";
import bgImg from "../images/background.jpg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeIndex from "./Home/HomeIndex";
import LoginPage from "./Login/LoginPage";

function App() {
  return (
    <Router>
      <Grid
        container
        direction={"column"}
        sx={{
          backgroundImage: `url(${bgImg})`,
          position: "sticky",
          backgroundSize: "cover",
          backgroundRepeat:"no-repeat",
          height: "100%",
        }}
      >
        <NewsCrudContextProvider>
          <Routes>
            <Route path="/login" exact element={<LoginPage />} />
            <Route path="/home" exact element={<HomeIndex />} />
          </Routes>
        </NewsCrudContextProvider>
      </Grid>
    </Router>
  );
}

export default App;
