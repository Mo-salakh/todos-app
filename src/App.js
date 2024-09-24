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

  return (
    <div className="App container">
        {loading ? <Preloader /> :
        <TodoList todos={todos} />
        }
    </div>
  );
}

export default App;
