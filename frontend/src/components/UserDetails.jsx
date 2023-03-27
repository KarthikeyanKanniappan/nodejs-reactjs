import React, { useState } from "react";

const UserDetails = ({
  page,
  setPage,
  formData,
  setFormData,
  errName,
  errEmail,
  errPassword,
}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="mb-3 h2">User Details</div>
        <div className="col-lg-4">
          <label className="h5">Name</label>
          <input
            type="text"
            placeholder="The name must contain alpha characters only"
            className="form-group input-group"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
          />
          <span style={{ color: "red" }}>{errName}</span>
        </div>
        <div className="col-lg-4">
          <label className="h5">Email id</label>
          <input
            type="email "
            placeholder="Please Enter Your Mail id"
            className="form-group input-group"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
          <span style={{ color: "red" }}>{errEmail}</span>
        </div>
        <div className="col-lg-4">
          <label className="h5">Password</label>

          <input
            type="password"
            placeholder="Please Enter Your Password"
            className="form-group input-group"
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
          />
          <span style={{ color: "red" }}>{errPassword}</span>
        </div>
        <br />
      </div>
      <div style={{ height: "20px" }}></div>
      <small>
        password should be 6 to 20 characters one numeric digit one uppercase
        one lowercase letter
      </small>
      <div className="mt-3">
        <button
          className="btn btn-dark "
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
