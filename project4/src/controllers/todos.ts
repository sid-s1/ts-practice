import { RequestHandler } from "express";
import { Todo } from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (request,response,next) => {
    const text = (request.body as {text: string}).text;
    const newTodo = new Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    response.status(201).json({message: "Created the todo", createTodo: newTodo});
};

export const getTodos: RequestHandler = (request,response,next) => {
    response.json({todos: TODOS});
};

export const updateTodo: RequestHandler<{id: string}> = (request,response,next) => {
    const todoId = request.params.id;
    const updatedText = (request.body as {text: string}).text;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("Could not find todo!");
    }
    TODOS[todoIndex] = new Todo(todoId, updatedText);
    response.json({message: "Updated!", updateTodo: TODOS[todoIndex]});
};

export const deleteTodo: RequestHandler<{id: string}> = (request,response,next) => {
    const todoId = request.params.id;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("Could not find todo!");
    }
    TODOS.splice(todoIndex,1);
    response.json({message: "Todo deleted!"});
};