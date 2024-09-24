function TodoItem(props) {
    const {id, title, completed} = props

    return (
        <li className="todo_item" style={completed ? {textDecoration: 'line-through'} : null}>
            {title}
        </li>
    )
}

export {  TodoItem  }