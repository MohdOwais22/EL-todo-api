import Todo from "../db/Todo.js"

const updateTodo = async (req,res) => {
    const id = req.params.id  
    const task = req.body.task
    const completed = req.body.completed
    
    if(!id) {
        return res.status(400).json({message: "Id is required"})
    }

    try {
        const updatedTask = await Todo.findByIdAndUpdate({
            _id: id
        },{
            task: task,
            completed: completed
        })
        
        res.status(200).json({message: "Todo updated successfully"})
    }catch (error) {
        res.status(500).json({message: "Something went wrong"})
    }

    
}

export default updateTodo