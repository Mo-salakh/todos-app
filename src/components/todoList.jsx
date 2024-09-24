import { useEffect, useState } from "react"
import { TodoItem } from "./todoItem"
function TodoList(props) {
    const {todos, deleteTask} = props
    const [completed, setCompleted] = useState([])
    const [uncompleted, setUncompleted] = useState([])


    useEffect(() => {
        const compltedTodo = todos.filter(todo => todo.completed !== false)
        const uncompletedTodo = todos.filter(todo => todo.completed !== true)

        setCompleted(compltedTodo)
        setUncompleted(uncompletedTodo)
    }, [todos]) 


    return (
        <>
            <h1 className="title">Todo list</h1>
            <div className="total-info">
                <p className="total">total tasks: {todos.length}</p>
                <p> completed tasks : {completed.length}</p>
                <p> uncompleted tasks : {uncompleted.length}</p>
            </div>
            <ul className="todo_list">
                {todos.map(todo => {
                    return <TodoItem key={todo.id} {...todo} deleteTask={deleteTask} />
                })}
            </ul>
        </>
    )
}

export {  TodoList  }