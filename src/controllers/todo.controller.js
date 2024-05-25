import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js";

const todos = [
    {
        id: 1,
        title: "Demo Todo",
        description: "Demo Description",
        status: "in-progress",
        deadline: new Date()
    }
]

const getAllTodo = asyncHandler( async (req, res) => {
    return res.status(201).json(
        new ApiResponse(200, {todos}, "Todos fetched successfully")
    )
})

const getTodoById = asyncHandler( async (req, res) => {
    const { id } = req.params
    const todo = todos.find(todo => todo.id == id)
    if(!todo){
        throw new ApiError(404, "Todo not found")
    }
    return res.status(200).json(
        new ApiResponse(200, {todo}, "Todo fetched successfully")
    )
})

const createTodo = asyncHandler( async (req, res) => {
    const { title, description, status, deadline } = req.body
    if(!title || !description || !status || !deadline){
        throw new ApiError(400, "All fields are required")
    }
    const id = todos.length + 1;
    const deadlineDate = new Date(deadline)
    const newTodo = { id,title, description, status, deadline:deadlineDate }
    todos.push(newTodo)
    return res.status(201).json(
        new ApiResponse(201, {newTodo}, "Todo created successfully")
    )
})

const editTodo = asyncHandler( async (req, res) => {
    const { id } = req.params
    const { title, description, status, deadline } = req.body
    const todo = todos.find(todo => todo.id == id)
    const todoIndex = todos.findIndex(todo => todo.id == id)
    const deadlineDate = new Date(deadline)
    if(!todo){
        throw new ApiError(404, "Todo not found")
    }
    todos[todoIndex].title = title || todo.title;
    todos[todoIndex].description = description || todo.description;
    todos[todoIndex].status = status || todo.status;
    todos[todoIndex].deadline = deadlineDate || todo.deadline;
    return res.status(200).json(
        new ApiResponse(200, todos[todo.id], "Todo updated successfully")
    )
})

const deleteTodo = asyncHandler( async (req, res) => {
    const { id } = req.params
    const todo = todos.find(todo => todo.id == id)
    if(!todo){
        throw new ApiError(404, "Todo not found")
    }
    const index = todos.findIndex(todo => todo.id == id)
    todos.splice(index, 1)
    return res.status(200).json(
        new ApiResponse(200, todos, "Todo deleted successfully")
    )
})

export { getAllTodo, getTodoById, createTodo, editTodo, deleteTodo }