import React, { useState, useEffect, useContext } from "react";
import { env } from "../config.js";
import axios from "axios";
import UserContext from "../UserContex";
import { useNavigate } from "react-router-dom";

const PersonalDetails = ({
  settle,
  page,
  setPage,
  formData,
  setFormData,
  render,
  fin,
  setFin,
  validate,
  errAddress,
  errNationality,
  errState,
  errZipcode,
  constrain,
}) => {
  const { updateId, setUpdateId } = useContext(UserContext);
  const navigate = useNavigate();

  // updatingData
  async function update(values) {
    let value = { ...values, iduser: updateId };
    try {
      let user = await axios.put(`${env.api}/users/update`, value, {
        headers: {
          authorization: "Clarity",
        },
      });
      if (user.status === 200) {
        alert("Data Updated");
        setFin(user.data);
      }
    } catch (err) {
      console.log(err);
      alert(err.response.data.message);
    }
  }

  //CreatingData
  async function add(values) {
    if (
      values.name &&
      values.email &&
      values.password &&
      values.address &&
      values.state &&
      values.nationality &&
      values.zipcode
    ) {
      try {
        let user = await axios.post(`${env.api}/users/addrelation`, values, {
          headers: {
            authorization: "Clarity",
          },
        });
        if (user.status === 200) {
          alert("Data Created");
          setFin(user.data);
          if (settle) {
            navigate("/");
          }
        }
      } catch (err) {
        alert(err.response.data.message);
      }
    } else {
      alert("Enter all necessary datas");
    }
  }

  return (
    <div className="container m-auto">
      <div className="row ">
        <div className="mb-3 h2">PersonalDetails</div>
        {render ? (
          <div className="col-md-3 mt-3">
            <label className="h5">User Id</label>
            <input
              type="text"
              value={updateId}
              disabled
              placeholder="id"
              className="form-group"
            />
          </div>
        ) : (
          ""
        )}

        <div className="col-md-3 mt-3">
          <label className="h5">Address</label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) => {
              setFormData({ ...formData, address: e.target.value });
            }}
            placeholder="Address max char 30 & min char 10"
            className="form-group"
          />
          <span style={{ color: "red" }}>{errAddress}</span>
        </div>
        <div className="col-md-3 mt-3">
          <label className="h5">Zipcode</label>
          <input
            type="text"
            value={formData.zipcode}
            onChange={(e) => {
              setFormData({ ...formData, zipcode: e.target.value });
            }}
            placeholder="Zipcode max char 7"
            className="form-group"
          />
          <div style={{ color: "red" }}>{errZipcode}</div>
        </div>
        <div className="col-md-3 mt-3">
          <label className="h5">State/region</label>
          <input
            type="text"
            value={formData.state}
            onChange={(e) => {
              setFormData({ ...formData, state: e.target.value });
            }}
            placeholder="State max char length 15"
            className="form-group"
          />
          <div style={{ color: "red" }}>{errState}</div>
        </div>
        <div className="col-md-3 mt-3">
          <label className="h5">Nationality</label>

          <input
            type="text"
            value={formData.nationality}
            onChange={(e) => {
              setFormData({ ...formData, nationality: e.target.value });
            }}
            placeholder="Nationality max char length 10"
            className="form-group"
          />
          <div style={{ color: "red" }}>{errNationality}</div>
        </div>
      </div>

      <div className="mt-3">
        <button
          className="btn btn-dark "
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Previous
        </button>
        {render ? (
          <button
            onClick={() => {
              update(formData);
            }}
            className="btn btn-dark m-3"
          >
            Update
          </button>
        ) : (
          <button
            onClick={() => {
              validate(formData);
              add(formData);
            }}
            className={
              constrain ? "btn btn-dark m-3 disabled" : "btn btn-dark m-3"
            }
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default PersonalDetails;
