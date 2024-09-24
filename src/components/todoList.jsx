import { TodoItem } from "./todoItem"
function TodoList(props) {
    const {todos} = props

    return (
        <div className="todo_content">
            <h1 className="title">Todo list</h1>
            <p>todo tasks: {todos.length}</p>
            <ul className="todo_list">
                {todos.map(todo => {
                    return <TodoItem key={todo.id} {...todo} />
                })}
            </ul>
        </div>
    )
}

export {  TodoList  }