import items from "./items";
import { NavLink, useLocation } from "react-router-dom";
import { List, ListItem } from "@mui/material";

const Navbar = () => {
  const location = useLocation();

  const isActive = (link) => {
    return link === location.pathname;
  };

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
          style={
            isActive(link)
              ? {
                  textDecoration: "none",
                  backgroundColor: "tomato",
                  borderRadius: 10,
                }
              : { textDecoration: "none" }
          }
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
