import Todo from "../db/Todo.js"

const getTodo = async (req,res) => {
    try {
        const todos = await Todo.find()
        res.status(200).json(todos)
    } catch (error) {
        res.status(500).json({message: "Something went wrong"})
    }
}

export default getTodo