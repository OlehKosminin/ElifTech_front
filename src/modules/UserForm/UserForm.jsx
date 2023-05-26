import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    console.table(
      "name :",
      name,
      "email :",
      email,
      "address :",
      address,
      "phone :",
      phone
    );

    event.preventDefault();
  };

  return (
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
  );
}

export default UserForm;
