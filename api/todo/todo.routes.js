const express = require('express')
const {getTodo, listTodos, addTodo, getAdmin} = require('./todo.controller')
const router = express.Router()

router.get('/', listTodos)
router.post('/', addTodo)
router.get('/:id', getTodo)
router.get('/admib', getAdmin)

module.exports = router