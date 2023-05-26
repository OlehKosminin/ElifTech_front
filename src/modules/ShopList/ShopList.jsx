import { List, ListItem, Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "redux/shop/shop-operation";
const ShopList = ({ setOrder }) => {
  const items = useSelector((store) => store.shops.products);
  const [orders, setOrders] = useState([]);

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    setOrder(orders);
  }, [orders, setOrder]);

  useEffect(() => {
    dispatch(getProducts(params));
  }, [params]);

  const addToOrder = (data) => {
    const { _id } = data;
    const isDuplicate = orders.some((order) => order._id === _id);
    if (!isDuplicate) {
      setOrders((prevState) => [...prevState, data]);
    }
  };

  const markup = items.map(({ _id, title, price, shop }) => {
    return (
      <ListItem key={_id} style={{ display: "block" }}>
        <Box
          sx={{
            width: 150,
            height: 100,
            backgroundColor: "tomato",
            marginBottom: 2,
          }}
        >
          Image Url {shop}
        </Box>
        <Box sx={{ marginBottom: 2 }}>{title}</Box>
        <Box sx={{ marginBottom: 2 }}>price {price}</Box>
        <Button
          variant="outlined"
          onClick={() => {
            addToOrder({ _id });
          }}
        >
          buy
        </Button>
      </ListItem>
    );
  });
  return (
    <List
      sx={{
        display: "grid",
        gap: 5,
        gridTemplateColumns: "repeat(3,1fr)",
        border: "1px solid black",
        overflow: "auto",
      }}
    >
      {markup}
    </List>
  );
};
export default ShopList;
