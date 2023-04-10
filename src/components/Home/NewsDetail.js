import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNewsCrud } from "../../context/NewsCRUDContext";
import { v4 as uuid } from "uuid";

const NewsDetail = (props) => {
  const { favNews, setFavNews, LOCAL_STORAGE_KEY } = useNewsCrud();

  const { author, title, urlToImage } = props.new;

  const updateMyFavourites = async () => {
    setFavNews([...favNews, { id: uuid(), ...props.new }]);
    if (favNews.length) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favNews));
    }
  };

  return (
    <Card key={favNews.id}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={urlToImage}
          alt="picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
          <IconButton onClick={() => updateMyFavourites()}>
            <FavoriteIcon />
          </IconButton>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NewsDetail;
