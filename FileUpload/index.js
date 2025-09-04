const express = require('express');
const mongoose = require('mongoose');
const todoHandler = require("./routeHandler/todoHandler");

//express app initialization
const app = express();
app.use(express.json());

//database connection with mongoose
mongoose.connect('mongodb://localhost/todo')
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));


//application routes
app.use('/todo', todoHandler);

//default error handler
function errorHandler(err, req, res, next) {
    if (res.headerSent) {
        return next(err);
    } 

    res.status(5000).json({error: err});
}


app.listen(3000, () => {
    console.log("app listing at port 3000");
})