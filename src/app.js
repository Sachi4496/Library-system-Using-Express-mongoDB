const express = require("express");
const mongoose = require("mongoose");
const port = 2456;
const app = express()
app.use(express.json());

const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/library ");
    // return mongoose.connect("mongodb+srv://sachida44:sachida44@cluster0.xiqh3.mongodb.net/test");
};

const author = require("../src/controller/author.controller");

const user = require("../src/controller/user.controller");


app.use("/author",author);
app.use("/user",user);

app.listen(port, async () => {
    await connect()
    console.log(`server started at http://localhost:${port}`);
})