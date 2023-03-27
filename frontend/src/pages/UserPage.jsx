import React, { useState, useContext, useEffect } from "react";
import Dashboard from "../components/Dashboard";
import UserInterface from "../components/UserInterface";
import UserContext from "../UserContex";

const UserPage = () => {
  const {
    dataCart,
    setDataCart,
    total,
    setTotal,
    setQuantity1,
    quantity1,
    final,
    setFinalData,
    quantityPatch,
    setQuantityPatch,
  } = useContext(UserContext);
  const [userDet, setUserDet] = useState("");

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    setUserDet(user.iduser);
  }, []);

  function cartData(el) {
    let p = dataCart.includes(el);
    if (!p) {
      setDataCart([...dataCart, el]);
      setTotal([...total, +el.per_piece_price]);
      setQuantity1(quantity1);
    } else alert("Increase the Quantity ");
  }

  function addTransaction(el) {}

  return (
    <div className="row me-0">
      <div className="col-8">
        <UserInterface cartData={cartData} addTransaction={addTransaction} />
      </div>
      <div className="dashboard col-4">
        <Dashboard addTransaction={addTransaction} dataCart={dataCart} />
      </div>
    </div>
  );
};

export default UserPage;
