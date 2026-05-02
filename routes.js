const express = require("express");
const router = express.Router();

router.get("/api", (req, res) => {
  res.json({
    mensaje: "API funcionando",
    estado: "ok"
  });
});

module.exports = router;