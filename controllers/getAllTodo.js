const Todo = require("../models/Todo");

const getAllTodo = async (req, res) => {
  try {
    const todo = await Todo.find();
    console.log(todo);
    res.status(200).json({
      sucess: true,
      data: todo,
      message: "Entire Data fetched Succesfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
    });
  }
};

//! getTodo by id

const getTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });
    console.log(todo);
    if (!todo) {
      res.status(500).json({
        success: false,
        message: "Not Data found at given id",
      });
    }

    res.status(200).json({
      sucess: true,
      data: todo,
      message: "Entire Data with id fetched Succesfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
    });
  }
};

module.exports = { getAllTodo, getTodo };
