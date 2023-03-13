"use strict";

const db = require("../config/connect.js");
// const callback = require("../middleware/callback.js");

const login = (req, res) => {
  try {
    const userData = "SELECT * FROM Users WHERE email =?";
    db.query(userData, [req.body.email], (err, data) => {
      if (err)
        return res.status(500).json({ message: `something wrong ${err}` });
      if (data.length === 0)
        return res.status(409).json({ message: `User not found!` });
      const userCheck = req.body.password == data[0].password;
      const stringy = JSON.stringify(data[0]);
      if (userCheck) {
        return res.status(200).json(stringy);
      } else {
        res.status(500).json({ message: `Wrong password !` });
      }
    });
  } catch (err) {
    res.status(500).json({ message: `something went wrong; ${err}` });
  }
};

module.exports = {
  login,
};
