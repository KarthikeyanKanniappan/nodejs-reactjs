import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../UserContex";

const HomePage = () => {
  const navigate = useNavigate();
  const { userDet, setUserDet } = useContext(UserContext);

  function adminRoute() {
    let adminpassword = prompt("Enter the key for access");
    let adminkey = 111;
    if (adminkey == adminpassword) {
      navigate("/admin");
    } else {
      alert("adminKey is wrong");
    }
  }

  function logout() {
    localStorage.clear();
    navigate("/");
  }

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    setUserDet(user);
  }, []);

  return (
    <div style={{ width: "100%", height: "90vh" }}>
      <div className="d-flex justify-content-center mt-3 ">
        <button
          onClick={() => {
            adminRoute();
          }}
          className="btn btn-dark "
        >
          Admin
        </button>
        <div style={{ width: "10px" }}></div>
        <button
          onClick={() => {
            navigate("/userpage");
          }}
          className="btn btn-dark"
        >
          User
        </button>
        <div style={{ position: "absolute", top: 15, right: 15 }}>
          <button onClick={logout} className="btn btn-dark">
            logout
          </button>
        </div>
      </div>
      <div className="mt-3 d-flex  justify-content-center">
        <div className="m-auto">
          <div className="h1">Welcome To Foodzy</div>
          <div className="h4">Admin key is 111</div>
        </div>
        <img
          src="https://thumbs.dreamstime.com/b/order-food-online-pizza-courier-delivery-ecommerce-concept-d-illustration-170569150.jpg"
          alt="food"
        />
      </div>
    </div>
  );
};

export default HomePage;
