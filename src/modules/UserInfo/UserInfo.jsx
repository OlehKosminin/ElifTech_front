import React, { useState } from "react";
import { TextField, Button, Container } from "@mui/material";

function UserInfo({ ordering }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      name,
      email,
      address,
      phone,
      ordering,
    });
  };

  return (
    <Container style={{ border: "1px solid black" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary">
          send
        </Button>
      </form>
    </Container>
  );
}

export default UserInfo;
