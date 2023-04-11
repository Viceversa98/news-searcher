import React from "react";
import { styled } from "@mui/material/styles";
import { useNewsCrud } from "../../context/NewsCRUDContext";
import { Grid, List } from "@mui/material";
import FavouriteDetail from "./FavouriteDetail";
import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";
const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
}));

const FavouriteList = () => {
  const { favNews,setFavNews } = useNewsCrud();
  const renderFaveList = favNews.map((fave) => {
    return (
      <>
        <FavouriteDetail key={fave.id} fave={fave} />
      </>
    );
  });

  const deleteAllFave= ()=>{
    setFavNews([]);
  }

  return (
    <>
      <Grid container paddingLeft={2}>
        <Grid xs={8}>
          <Div>Favourite Page</Div>
        </Grid>
        <Grid xs={4}>
          <Button variant="outlined" startIcon={<Delete />} onClick={deleteAllFave}>
            Delete
          </Button>
        </Grid>
        <Grid xs={12}>
          <List   >
            {favNews.length ? renderFaveList : <h2>No Data</h2>}
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default FavouriteList;
