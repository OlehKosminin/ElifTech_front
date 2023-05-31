import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  TextField,
  Button,
  Box,
  List,
  ListItem,
} from "@mui/material";

import { Form } from "./History.styled";

import { getAllHistory } from "redux/history/history-operation";

const HistoryPage = () => {
  const [number, setNumber] = useState("380");
  const items = useSelector((store) => store.history.orders);
  console.log("history: ", items);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHistory());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
  };

  const markup = items.map((item) => {
    console.log("item: ", item);
    const orders = item.orders.map(({ id, price, count }) => {
      return <div></div>;
    });

    return (
      <ListItem key={item._id}>
        <p>price: "{item.price}"</p>
      </ListItem>
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
            setNumber(event.target.value);
          }}
          fullWidth
          margin="normal"
          variant="outlined"
          sx={{ width: "95%" }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ textAlign: "center" }}
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
