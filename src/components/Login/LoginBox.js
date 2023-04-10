import { Button, Container } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { useNewsCrud } from "../../context/NewsCRUDContext";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
function LoginBox() {
  const {
    setIsLoggedIn,
    LOCAL_STORAGE_KEY_AUTH,
    LOCAL_STORAGE_KEY_USER,
    userName,
  } = useNewsCrud();
  let navigate = useNavigate();
  const datalocal = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_USER));

  const logIn = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get("name") === datalocal.name) {
      setIsLoggedIn(true);
      localStorage.setItem(LOCAL_STORAGE_KEY_AUTH, true);
      let path = `/home`;
      navigate(path);
    } else {
      console.log("wrong");
    }
  };
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <div>
          <Box component="form" onSubmit={logIn}>
            <TextField
              fullWidth
              id="name"
              name="name"
              required
              label="Name"
            ></TextField>

            <TextField
              fullWidth
              required
              label="Password"
              type="password"
            ></TextField>

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              type="submit"
            >
              Click Me
            </Button>
          </Box>
        </div>
      </Box>
    </Container>
  );
}

export default LoginBox;
