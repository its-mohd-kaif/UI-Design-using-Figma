import React from "react";
import down from "../../images/down.png";
function Discount() {
  // Discount Component
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
            Discount Codes
          </div>
          <div>
            <img src={down} alt="down" />
          </div>
        </div>
      </main>
    </section>
  );
}

export default Discount;
