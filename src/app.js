const express = require("express");

const connect = require('./config/db');

const port = 2456;
const app = express()
app.use(express.json());


const author = require("../src/controller/author.controller");

const book = require("../src/controller/book.controller");

const section = require("../src/controller/section.controller");

const checkOut = require("../src/controller/checkout.controller");


app.use("/author",author);
app.use("/book",book);
app.use("/section",section);
app.use("/checkout",checkOut);

app.listen(port, async () => {
    await connect();
    console.log(`server started at http://localhost:${port}`);
})