import React from "react";
import { useNavigate } from "react-router-dom";

const Final = ({ dataCart, setDataCart }) => {
  const navigate = useNavigate();
  {
    setTimeout(() => {
      navigate("/home");
      dataCart([]);
    }, 2000);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "90vh",
      }}
    >
      <div className="text-center">
        <h1>
          Order Placed... <br />
          We will Contact You Shortly
        </h1>
      </div>
    </div>
  );
};

export default Final;
