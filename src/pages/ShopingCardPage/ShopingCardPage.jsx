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
      <UserInfo ordering={ordering} />
      <OrderList order={order} count={setCount} setOrdering={setOrdering} />
      {count && <Box>total: {count}</Box>}
    </Container>
  );
};
export default ShopingCardPage;
