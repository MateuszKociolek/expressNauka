var express = require("express");
var app = express();
// var mysql = require('mysql')
const path = require("path");

//db
const connection = require("./db/dbConfig");

//Routes
const createUsersRouter = require("./routes/createUsers");
const loginRouter = require("./routes/login");
const allUsersRouter = require("./routes/allUsers")
const getAllUsersRouter = require("./routes/getAllUsers");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("expressNauka"));

app.get("/", (req, res) => {
  const filePath = path.resolve(__dirname, "..","front", "index.html");
  res.sendFile(filePath);
});

app.get("/allusers", (req, res) => {
  const filePath = path.resolve(__dirname, "..","front", "allUsers.html");
  res.sendFile(filePath);
});

app.use("/allusers", allUsersRouter);
app.use("/showAllUsers", getAllUsersRouter)

app.use("/login", loginRouter);

app.use("/createAccount", createUsersRouter);
app.use("/createNewAccount", createUsersRouter);

app.listen(3000, () => {
  console.log("Serwer start at port 3000");
});
