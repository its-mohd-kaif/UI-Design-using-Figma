import React from "react";
import BillingAddress from "./BillingAddress";
import "../Style/Left.css";
import ShippingMethod from "./ShippingMethod";
import PaymentMethod from "./PaymentMethod";
function LeftContainer() {
  // Main Left Side Container
  return (
    <>
      <section>
        <BillingAddress />
        <ShippingMethod />
        <PaymentMethod />
      </section>
    </>
  );
}

export default LeftContainer;
