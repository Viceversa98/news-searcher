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
  const { favNews, setFavNews } = useNewsCrud();
  const { author, title, urlToImage } = props.news;
  const LOCAL_STORAGE_KEY = "Favourite";

  const updateMyFavourites = () => {
    setFavNews([...favNews, { id: uuid(), ...props.news }]);
    if (favNews.length) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favNews));
    }
  };

  useEffect(() => {
    const getAllFav = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (getAllFav) {
      setFavNews(getAllFav);
    }
  }, []);
  return (
    <Card>
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
          <IconButton>
            <FavoriteIcon onClick={() => updateMyFavourites()} />
          </IconButton>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NewsDetail;
