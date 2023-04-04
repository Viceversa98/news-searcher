import "./App.css";
import HeaderTop from "./Header/HeaderTop";
import Grid from "@mui/material/Grid"; // 1 grid column has 12 xs
import { NewsCrudContextProvider } from "../context/NewsCRUDContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeIndex from "./Home/HomeIndex";

function App() {
  return (
    <>
      <Router>
        <Grid container direction={"column"}>
          <NewsCrudContextProvider>
            <Grid item>
              <HeaderTop />
            </Grid>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Grid item>
              <Routes>
                <Route path="/" exact element={<HomeIndex />} />
              </Routes>
            </Grid>
          </NewsCrudContextProvider>
        </Grid>
      </Router>
      {/* 
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <HeaderTop />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FavouritePage />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <NewsDetail />
          </Item>
        </Grid>
      </Grid> */}
    </>
  );
}

export default App;
