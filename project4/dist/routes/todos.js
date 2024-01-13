"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// which is the same as const express = require('express') const Router = express.Router
const todos_1 = require("../controllers/todos");
const todos_2 = require("../controllers/todos");
const router = (0, express_1.Router)();
router.get('/', todos_2.getTodos);
router.post('/', todos_1.createTodo);
router.patch('/:id', todos_1.updateTodo);
router.delete('/:id', todos_1.deleteTodo);
exports.default = router;
