const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();
const todoSchema = require('../schemas/todoSchema');
const Todo = new mongoose.model("Todo", todoSchema);


//Get A TODOS BY ID
router.get('/', async (req, res) => {

})


//POST TODOS 
router.post('/all', async (req, res) => {
    const newTodo = new Todo(req.body);
    try {
        await newTodo.save();
        res.status(200).json({
            message: "Todo was inserted successfully!"
        });
    } catch (err) {
        res.status(500).json({
            error: "There was a server side error!"
        });
    }
});


//PUT MULTIPLE TODOS
router.put('/:id', async (req, res) => {

})

//DELETE TODO
router.delete('/:id', async (req, res) => {

})

module.exports = router;