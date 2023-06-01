import React, { useState } from "react";
import { TextField, Button, Container, Box } from "@mui/material";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useDispatch } from "react-redux";

import { updHistory } from "redux/history/history-operation";

const initialState = {
  name: "",
  email: "",
  address: "",
  phone: "",
};

function UserInfo({ ordering, count }) {
  const [state, setState] = useState(initialState);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setState((prevState) => ({
      ...prevState,
      email: value,
    }));

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailRegex.test(value));
  };

  const handlePhoneChange = (event) => {
    const value = event.target.value;
    setState((prevState) => ({
      ...prevState,
      phone: value,
    }));

    const phoneRegex = /^\d{12}$/;
    setPhoneError(!phoneRegex.test(value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (ordering.length === 0) {
      Notify.info("Take your orders");
    }
    if (
      state.name.trim() === "" ||
      state.address.trim() === "" ||
      state.email.trim() === "" ||
      state.phone.trim() === ""
    ) {
      Notify.warning("Fill in information about yourself");
    }

    dispatch(
      updHistory({
        ...state,
        ordering,
      })
    );
    setState(initialState);
    Notify.success("Your order send");
  };

  return (
    <Container style={{ border: "1px solid black", width: "fit-content" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Address"
          value={state.address}
          onChange={(event) =>
            setState((prevState) => ({
              ...prevState,
              address: event.target.value,
            }))
          }
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          value={state.email}
          onChange={handleEmailChange}
          fullWidth
          margin="normal"
          required
          error={emailError}
          helperText={emailError ? "Enter a valid email address" : ""}
        />
        <TextField
          label="Phone"
          value={state.phone}
          onChange={handlePhoneChange}
          fullWidth
          margin="normal"
          required
          error={phoneError}
          helperText={phoneError ? "Enter a valid phone number" : ""}
        />
        <TextField
          label="Name"
          value={state.name}
          onChange={(event) =>
            setState((prevState) => ({
              ...prevState,
              name: event.target.value,
            }))
          }
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Send
        </Button>
      </form>
      {count && (
        <Box
          sx={{
            border: "1px solid black",
            borderRadius: "5px",
            width: "fit-content",
            padding: "8px",
            marginTop: "10px",
          }}
        >
          total: {count}
        </Box>
      )}
    </Container>
  );
}

export default UserInfo;
