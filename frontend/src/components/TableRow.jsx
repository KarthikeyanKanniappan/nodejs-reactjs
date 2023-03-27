import React, { useState, useContext, useEffect } from "react";
import UserContext from "../UserContex";

const TableRow = ({ el, index }) => {
  const {
    total,
    setTotal,
    setQuantity1,
    quantity1,
    dataCart,
    setDataCart,
    quantityPatch,
    setQuantityPatch,
    final,
    setFinalData,
  } = useContext(UserContext);

  const [quantity, setQuantity] = useState(1);

  {
    el["Quantity"] = quantity;
  }

  function removeData(name) {
    let refined = [];
    for (let i = 0; i < dataCart.length; i++) {
      if (dataCart[i].product_name !== name) {
        refined.push(dataCart[i]);
      }
    }
    setDataCart(refined);
  }
  {
    if (!quantity) {
      let name = el.product_name;
      removeData(name);
    }
  }
  return (
    <>
      <th>{index + 1}</th>
      <td>{el.product_name}</td>
      <td>
        <img
          style={{ width: "50px", height: "50px" }}
          src={el.image}
          alt="imag"
        />
      </td>
      <td>{el.per_piece_price}</td>
      <td className="text-center">
        <button
          onClick={() => {
            setQuantity1(quantity1 + 1);
            setQuantity(quantity + 1);
            setTotal([...total, +el.per_piece_price]);
            el["Quantity"] = quantity;
            // fetchData();
          }}
          className="btn btn-dark"
        >
          +
        </button>
        <h6>{quantity}</h6>
        <button
          onClick={() => {
            setQuantity1(quantity1 - 1);
            setQuantity(quantity - 1);
            setTotal([...total, -el.per_piece_price]);
            el["Quantity"] = quantity;
            setQuantityPatch([...quantityPatch, el]);
            // fetchData();
          }}
          className={quantity <= 0 ? "btn btn-dark disabled" : "btn btn-dark"}
        >
          -
        </button>
      </td>
      <td>{+el.per_piece_price * quantity}</td>
    </>
  );
};

export default TableRow;
