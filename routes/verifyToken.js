const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.header.token;
  if (authHeader) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      //the user is the payload containing the data when signed.
      if (err) {
        return res.status(401).json("Token is not valid!");
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    return res.status(401).json("You are not authenticated");
  }
};

const verifyTokenAndAuthorisation = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to do that!");
    }
  });
};

module.exports = { verifyToken, verifyTokenAndAuthorisation };
