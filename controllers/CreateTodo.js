const Todo = require('../models/Todo');

const createToDo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const todo = await Todo.create({ title, description }); 
        console.log(todo);
        res.status(200).json({
            success: true,
            message: "Entry Created successfully"
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
        });
    }
};

module.exports = { createToDo };
