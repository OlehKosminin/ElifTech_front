import { List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import items from "./items";
const ShopsNav = () => {
  const markup = items.map(({ id, text, link }) => {
    return (
      <ListItem key={id}>
        <Link to={link}>{text}</Link>
      </ListItem>
    );
  });
  return <List sx={{ border: "1px solid black" }}> {markup}</List>;
};
export default ShopsNav;
