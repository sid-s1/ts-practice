import { Router } from 'express';
// which is the same as const express = require('express') const Router = express.Router
import { createTodo, deleteTodo, updateTodo } from '../controllers/todos';
import { getTodos } from '../controllers/todos';


const router = Router();

router.get('/', getTodos);


router.post('/', createTodo);


router.patch('/:id', updateTodo);


router.delete('/:id', deleteTodo);



export default router;