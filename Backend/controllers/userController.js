"use strict";

const db = require("../config/connect.js");
const callback = require("../middleware/callback.js");

const addRelations = (req, res) => {
  const addrelation =
    "INSERT INTO Users (`email`,`password`,`name`,`address`,`nationality`,`zipcode`,`state`) VALUES (?)";
  const { email, password, name, address, nationality, zipcode, state } =
    req.body;
  const values = [email, password, name, address, nationality, zipcode, state];
  db.query(addrelation, [values], (err, data) => {
    callback(res, err, data);
  });
};

const getData = (req, res) => {
  const getAllData = "SELECT * FROM Users;";
  // "SELECT * FROM multi_form.user INNER JOIN multi_form.about ON user.iduser = about.iduser";
  db.query(getAllData, (err, data) => {
    callback(res, err, data);
  });
};

const particularData = (req, res) => {
  const getAllData = "SELECT * FROM Users WHERE iduser= ?";
  db.query(getAllData, [req.body.id], (err, data) => {
    callback(res, err, data);
  });
};

const updateData = (req, res) => {
  const {
    email,
    password,
    name,
    address,
    nationality,
    zipcode,
    state,
    iduser,
  } = req.body;
  const values = [
    email,
    password,
    name,
    address,
    nationality,
    zipcode,
    state,
    iduser,
  ];
  const update =
    "UPDATE Users SET `email`=?,`password`=?,`name`=?,`address`=?,`nationality`=?,`zipcode`=? ,`state`=?  WHERE `iduser` =? ;";

  db.query(update, values, (err, data) => {
    callback(res, err, data);
  });
};

const deleteData = (req, res) => {
  const del = `DELETE from Users  WHERE iduser=${req.body.iduser};`;

  db.query(del, (err, data) => {
    callback(res, err, data);
  });
};

module.exports = {
  addRelations,
  getData,
  updateData,
  particularData,
  deleteData,
};

// const update = (req, res) => {
//   const update =
//     "UPDATE multi_form.about SET `email`=?,`password`=?  WHERE iduser =? ;";
//   const { email, password, iduser } = req.body;
//   const values = [email, password, iduser];
//   db.query(update, values, (err, data) => {
//     if (err) return res.status(500).json(err.sqlMessage);
//     return res.status(200).json({ data });
//   });
// };

// const add = (req, res) => {
//   const add =
//     "INSERT INTO multi_form.about (`iduser`,`email`,`password`) VALUES (?)";
//   const { iduser, email, password } = req.body;
//   const values = [iduser, email, password];
//   db.query(add, [values], (err, data) => {
//     if (err) return res.status(500).json(err.sqlMessage);
//     return res.status(200).json({ data });
//   });
// };

// `UPDATE Users SET email="${email}",password="${password}",name="${name}",address="${address}",nationality="${nationality}",zipcode="${zipcode}",state="${state}", WHERE iduser = "${iduser}"`

// "UPDATE Users SET `email`=?,`password`=?,`name`=?,`address`=?,`nationality`=?,`zipcode`=? ,`state`=?  WHERE `iduser` =? ;";
