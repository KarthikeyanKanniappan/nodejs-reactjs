"use strict";
// const uuidBuffer = require("binary-uuid");
const db = require("../config/connect.js");
const callback = require("../middleware/callback.js");

const getProducts = (req, res) => {
  const getData =
    "SELECT * FROM Product P JOIN Category C ON P.category_code = C.category_code JOIN Brand B ON B.brand_code = P.brand_code;";
  db.query(getData, (err, data) => {
    callback(res, err, data);
  });
};

const getTransactionData = (req, res) => {
  let final = req.body.dataCart;
  let user = req.body.userid;
  for (let i = 0; i < final.length; i++) {
    let { product_id, Quantity } = final[i];
    let buf = new Buffer.from(product_id.toString());
    console.log(buf);
    let alter = buf.toString("binary");
    console.log(typeof alter);
    let totalAmount = final[i].per_piece_price * final[i].Quantity;
    let datax =
      "INSERT INTO Ecommerce.Transaction (`userid`,`productid`,`quantity`,`totalAmount`) VALUE(?)";
    let dataxValues = [user, alter, Quantity, totalAmount];
    db.query(datax, [dataxValues], (err, data) => {
      // callback(res, err, data);
      if (err) console.log(err);
    });
  }
};

module.exports = {
  getProducts,
  getTransactionData,
};

// let data = `INSERT INTO Transaction userid:"${
//   req.body.userid
// }", productid:"${final[i].product_id}", quantity:"${
//   final[i].Quantity
// }",totalAmount:"${final[i].per_piece_price * final[i].Quantity}";`;

// let datax =
//   "INSERT INTO Transaction(userid,productid,quantity,totalAmount) VALUES";

// for (let i = 0; i < final.length; i++) {
//   let data = `(${req.body.userid},${final[i].product_id},${
//     final[i].Quantity
//   },${final[i].per_piece_price * final[i].Quantity}),`;
//   datax += data;
// }
