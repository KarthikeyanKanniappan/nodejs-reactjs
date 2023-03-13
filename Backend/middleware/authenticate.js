const authenticate = (req, res, next) => {
  try {
    let decode = req.headers.authorization;
    if (decode) {
      if ((decode = "Clarity")) {
        next();
      }
    } else {
      res.status(500).json({
        message: "Something went wrong",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: `Something went wrong ${err}`,
    });
  }
};

module.exports = authenticate;
