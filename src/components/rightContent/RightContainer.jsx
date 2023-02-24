import React from "react";
import OrderReview from "./OrderReview";
import "../style/Right.css";
import Discount from "./Discount";
import BillingSummary from "./BillingSummary";
function RightContainer() {
  // Main Right Side Component
  return (
    <>
      <section>
        <OrderReview />
        <Discount />
        <BillingSummary />
      </section>
    </>
  );
}

export default RightContainer;
