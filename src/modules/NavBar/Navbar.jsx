import items from "./items";
import { NavLink } from "react-router-dom";
import { List, ListItem } from "@mui/material";

const Navbar = () => {
  const markup = items.map(({ id, text, link }) => {
    return (
      <ListItem
        key={id}
        sx={{
          color: "tomato",
          fontSize: "30px",
        }}
      >
        <NavLink
          to={link}
          style={{
            textDecoration: "none",
          }}
          activeStyle={{
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          {text}
        </NavLink>
      </ListItem>
    );
  });
  return (
    <List sx={{ display: "flex", justifyContent: "flex-start" }}>{markup}</List>
  );
};

export default Navbar;
