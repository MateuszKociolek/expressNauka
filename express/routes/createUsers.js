const express = require('../../express');
const router = express.Router();

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

module.exports = router;