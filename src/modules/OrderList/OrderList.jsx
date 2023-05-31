import { List, ListItem, Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsById } from "redux/shop/shop-operation";

const OrderList = ({ order, count, setOrdering }) => {
  const [state, setState] = useState([]);
  const items = useSelector((store) => store.shops.orders);

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

  const addToTotalPrice = (price, id) => {
    const existingItem = state.find((item) => item.id === id);
    if (existingItem) {
      const updatedItem = { ...existingItem, count: existingItem.count + 1 };
      setState((prevState) =>
        prevState.map((item) => (item.id === id ? updatedItem : item))
      );
    } else {
      setState((prevState) => [...prevState, { id, price, count: 1 }]);
    }
  };

  const subtractFromTotalPrice = (price, id) => {
    const existingItem = state.find((item) => item.id === id);
    if (existingItem) {
      if (existingItem.count === 1) {
        setState((prevState) => prevState.filter((item) => item.id !== id));
      } else {
        const updatedItem = { ...existingItem, count: existingItem.count - 1 };
        setState((prevState) =>
          prevState.map((item) => (item.id === id ? updatedItem : item))
        );
      }
    }
  };

  const markup = items.map(({ _id, title, price, shop }) => {
    const item = state.find((item) => item.id === _id);
    const count = item ? item.count : 0;

    return (
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
        <Button onClick={() => addToTotalPrice(price, _id)}>+</Button>
        {count}
        <Button onClick={() => subtractFromTotalPrice(price, _id)}>-</Button>
      </ListItem>
    );
  });

  return (
    <>
      <List
        sx={{
          display: "grid",
          gap: 5,
          gridTemplateColumns: "repeat(2,1fr)",
          border: "1px solid black",
          overflow: "auto",
        }}
      >
        {order.length === 0 ? <div>Take your order</div> : markup}
      </List>
    </>
  );
};

export default OrderList;
