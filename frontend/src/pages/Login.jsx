import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { env } from "../config.js";

const Login = () => {
  const navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.email === "") {
        errors.email = "Please enter email";
      }
      if (values.password === "") {
        errors.password = "Please enter a valid password ";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        let user = await axios.post(`${env.api}/auth/login`, values, {
          headers: {
            authorization: "Clarity",
          },
        });
        if (user.status === 200) {
          localStorage.setItem("user", user.data);
          navigate("/home");
        }
      } catch (err) {
        alert(err.response.data.message);
      }
    },
  });
  return (
    <div className=" form-signin w-100 m-auto text-center">
      <form onSubmit={formik.handleSubmit}>
        <img
          className="mb-4 rounded-circle"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa9tdNRBZtYSqzGX-60T9B1Gr4Eugl_uZKLw&usqp=CAU"
          alt="logo"
          width="100"
          height="100"
        />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <div className="form-floating">
          <input
            value={formik.values.email}
            onChange={formik.handleChange}
            name="email"
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <div style={{ color: "red" }}>{formik.errors.email}</div>
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            value={formik.values.password}
            onChange={formik.handleChange}
            name="password"
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <div style={{ color: "red" }}>{formik.errors.password}</div>
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <Link to="/register" className="w-100 btn btn-lg btn-success">
            Create a New Account
          </Link>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
