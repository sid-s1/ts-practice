"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
const createTodo = (request, response, next) => {
    const text = request.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    response.status(201).json({ message: "Created the todo", createTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (request, response, next) => {
    response.json({ todos: TODOS });
};
exports.getTodos = getTodos;
const updateTodo = (request, response, next) => {
    const todoId = request.params.id;
    const updatedText = request.body.text;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("Could not find todo!");
    }
    TODOS[todoIndex] = new todo_1.Todo(todoId, updatedText);
    response.json({ message: "Updated!", updateTodo: TODOS[todoIndex] });
};
exports.updateTodo = updateTodo;
const deleteTodo = (request, response, next) => {
    const todoId = request.params.id;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("Could not find todo!");
    }
    TODOS.splice(todoIndex, 1);
    response.json({ message: "Todo deleted!" });
};
exports.deleteTodo = deleteTodo;
