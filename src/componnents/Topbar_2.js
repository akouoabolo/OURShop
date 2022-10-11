import React from "react";

const Topbar2 = (props) => {
  return (
    <div className="shop">
      <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
        OUR<span style={{ color: "red" }}>Shop</span>
      </h1>

      <div className="top1">
        <a href="#" className="active" style={{ marginRight: "15px" }}>
          Home
        </a>
        <a href="#" style={{ marginRight: "15px" }}>
          promotion
        </a>
        <a href="#" style={{ marginRight: "15px" }}>
          Contact
        </a>
      </div>
      <div className="bask">
        <i className="fa-sharp fa-solid fa-cart-shopping">
          <span id="count"> {props.count} </span>
        </i>
      </div>
    </div>
  );
};

export default Topbar2;
