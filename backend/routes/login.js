const express = require("express");
const router = express.Router();
const path = require('path');

//db
const connection = require("../db/dbConfig");



router.post("/", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // console.log(username, password);

        const query = `select username, password from users where username = '${username}' and password = '${password}'`;

        connection.query(query, (err, results, fields) => {

            if(err){
                console.log("Error with login to users");
                return res.status(500).json({error:"error with users"});
            }
            if (results.length != 0) {
                console.log("Pomyślnie zalogowano");
                const filePath = path.resolve(__dirname, "..", "..", "zalogowanie.html");
                res.sendFile(filePath);
            }else{
                console.log("Incorrect!")
                res.redirect('/')
            }            
            // connection.end();
            
        })
});

module.exports = router;