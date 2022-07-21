const router = require("express").Router();
const { verifyToken, verifyTokenAndAuthorisation } = require("./verifyToken");

router.put("/:id", verifyTokenAndAuthorisation, (req, res) => {});

module.exports = router;
