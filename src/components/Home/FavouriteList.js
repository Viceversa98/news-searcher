import React from "react";

import { styled } from "@mui/material/styles";
import { useNewsCrud } from "../../context/NewsCRUDContext";
import { List } from "@mui/material";
import FavouriteDetail from "./FavouriteDetail";
const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
}));

const FavouriteList = () => {
  const { favNews } = useNewsCrud();
  const renderFaveList = favNews.map((fave) => {
    return (
      <>
        <FavouriteDetail key={fave.id} fave={fave} />
      </>
    );
  });

  return (
    <>
      <Div>Favourite Page</Div>
      <List dense={true}>
        {favNews.length ? renderFaveList : <h2>No Data</h2>}
      </List>
    </>
  );
};

export default FavouriteList;
