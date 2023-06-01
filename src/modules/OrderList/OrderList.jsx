import { List, ListItem, Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsById } from "redux/shop/shop-operation";

const OrderList = ({ order, count, setOrdering }) => {
  const [state, setState] = useState([]);
  const items = useSelector((store) => store.shops.orders);
  console.log("items: ", items);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsById(order));
  }, [dispatch, order]);

  useEffect(() => {
    const totalPrice = state.reduce(
      (accumulator, item) => accumulator + item.price * item.count,
      0
    );
    count(totalPrice);
    setOrdering(state);
  }, [count, setOrdering, state]);

  const addToTotalPrice = (id, title, price, shop) => {
    const existingItem = state.find((item) => item.id === id);
    if (existingItem) {
      const updatedItem = { ...existingItem, count: existingItem.count + 1 };
      setState((prevState) =>
        prevState.map((item) => (item.id === id ? updatedItem : item))
      );
    }
    setState((prevState) => [
      ...prevState,
      { id, price, title, shop, count: 1 },
    ]);
  };

  const subtractFromTotalPrice = (id, title, price, shop) => {
    const existingItem = state.find((item) => item.id === id);
    if (existingItem) {
      if (existingItem.count === 1) {
        setState((prevState) => prevState.filter((item) => item.id !== id));
      }
      const updatedItem = { ...existingItem, count: existingItem.count - 1 };
      setState((prevState) =>
        prevState.map((item) => (item.id === id ? updatedItem : item))
      );
    }
  };

  const markup = items.map(({ _id, title, price, shop }) => (
    <ListItem key={_id} style={{ display: "block" }}>
      <Box
        sx={{
          width: 150,
          height: 100,
          backgroundColor: "silver",
          marginBottom: 2,
        }}
      >
        Image Url {shop}
      </Box>
      <Box sx={{ marginBottom: 2 }}>{title}</Box>
      <Box sx={{ marginBottom: 2 }}>price {price}</Box>
      <Button onClick={() => addToTotalPrice(_id, title, price, shop)}>
        +
      </Button>
      {count}
      <Button onClick={() => subtractFromTotalPrice(_id, title, price, shop)}>
        -
      </Button>
    </ListItem>
  ));
  return (
    <>
      <List
        sx={{
          display: "grid",
          gap: 5,
          gridTemplateColumns: "repeat(2,1fr)",
          border: "1px solid black",
          overflow: "auto",
          width: "100%",
        }}
      >
        {order.length === 0 ? (
          <div
            style={{
              fontSize: "40px",
              textAlign: "center",
              margin: "auto",
            }}
          >
            Take your order
          </div>
        ) : (
          markup
        )}
      </List>
    </>
  );
};

export default OrderList;
