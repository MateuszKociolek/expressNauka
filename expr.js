var express = require('express');
var app = express();
var path = require("path")

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Hello user: ${userId}`);
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, password);
    if(username == "koci" && password == "haslo0"){
        console.log("Zalogowano");
        // res.send("All good!");
        res.sendFile(__dirname + '/zalogowanie.html');
        // res.send(`Hello user ${username}`);
    }else{
        console.log("złe dane");
        res.send("Invalid username or password");
    }
});

app.listen(3000 , () => {
    console.log("Serwer start at port 3000");
});
``