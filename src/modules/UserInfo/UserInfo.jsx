import React, { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const initialState = {
  name: "",
  email: "",
  address: "",
  phone: "",
};

function UserInfo({ ordering }) {
  const [state, setState] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (ordering.length === 0) {
      Notify.info("Take your orders");
    }
    if (state.name || state.address || state.email || state.phone === "") {
      if (ordering.length === 0) {
        Notify.warning("Fill in information about yourself");
      }
    }
    console.log({
      ...state,
      ordering,
    });
  };

  return (
    <Container style={{ border: "1px solid black" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Address"
          onChange={(event) =>
            setState((PrevState) => ({
              ...PrevState,
              address: event.target.value,
            }))
          }
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          onChange={(event) =>
            setState((PrevState) => ({
              ...PrevState,
              email: event.target.value,
            }))
          }
          fullWidth
          margin="normal"
        />
        <TextField
          label="Phone"
          onChange={(event) =>
            setState((PrevState) => ({
              ...PrevState,
              phone: event.target.value,
            }))
          }
          fullWidth
          margin="normal"
        />
        <TextField
          label="Name"
          onChange={(event) =>
            setState((PrevState) => ({
              ...PrevState,
              name: event.target.value,
            }))
          }
          fullWidth
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          // disabled={}
        >
          send
        </Button>
      </form>
    </Container>
  );
}

export default UserInfo;
