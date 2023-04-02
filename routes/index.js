import { Router } from "express"
import createTodo from "./createTodo.js"
import deleteTodo from "./deleteTodo.js"
import updateTodo from "./updateTodo.js"
import getTodo from "./getTodo.js"

const router = Router()

router.post("/create", createTodo)
router.delete("/delete/:id", deleteTodo)
router.put("/update/:id", updateTodo)
router.get("/get-todos", getTodo)

export default router;