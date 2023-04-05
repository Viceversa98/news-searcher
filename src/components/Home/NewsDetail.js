import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNewsCrud } from "../../context/NewsCRUDContext";

const NewsDetail = (props) => {
  const {favNews,setFavNews} = useNewsCrud();
  const { author, title, urlToImage } = props.news;
  
  const updateMyFavourites = () => {
   setFavNews(props.news);
   console.log(favNews);
  }
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
          <IconButton >
            <FavoriteIcon onClick={() => updateMyFavourites()} />
          </IconButton>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NewsDetail;
