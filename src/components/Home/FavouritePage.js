import React from "react";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderOutlined";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";

function generate(element) {
  return [0, 1, 2, 3].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(0),
}));

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const FavouritePage = () => {
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);

  return (
    <>
      <Div>Favourite    Page</Div>
      <Demo>
        <List dense={dense}>
          {generate(
            <ListItem>
              <ListItemText
                primary="Single-line item"
                secondary={secondary ? "Secondary text" : null}
              />
              <ListItemIcon>
                <StarBorderPurple500Icon />
              </ListItemIcon>
            </ListItem>
          )}
        </List>
      </Demo>
    </>
  );
};

export default FavouritePage;
