import { Button, Container } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { useNewsCrud } from "../../context/NewsCRUDContext";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";

function LoginBox() {
  const { setIsLoggedIn, LOCAL_STORAGE_KEY_AUTH, LOCAL_STORAGE_KEY_USER } =
    useNewsCrud();
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
      alert("You have insert wrong username");
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
        <Paper
          container
          elevation={3}
          sx={{
            padding:4,
            opacity: 0.8,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
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
        </Paper>
      </Box>
    </Container>
  );
}

export default LoginBox;
