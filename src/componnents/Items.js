import React from "react";
import Product from "./Product";
import data from "../products";
const Items = (props) => {
  const { count, setCartCount } = props;
  const handleClick = () => {
    setCartCount(count + 1);
  };

  console.log(data);
  return (
    <div className="item0">
      <div className="item1">
        <div className="item2">
          <input
            type=""
            onChange={() => {
              console.log("changed");
            }}
            name=""
            value=""
            placeholder="Search Item"
          />
        </div>

        <div className="card0">
          {data.map((prod) => {
            return (
              <Product
                cartItems={props.cartItems}
                setCartItems={props.setCartItems}
                key={prod.id}
                details={prod}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Items;
