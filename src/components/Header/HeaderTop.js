import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import { useNewsCrud } from "../../context/NewsCRUDContext";
const HeaderTop = () => {
  const { searchHandler ,retriveNews} = useNewsCrud();
  const [searchValue, setSearhValue] = useState("");

  const onUserSearch = (e) => {
    try {
     
      searchHandler(e.target.value);
      
    } catch (error) {
      console.log(error)
    }
   
  };

  useEffect(()=>{
    console.log("change happen")
    retriveNews();
  },[ searchValue])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar disableGutters>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="button" component="div" sx={{ flexGrow: 1 }}>
            News Finder
          </Typography>
          Search:
          <TextField
            id="filled-search"
            label="Search field"
            type="text"
            variant="filled"
            onChange={(searchvalue) => setSearhValue(searchvalue.target.value)}
          />
          <Button
            variant="contained"
            value={searchValue}
            onClick={(e) => onUserSearch(e)}
          >
            Search
          </Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default HeaderTop;
