import { useNavigate } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import UserContext from "../UserContex";
import TableRow from "./TableRow";
import { env } from "../config.js";
import axios from "axios";

const Dashboard = ({ dataCart, addTransaction }) => {
  const {
    total,
    setTotal,
    setDataCart,
    quantity1,
    quantityPatch,
    setQuantityPatch,
  } = useContext(UserContext);
  const navigate = useNavigate();
  const [userDet, setUserDet] = useState("");

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    setUserDet(user.iduser);
  }, []);

  async function fetchData() {
    const values = { dataCart, userid: userDet };
    console.log(values);
    try {
      let allData = await axios.post(
        `${env.api}/product/transactionData`,
        values,
        {
          headers: {
            authorization: "Clarity",
          },
        }
      );
      if (allData.status === 200) {
        navigate("/final");
        // setDataCart("");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="h1">Cart</div>
      <hr />
      <div className="d-flex justify-content-between">
        <div className="h1">Total :{total.reduce((acc, el) => acc + el)}</div>
        <div>
          <button
            onClick={() => {
              if (!dataCart[0]) {
                alert("No item slected");
              } else {
                window.confirm("Are you sure to checkOut");
                fetchData();
              }
            }}
            className="btn btn-danger"
          >
            Check Out
          </button>
        </div>
      </div>
      <div className="mt-3">
        <table className="table text-center">
          <thead>
            <th scope="col">Sl.no</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Qnty</th>
            <th scope="col">Amount</th>
          </thead>
          <tbody>
            {dataCart.map((el, index) => {
              return (
                <tr>
                  <TableRow index={index} el={el} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
