
const Todo = require("../models/Todo");

const updateTodo = async(req,res)=>{
   try {
    const id = req.params.id;
    const{title,description} = req.body;
    console.log(id);
    const todo = await Todo.findByIdAndUpdate(
        {_id:id},{title,description,updateAt:Date.now()}
        
    )
    console.log(todo);

      res.status(200).json({
      sucess: true,
      data: todo,
      message: "Upadte Sucesfully",
    });

   } 
   catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
    });
   }
}

module.exports = {updateTodo}