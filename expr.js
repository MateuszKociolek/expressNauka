var express = require('express');
var app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Hello user: ${userId}`);
});

app.listen(3000 , () => {
    console.log("Serwer start at port 3000");
});
``