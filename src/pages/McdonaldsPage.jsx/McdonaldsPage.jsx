import { List, ListItem, Box, Button } from "@mui/material";
import { Image } from "mui-image";
import { useEffect, useState } from "react";
import faceApi from "./fake-api";
const McdonaldsPage = () => {
  const [items, setItems] = useState();
  useEffect(() => {}, []);
  const markup = faceApi.map(({ id, title, components }) => {
    return (
      <ListItem key={id}>
        <Image src="" />
        <Box></Box>
        <Box></Box>
        <Button
          variant="outlined"
          onClick={() => {
            alert("clicked");
          }}
        >
          Outlined
        </Button>
      </ListItem>
    );
  });
  return <List sx={{ border: "1px solid black" }}> {markup}</List>;
};
export default McdonaldsPage;
