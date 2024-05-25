import { Router } from "express";
import { getAllTodo, getTodoById, createTodo, editTodo, deleteTodo } from "../controllers/todo.controller.js";

const router = Router()


router.route("/").get(getAllTodo)
router.route("/").post(createTodo)
router.route("/:id").get(getTodoById)
router.route("/:id").put(editTodo)
router.route("/:id").delete(deleteTodo)


export default router