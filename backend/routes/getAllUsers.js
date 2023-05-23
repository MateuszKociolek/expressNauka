const express = require("express");
const router = express.Router();

//db
const connection = require("../db/dbConfig");

router.get("/", (req, res) => {
  const query = "select * from users";
  var usersJson;
    
  connection.query(query, (err, results, fields) => {
    if (err) {
      console.log("Error with query");
      return res.status(500).json({ error: "Server error" });
    }
    console.log("Show all users: OK");
    usersJson = results;
    // console.log(usersJson);
    
    res.json(usersJson);
    
  });
  
});

module.exports = router;
