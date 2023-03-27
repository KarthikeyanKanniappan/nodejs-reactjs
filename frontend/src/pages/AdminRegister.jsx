import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import UserDetails from "../components/UserDetails";
import PersonalDetails from "../components/PersonalDetails";
import Table from "../components/Table";
import { env } from "../config.js";
import axios from "axios";
import UserContext from "../UserContex";

const AdminRegister = ({
  adminStore,
  setFin,
  fin,
  setFinal,
  final,
  settle,
}) => {
  const { updateId, setUpdateId } = useContext(UserContext);
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    state: "",
    nationality: "",
    zipcode: "",
  });

  const [render, setRender] = useState(false);
  const [errName, setErrName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errAddress, setErrAddress] = useState("");
  const [errState, setErrState] = useState("");
  const [errNationality, setErrNationality] = useState("");
  const [errZipcode, setErrZipcode] = useState("");
  const [constrain, setConstrain] = useState(false);

  // //fetching data for Table
  // useEffect(() => {
  //   getAllData();
  // }, [fin]);

  // async function getAllData() {
  //   try {
  //     let allData = await axios.get(`${env.api}/users/get`);
  //     setFinal(allData.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // fetching particular user data
  async function gettingParticular(id) {
    let iduser = { id };
    try {
      let allData = await axios.post(`${env.api}/users/getParticular`, iduser, {
        headers: {
          authorization: "Clarity",
        },
      });
      setUpdateId(allData.data[0].iduser);
      setFormData(allData.data[0]);
    } catch (err) {
      console.log(err);
    }
  }

  // validating
  function validate(formData) {
    let regName = /^[a-zA-Z]/;
    let emailName = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    let passwordCheck = /^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (!regName.test(formData.name)) {
      setErrName("Invalid UserName");
      setConstrain(true);
    }
    if (!emailName.test(formData.email)) {
      setErrEmail("Invalid Email given");
      setConstrain(true);
    }
    if (!passwordCheck.test(formData.password)) {
      setErrPassword("Invalid Password given");
      setConstrain(true);
    }
    if (!(formData.address.length > 10 && formData.address.length < 30)) {
      setErrAddress("Address should match the criteria");
      setConstrain(true);
    }
    if (formData.state.length > 10) {
      setErrState("max char length 10");
      setConstrain(true);
    }
    if (formData.nationality.length > 15) {
      setErrNationality(" max char length 15");
      setConstrain(true);
    }
    if (formData.zipcode.length > 7) {
      setErrZipcode(" max char length 7");
      setConstrain(true);
    }
  }

  // for updating user interface
  const componentList = [
    <UserDetails
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      errName={errName}
      errEmail={errEmail}
      errPassword={errPassword}
    />,
    <PersonalDetails
      settle={settle}
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      render={render}
      fin={fin}
      setFin={setFin}
      validate={validate}
      errAddress={errAddress}
      errState={errState}
      errNationality={errNationality}
      errZipcode={errZipcode}
      constrain={constrain}
    />,
  ];

  return (
    <div className="App">
      <div className="mb-5"></div>
      {componentList[page]}
      {adminStore ? (
        <div className=" above container">
          <Table
            setRender={setRender}
            render={render}
            gettingParticular={gettingParticular}
            setFin={setFin}
            final={final}
            setFinal={setFinal}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AdminRegister;
