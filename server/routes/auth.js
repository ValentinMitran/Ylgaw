const router = require("express").Router();

router.get("/isLoggedIn", (req, res) => {
  res.send(false);
});

module.exports = router;