import React, { useState, useContext, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";
import { env } from "../config.js";
// import data from "../data.js";

const UserInterface = ({ cartData, addTransaction }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    productData();
  }, []);

  const productData = async () => {
    try {
      let product = await axios.get(`${env.api}/product/getProductData`, {
        headers: {
          authorization: "Clarity",
        },
      });
      console.log(product.data);
      setData(product.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container m-auto">
      <div className="h1">ShopZone</div>
      <hr />
      <div className="row mt-5">
        {data.map((el) => {
          return (
            <div className="col-md-4 mt-3">
              <Card
                el={el}
                cartData={cartData}
                addTransaction={addTransaction}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserInterface;
