import { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const setNewTodo = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos(prev => prev.concat(newTodo));
  };

  const removeTodoHandler = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={setNewTodo} />
      <Todos todos={todos} removeTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
