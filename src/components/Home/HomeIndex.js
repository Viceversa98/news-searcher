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
      <Grid item xs={4} padding={1}>
        <NewsDetail new={news} key={news.url} />
      </Grid>
    );
  });

  return (
    <Grid container item direction={"row"}>
      <Grid item xs={12}>
        <HeaderTop />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Grid>

      <Grid item xs={4}>
        <Paper
          container
          elevation={3}
          sx={{
            opacity: 0.8,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <FavouriteList />
        </Paper>
      </Grid>

      <Grid item xs={8} container paddingLeft={2}>
        {news.length ? renderNewsList : <h2>Search Data</h2>}
      </Grid>
    </Grid>
  );
};

export default HomeIndex;
