import React, { useEffect, useState } from "react";
import axios from "axios";
import { env } from "../config.js";

const Table = ({
  gettingParticular,
  setRender,
  render,
  final,
  setFin,
  setFinal,
}) => {
  // DeleteData
  async function delData(iduser) {
    try {
      let dele = await axios.post(
        `${env.api}/users/del`,
        { iduser },
        {
          headers: {
            authorization: "Clarity",
          },
        }
      );
      setFin(dele.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Firstname</th>
          <th scope="col">Email</th>
          <th scope="col">Address</th>
          <th scope="col">State</th>
          <th scope="col">Nationality</th>
          <th scope="col">Zipcode</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {final.map((el) => {
          return (
            <tr key={el.iduser}>
              <th scope="row">{el.iduser}</th>
              <td>{el.name}</td>
              <td>{el.email}</td>
              <td>{el.address}</td>
              <td>{el.state}</td>
              <td>{el.nationality}</td>
              <td>{el.zipcode}</td>
              <td>
                <button
                  onClick={() => {
                    gettingParticular(el.iduser);
                    setRender(!render);
                  }}
                  className=" btn btn-light"
                >
                  Edit
                </button>
                <span> </span>
                <button
                  onClick={() => {
                    delData(el.iduser);
                  }}
                  className="btn btn-light "
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
