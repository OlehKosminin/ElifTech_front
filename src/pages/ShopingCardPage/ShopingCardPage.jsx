import { Container } from "@mui/material";
import { useState } from "react";
import UserInfo from "modules/UserInfo/UserInfo";
import OrderList from "modules/OrderList/OrderList";
import { Box } from "@mui/system";

const ShopingCardPage = ({ order }) => {
  const [ordering, setOrdering] = useState();
  const [count, setCount] = useState();
  return (
    <Container
      sx={{
        display: "flex",
        paddingBottom: 20,
        alignContent: "stretch",
      }}
    >
      <UserInfo ordering={ordering} count={count} />
      <OrderList order={order} count={setCount} setOrdering={setOrdering} />
    </Container>
  );
};
export default ShopingCardPage;
