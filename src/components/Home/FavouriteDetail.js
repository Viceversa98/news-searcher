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

const FavouriteDetail =()=>{

}

export default FavouriteDetail;