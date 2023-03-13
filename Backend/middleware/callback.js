const callback = (res, err, data) => {
  if (err) return res.status(500).json(err.sqlMessage);
  return res.status(200).json(data);
};

module.exports = callback;
