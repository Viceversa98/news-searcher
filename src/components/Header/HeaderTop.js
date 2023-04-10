import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import { useNewsCrud } from "../../context/NewsCRUDContext";
import { useNavigate } from "react-router-dom";
function HeaderTop() {
  const { retriveNews,setIsLoggedIn,LOCAL_STORAGE_KEY_AUTH } = useNewsCrud();
  const [searchValue, setSearhValue] = useState("");
  let navigate = useNavigate();
  const onUserSearch = async (e) => {
    try {
      const makeSearch = await retriveNews(e.target.value);
      console.log(makeSearch);
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () =>{
    setIsLoggedIn(false)
    localStorage.setItem(LOCAL_STORAGE_KEY_AUTH, false);
   let path = `/login`;
   navigate(path);
  }

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
          <Button color="inherit" onClick={logOut}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default HeaderTop;
