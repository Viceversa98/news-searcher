import React from "react";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderOutlined";
import { useNewsCrud } from "../../context/NewsCRUDContext";
import { IconButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const FavouriteDetail = (props) => {
  const deleteFave = () => {
    console.log(id);
    removeFave(id);
    localStorage.removeItem(props.fave);
    console.log("the id is" + id + " deleted");
  };

  const { removeFave } = useNewsCrud();
  const { id, author, url, title } = props.fave;
  return (
    <>
      <Link to={url}>
        <ListItemText primary={<b>{title}</b>} secondary={author} />
      </Link>
      <IconButton key={id} onClick={deleteFave}>
        <StarBorderPurple500Icon />
      </IconButton>
    </>
  );
};

export default FavouriteDetail;
