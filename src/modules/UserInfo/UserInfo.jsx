import { List, ListItem, Container, Box } from "@mui/material";
import UserForm from "../UserForm/UserForm";
import Map from "modules/Map/Map";
const UserInfo = () => {
  return (
    <Container sx={{ border: "1px solid black" }}>
      <Box>
        <Map />
      </Box>

      <Box>
        <UserForm />
      </Box>
    </Container>
  );
};
export default UserInfo;
