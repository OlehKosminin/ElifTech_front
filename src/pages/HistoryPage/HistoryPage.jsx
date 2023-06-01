import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, TextField, Button, Box, List } from "@mui/material";

import {
  Form,
  Photo,
  Item,
  ProductItem,
  ProductInfoWraper,
} from "./History.styled";

import {
  getAllHistory,
  getHistoryByNumber,
} from "redux/history/history-operation";

const HistoryPage = () => {
  const [number, setNumber] = useState("380");
  console.log("number: ", number);
  const [phoneError, setPhoneError] = useState(true);
  const items = useSelector((store) => store.history.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHistory());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("number: ", number);
    dispatch(getHistoryByNumber(number));
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setNumber(value);
    const phoneRegex = /^\d{12}$/;
    setPhoneError(!phoneRegex.test(value));
  };

  const markup = items.map((item) => {
    console.log("item: ", item);
    const price = item.ordering.reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );
    const markup = item.ordering.map((item) => {
      return (
        <ProductItem>
          <Photo> photo</Photo>
          <ProductInfoWraper>
            <p>{item.title}</p>
            <p>Price: {item.price}</p>
            <p>Count: {item.count}</p>
          </ProductInfoWraper>
        </ProductItem>
      );
    });

    return (
      <Item key={item._id}>
        {markup}
        <p>Total price: "{price}"</p>
      </Item>
    );
  });

  return (
    <Container
      sx={{
        textAlign: "center",
        padding: "10px",
      }}
    >
      <Form onSubmit={handleSubmit}>
        <TextField
          label="Number"
          value={number}
          onChange={(event) => {
            handlePhoneChange(event);
          }}
          fullWidth
          margin="normal"
          variant="outlined"
          sx={{ width: "95%" }}
          error={phoneError}
          helperText={phoneError ? "Enter a valid phone number" : ""}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ textAlign: "center" }}
          disabled={phoneError ? true : false}
        >
          Search
        </Button>
      </Form>
      <Box sx={{ border: "1px solid black" }}>
        <List>{markup}</List>
      </Box>
    </Container>
  );
};
export default HistoryPage;
