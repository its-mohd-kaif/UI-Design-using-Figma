import { TextField } from "@mui/material";
import React from "react";
import up from "../../images/up.png";
import logo from "../../images/norton.png";
function BillingSummary() {
  // Billing Summary Component
  return (
    <section style={{ marginTop: "15px" }}>
      <main className="cardContainer2">
        <div className="d-flex justify-content-between">
          <div
            style={{
              fontSize: "16px",
              fontWeight: "700",
            }}
          >
            Billing Summary
          </div>
          <div>
            <img src={up} alt="down" />
          </div>
        </div>
        <div>
          <table style={{ marginTop: "29px" }}>
            <tbody>
              <tr>
                <td className="tblLeftTxt">Subtotal</td>
                <td className="tblRightTxt">$3720,27</td>
              </tr>
              <tr>
                <td className="tblLeftTxt">Discount</td>
                <td className="tblRightTxt">-$749.99</td>
              </tr>
              <tr>
                <td className="tblLeftTxt">Warranty (Platinum)</td>
                <td className="tblRightTxt">$259.99</td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: "12px",
                    color: "#2F80ED",
                    marginTop: "-20px",
                  }}
                >
                  Remove
                </td>
              </tr>
              <tr>
                <td className="tblLeftTxt">Shipping</td>
                <td className="tblRightTxt">$0.00</td>
              </tr>
              <tr>
                <td className="tblLeftTxt">Tax</td>
                <td className="tblRightTxt">$228.72</td>
              </tr>
            </tbody>
          </table>
          <hr></hr>
          <div
            style={{ fontSize: "16px", fontWeight: "700" }}
            className="d-flex justify-content-between"
          >
            <div>Grand Total</div>
            <div>$3,439.00</div>
          </div>
          <div>
            <TextField
              id="outlined-controlled"
              label="Order Comment"
              value="Type here.."
              sx={{ marginTop: "33px", width: "328px", height: "65px" }}
            />
          </div>
          <span className="text-muted" style={{ fontSize: "14px" }}>
            <input
              type="checkbox"
              defaultChecked
              style={{ marginRight: "11px", marginTop: "15px" }}
            />
            Please check to acknowledge our{" "}
            <a href="#0" style={{ textDecoration: "none" }}>
              Privacy and{" "}
              <span style={{ marginLeft: "25px" }}>TermsPolicy</span>
            </a>
          </span>
          <button className="payBtn">Pay $3,439.00</button>
          <div style={{ textAlign: "center", marginTop: "17.94px" }}>
            <img src={logo} alt="norton" />
          </div>
        </div>
      </main>
    </section>
  );
}

export default BillingSummary;
