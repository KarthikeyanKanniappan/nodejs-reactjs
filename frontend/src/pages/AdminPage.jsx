import React, { useState, useEffect } from "react";
import AdminRegister from "./AdminRegister";
import { env } from "../config.js";
import axios from "axios";
const AdminPage = () => {
  const [adminStore, setAdminStore] = useState(true);
  const [final, setFinal] = useState([]);
  const [fin, setFin] = useState([]);

  //fetching data for Table
  useEffect(() => {
    getAllData();
  }, [fin]);

  async function getAllData() {
    try {
      let allData = await axios.get(`${env.api}/users/get`, {
        headers: {
          authorization: "Clarity",
        },
      });
      setFinal(allData.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="w-100">
      <AdminRegister
        fin={fin}
        setFin={setFin}
        final={final}
        setFinal={setFinal}
        adminStore={adminStore}
        setAdminStore={setAdminStore}
      />
    </div>
  );
};

export default AdminPage;
