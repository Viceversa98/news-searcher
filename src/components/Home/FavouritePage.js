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



const FavouritePage = () => {
  const {news,LOCAL_STORAGE_KEY,favNews,setFavNews} = useNewsCrud();
  
  useEffect(()=>{
    const retriveNews = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveNews) {
      setFavNews(retriveNews);
    }
  })

  useEffect(() => {
    if (news.length)
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(news));
  });

  const renderFaveList = favNews.map((fave) => {
   
    return (
      <ListItem>
        <ListItemText primary={fave} key={fave}/> <StarBorderPurple500Icon/>
      </ListItem>
    );
  });


  return (
    <>
      <Div>Favourite Page</Div>
      <List dense={true}>
      {favNews.length ? {renderFaveList}: <h2>No data</h2>}
      </List>
    </>
  );
};

export default FavouritePage;
