import React, { useEffect } from "react";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderOutlined";
import { styled } from "@mui/material/styles";
import { useNewsCrud } from "../../context/NewsCRUDContext";
import { List, ListItem, ListItemText } from "@mui/material";
const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(0),
}));



const FavouriteList = () => {
  const {favNews} = useNewsCrud();
  const renderFaveList = favNews.map((fave) => {
    return (
      <ListItem>
        <ListItemText  primary={<b>{fave.author}</b>}  secondary={fave.title} key={fave.id}/> <StarBorderPurple500Icon/>
      </ListItem>
    );
  });


  return (
    <>
      <Div>Favourite Page</Div>
      <List dense={true}>
       {(favNews.length) ? renderFaveList : <h2>No Data</h2>}
      </List>
    </>
  );
};

export default FavouriteList;
