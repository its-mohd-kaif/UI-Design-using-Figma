import { TextField } from "@mui/material";
import React from "react";
import pm1 from "../../images/pm-1.png";
import pm2 from "../../images/pm-2.png";
import pm3 from "../../images/pm-3.png";
import pm4 from "../../images/pm-4.png";
import pm5 from "../../images/pm-5.png";
import pm6 from "../../images/pm-6.png";
function PaymentMethod() {
  // Payment Method Component
  return (
    <section style={{ marginTop: "20px" }}>
      <main className="cardContainer">
        <div
          style={{
            fontSize: "16px",
            fontWeight: "700",
            marginBottom: "34px",
          }}
        >
          Payment Method
        </div>
        <div className="cardContainer__item unselectDiv d-flex">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
          <label
            className="form-check-label radioLabel"
            htmlFor="flexRadioDefault2"
          >
            PayPal
          </label>
          <div className="fadeText">
            <span>
              You will be redirected to the PayPal website after submitting your
              order
            </span>
          </div>
          <span>
            <img src={pm1} alt="img 1" />
          </span>
        </div>
        <section
          style={{ marginTop: "15px" }}
          className="cardContainer-background"
        >
          <div className="cardContainer__item d-flex">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              defaultChecked
            />
            <label
              className="form-check-label radioLabel"
              htmlFor="flexRadioDefault2"
            >
              Pay with Credit Card
            </label>
            <span className="paymentCards">
              <img src={pm2} alt="pm2" />
              <img style={{ marginLeft: "2px" }} src={pm3} alt="pm3" />
              <img style={{ marginLeft: "2px" }} src={pm4} alt="pm4" />
              <img
                style={{ marginLeft: "2px", marginRight: "13px" }}
                src={pm5}
                alt="pm5"
              />
            </span>
          </div>
          <main style={{ padding: "15px" }}>
            <TextField
              style={{ marginTop: "15px" ,marginRight:"18px"}}
              className="inputField"
              id="outlined-controlled"
              label="Card number"
              defaultValue="1234 5678 9101 3456"
            />
            <TextField
              style={{ marginTop: "15px" }}
              className="inputField"
              id="outlined-uncontrolled"
              label="Expiration Date"
              defaultValue="MM/YY"
            />
            <TextField
              style={{ marginTop: "30px" }}
              className="inputField"
              id="outlined-controlled"
              label="Card Security Code"
              defaultValue="***"
            />
            <div style={{ margin: "42px 0 0 18px", display: "inline-flex" }}>
              <span className="text-primary" style={{ fontSize: "12px" }}>
                What is this?
              </span>
            </div>
          </main>
        </section>
        <div style={{ margin: "20px 0px" }}>
          <img src={pm6} alt="lock-img" style={{ marginRight: "10px" }}></img>
          <span className="text-muted" style={{ fontSize: "12px" }}>
            We protect your payment information using encryption to provide
            bank-level security.
          </span>
        </div>
      </main>
    </section>
  );
}

export default PaymentMethod;
