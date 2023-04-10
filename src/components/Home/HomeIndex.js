import React from "react";
import FavouriteList from "./FavouriteList";
import Grid from "@mui/material/Grid"; // 1 grid column has 12 xs
import Paper from "@mui/material/Paper";
import { useNewsCrud } from "../../context/NewsCRUDContext";
import NewsDetail from "./NewsDetail";
import HeaderTop from "../Header/HeaderTop";

const HomeIndex = () => {
  const { news } = useNewsCrud();
  console.log(news);
  const renderNewsList = news.map((news) => {
    return (
      <Grid item xs={4}>
        <NewsDetail new={news} key={news.url} />
      </Grid>
    );
  });

  return (
    <>
      <Paper
        sx={{
          p: 3,
          maxWidth: "90%",
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <HeaderTop />
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Grid container item spacing={2} padding={2} direction={"row"}>
          <Grid item xs={4}>
            <Paper>
              <FavouriteList />
            </Paper>
          </Grid>
          <Grid item xs={8} container spacing={2} >
            {news.length ? renderNewsList : <h2>Search Data</h2>}
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default HomeIndex;
