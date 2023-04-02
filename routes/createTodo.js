import Todo from "../db/Todo.js"

const createTodo = async (req,res) => {
    const task = req.body.task
    if(!task) {
        return res.status(400).json({message: "Task is required"})
    }

    try {
        const newTodo = new Todo({
            task,
        })

        const todo = await newTodo.save()
        res.status(201).json(todo)
    } catch (error) {
        res.status(500).json({message: "Something went wrong"})
    }
}

export default createTodo