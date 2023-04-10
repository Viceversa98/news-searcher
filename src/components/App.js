import "./App.css";
import React from "react";
import Grid from "@mui/material/Grid"; // 1 grid column has 12 xs
import { NewsCrudContextProvider } from "../context/NewsCRUDContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomeIndex from "./Home/HomeIndex";
import LoginPage from "./Login/LoginPage";
   
function App() {

  return (
    <Router>
      <Grid container direction={"column"}>
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
