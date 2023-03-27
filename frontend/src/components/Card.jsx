import React, { useState, useContext } from "react";
import UserContext from "../UserContex";

const Card = ({ el, cartData, addTransaction }) => {
  const {
    total,
    setTotal,
    setQuantity1,
    quantity1,
    final,
    setFinalData,
    quantityPatch,
    setQuantityPatch,
  } = useContext(UserContext);

  return (
    <>
      <div key={el.itemName} className="card" style={{ width: "18rem" }}>
        <img
          style={{ width: "18rem", height: "18rem" }}
          className="card-img-top"
          src={el.image}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">
            {el.product_name} - {el.brand_name}
          </h5>
          <p className="card-text">Price : {el.per_piece_price}Rs</p>
          <button
            onClick={() => {
              addTransaction(el);
              cartData(el);
              setQuantity1(quantity1++);
            }}
            className="btn btn-dark"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
