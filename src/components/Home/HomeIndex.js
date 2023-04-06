import React, {  } from "react";
import FavouriteList from "./FavouriteList";
import Grid from "@mui/material/Grid"; // 1 grid column has 12 xs
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useNewsCrud } from "../../context/NewsCRUDContext";
import NewsDetail from "./NewsDetail";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.secondary,
  elevation: 9,
}));

const HomeIndex = () => {
  const { news, testnews } = useNewsCrud();
  
  const renderNewsList = testnews.map((news) => {
    return (
      <Grid item xs={4}>
        <NewsDetail news={news} key={news} />
      </Grid>
    );
  });



  return (
    <>
      <Grid container spacing={2} item direction={"row"}>
        <Grid item xs={4}>
          <Item>
            <FavouriteList />
          </Item>
        </Grid>
        <Grid item xs={8} container>
          <Grid container columns={{ xs: 10 }}>
            <Item>{renderNewsList}</Item>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HomeIndex;
