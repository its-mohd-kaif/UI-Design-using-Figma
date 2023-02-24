import React from "react";
import img1 from "../../images/ship-img1.png";
import img2 from "../../images/ship-img2.png";
function ShippingMethod() {
  // Shipping Method Component
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
          Shipping Method
        </div>
        <div className="cardContainer__item cardContainer-background d-flex">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault1"
            id="flexRadioDefault1"
            defaultChecked
          />
          <label
            className="form-check-label radioLabel"
            htmlFor="flexRadioDefault1"
          >
            $ 2.99
          </label>
          <div className="fadeText">
            <span>USPS 1st Class With Tracking</span>
            <aside>(5 - 13 days) COVID19 Delay</aside>
          </div>
          <span>
            <img src={img1} alt="img 1" />
          </span>
        </div>

        <div className="cardContainer__item unselectDiv d-flex">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault1"
            id="flexRadioDefault1"
          />
          <label
            className="form-check-label radioLabel"
            htmlFor="flexRadioDefault1"
          >
            $ 9.00
          </label>
          <div className="fadeText">
            <span>USPS PRIORITY With Tracking</span>
            <aside>(5 - 10 days) COVID19 Delay</aside>
          </div>
          <span>
            <img src={img2} alt="img 2" />
          </span>
        </div>
      </main>
    </section>
  );
}

export default ShippingMethod;
