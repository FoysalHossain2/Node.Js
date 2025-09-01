const express = require('express');
const mongoose = require('mongoose');
const todoHandler = require("./routeHandler/todoHandler");

//express app initialization
const app = express();
app.use(express.json());

//database connection with mongoose
mongoose.connect("mongodb://localhost/todos", )
    .then(() => console.log('connected to mongodb'))
    .catch((err) => console.log(err))

//application routes

//default route handler
function errorHandler(err, req, res, next) {
    if (res.headerSent) {
        return next(err);
    }
}

app.listen(3000, () => {
    console.log("app listening on port 3000");
})