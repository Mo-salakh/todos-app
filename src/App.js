import { useEffect, useState } from 'react';
import { TodoList } from './components/todoList';
import { Preloader } from './components/Preloader';

function App() {

  let [todos, setTodos] = useState([])
  let [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true); // Start loading
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            setTodos(data);
            setLoading(false);
        })
        .catch(err => {
            console.error(err.name);
            setLoading(false);
        });
}, []);

  function deleteTask(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="App container">
      <div className="todo_content">
        {loading ? <Preloader /> :
        <TodoList todos={todos} deleteTask={deleteTask} />
        }
      </div>
    </div>
  );
}

export default App;
