var express = require('express');
var app = express();
var path = require("path")

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Hello user: ${userId}`);
});

app.get("/login/:username/:password", (req, res) => {
    const username = req.params.username;
    const password = req.params.password;
    if(username == "koci" && password == "haslo0"){
        console.log("Zalogowano")
        res.sendFile(path.join(__dirname, "./zalogowanie.html"))
        // res.send(`Hello user ${username}`);
    }else{
        res.send("Invalid username or password");
    }
});

app.listen(3000 , () => {
    console.log("Serwer start at port 3000");
});
``