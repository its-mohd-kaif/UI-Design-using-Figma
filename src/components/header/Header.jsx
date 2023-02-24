import React from "react";
import logo from "../../images/Logo.png";
function Header() {
  // Header Component
  return (
    <section>
      <center>
        <div className="d-flex justify-content-between header">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <span style={{ color: "#4F4F4F" }}>Already have an account?</span>
            <span style={{ color: "#2F80ED", marginLeft: "8px" }}>Sign in</span>
          </div>
        </div>
      </center>
    </section>
  );
}

export default Header;
