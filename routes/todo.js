const express = require('express');
const router = express.Router();
const { createToDo } = require('../controllers/CreateTodo'); // correct import
const {getAllTodo,getTodo} = require('../controllers/getAllTodo')
const {updateTodo} = require('../controllers/updateTodo')

router.post('/create', createToDo); 
router.get('/getalltodo',getAllTodo);
router.get('/gettodo/:id',getTodo);
router.put('/updatetodo/:id',updateTodo);

module.exports = router;
