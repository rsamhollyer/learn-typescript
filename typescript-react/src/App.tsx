import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const todos = [new Todo('Learn React'), new Todo('Learn Typescript')];
  const setNewTodo = (todoText: string) => {};
  return (
    <div className="App">
      <NewTodo onAddTodo={setNewTodo} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
