const express = require("express");
const router = express.Router();

const path = require('path');

router.get("/", (req, res) => {
  const filePath = path.resolve(__dirname, "..", "..","front", "allUsers.html");
  res.sendFile(filePath);
});

module.exports = router;