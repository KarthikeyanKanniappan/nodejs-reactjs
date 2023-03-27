import React, { useState, useEffect } from "react";
import { createContext } from "react";

let UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [total, setTotal] = useState([0]);
  const [quantity1, setQuantity1] = useState(1);
  const [updateId, setUpdateId] = useState("");
  const [dataCart, setDataCart] = useState([]);
  const [quantityPatch, setQuantityPatch] = useState([]);
  const [final, setFinalData] = useState({
    productid: "",
    user_id: "",
    quantity_a: "",
    totalAmount: "",
  });
  const [userDet, setUserDet] = useState({});
  return (
    <UserContext.Provider
      value={{
        dataCart,
        setDataCart,
        total,
        setTotal,
        quantity1,
        setQuantity1,
        updateId,
        setUpdateId,
        quantityPatch,
        setQuantityPatch,
        final,
        setFinalData,
        userDet,
        setUserDet,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
