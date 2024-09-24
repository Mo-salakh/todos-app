function TodoItem(props) {
    const {id, title, completed, deleteTask} = props


    return (
        <li className="todo_item">
            <p className="paragraph" style={completed ? {textDecoration: 'line-through'} : null}>{title}</p> 
            <button className="btn red darken-3" onClick={() => deleteTask(id)}>X</button>
        </li>
    )
}

export {  TodoItem  }