var express = require('express');
var app = express();
// var mysql = require('mysql')
const path = require('path')

//db
const connection = require("./db/dbConfig");

//Routes
const createUsersRouter = require("./routes/createUsers");
const loginRouter = require("./routes/login");



app.use(express.urlencoded({ extended: true }));
app.use(express.static('expressNauka'))

app.get("/", (req, res) => {
    const filePath = path.resolve(__dirname, "..", "index.html");
    res.sendFile(filePath);
});

app.get('/allusers', (req, res) => {
    connection.connect((error) => {
        if(error){
            console.log('Error with connection:' + error);
            return;
        }
        console.log("Connected to db");
        
        const query = 'select * from users';
        
        connection.query(query, (err, results, fields) => {
            if(err){
                console.log("Error with query");
                return res.status(500).json({error: 'Server error'});
            }
            console.log("Show all users: OK");
            res.json(results);
        })
    });
});

app.use("/login", loginRouter);

app.use('/createAccount', createUsersRouter);
app.use('/createNewAccount', createUsersRouter);

app.listen(3000 , () => {
    console.log("Serwer start at port 3000");
});
