var express = require('express');
var app = express();
var mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'konta'
});

connection.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
});

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
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

app.post("/login", (req, res) => {
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
                res.sendFile(__dirname + '/zalogowanie.html');
            }else{
                console.log("Incorrect!")
                res.redirect('/')
            }            
            // connection.end();
            
        })
});

app.get('/createAccount', (req,res) => {
    console.log("Tworzenie konta")
    res.sendFile(__dirname + "/createAccount.html");
})

app.post('/createNewAccount', (req, res)=>{
    const newUser = req.body.newUser;
    const newPassword = req.body.newPassword;

    const query = `insert into users (username, password) values ('${newUser}', '${newPassword}')`;

    connection.query(query, (err, results, fields) => {
        if(err){
            console.log("Error with creating new users");
            return res.status(500).json({error:"error with users"});
        }else{
            console.log("Create new account: OK");
            res.send("All good!");
        }
    });
});

app.listen(3000 , () => {
    console.log("Serwer start at port 3000");
});
