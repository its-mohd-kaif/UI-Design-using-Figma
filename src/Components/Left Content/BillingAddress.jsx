import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// Billing Address Container
function BillingAddress() {
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "California",
      label: "California",
    },
  ];
  return (
    // Form Display
    <>
      <section style={{ marginTop: "46.5px" }}>
        <main className="cardContainer">
          <div
            style={{
              fontSize: "16px",
              fontWeight: "700",
              marginBottom: "34px",
            }}
          >
            Billing Address
          </div>
          <TextField
            style={{ width: "255px" }}
            id="outlined-controlled"
            label="First Name"
            defaultValue="Alex"
          />
          <TextField
            style={{ width: "255px", marginLeft: "18px" }}
            id="outlined-uncontrolled"
            label="Last Name"
            defaultValue="Driver"
          />
          <TextField
            style={{ width: "528px", marginTop: "30px" }}
            id="outlined-uncontrolled"
            label="Email Address"
            defaultValue="username@gmail.com"
          />
          <TextField
            style={{ width: "528px", marginTop: "15px" }}
            id="outlined-uncontrolled"
            label="Street Address"
            defaultValue=" "
          />
          <TextField
            style={{ width: "528px", marginTop: "15px" }}
            id="outlined-uncontrolled"
          />

          <TextField
            style={{ width: "255px", marginTop: "30px" }}
            id="outlined-select-currency"
            select
            label="State/Province"
            defaultValue="California"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            style={{ width: "255px", marginLeft: "18px", marginTop: "30px" }}
            id="outlined-uncontrolled"
            label="City"
            defaultValue="San Diego"
          />
          <TextField
            style={{ width: "255px", marginTop: "30px" }}
            id="outlined-controlled"
            label="Zip/Postal Code"
            defaultValue="22434"
          />
          <TextField
            style={{ width: "255px", marginLeft: "18px", marginTop: "30px" }}
            id="outlined-uncontrolled"
            label="Phone"
            defaultValue="+ 123 456 789 111"
          />
          <FormControlLabel
            style={{ marginTop: "22px" }}
            control={<Checkbox defaultChecked name="gilad" />}
            label="My billing and shipping address are the same"
          />
          <FormControlLabel
            style={{ marginTop: "10px" }}
            control={<Checkbox name="gilad" />}
            label="Create an account for later use"
          />
        </main>
      </section>
    </>
  );
}

export default BillingAddress;
