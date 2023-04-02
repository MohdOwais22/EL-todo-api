import Todo from "../db/Todo.js"

const deleteTodo = async (req,res) => {
    const id = req.params.id
    try {
        const todo = await Todo.findByIdAndDelete(id)
        if(!todo) {
            return res.status(404).json({message: "Todo not found"})
        }
        res.status(200).json({message: "Todo deleted successfully"})
    } catch (error) {
        res.status(500).json({message: "Something went wrong"})
    }
}

export default deleteTodo