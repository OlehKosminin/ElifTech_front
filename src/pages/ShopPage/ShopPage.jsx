import ShopsNav from "modules/ShopsNav/ShopsNav";
import ShopList from "modules/ShopList/ShopList";
import { Container } from "@mui/material";

const ShopPage = ({ setOrder }) => {
  return (
    <Container
      sx={{
        display: "flex",
        height: "100vh",
        paddingBottom: 20,
        alignContent: "stretch",
      }}
    >
      <ShopsNav></ShopsNav>
      <ShopList setOrder={setOrder}></ShopList>
    </Container>
  );
};
export default ShopPage;
