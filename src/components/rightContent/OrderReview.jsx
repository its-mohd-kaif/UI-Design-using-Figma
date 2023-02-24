import React from "react";
import down from "../../images/down.png";
function OrderReview() {
  // Order Review Component
  return (
    <section style={{ marginTop: "46.5px" }}>
      <main className="cardContainer2">
        <div className="d-flex justify-content-between">
          <div
            style={{
              fontSize: "16px",
              fontWeight: "700",
            }}
          >
            Order Review
          </div>
          <div>
            <img src={down} alt="down" />
          </div>
        </div>
        <div style={{ marginTop: "4px", fontSize: "12px" }}>
          3 items in card
        </div>
      </main>
    </section>
  );
}

export default OrderReview;
