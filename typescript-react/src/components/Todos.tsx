import Todo from '../models/todo';

const Todos: React.FC<{ todos: Todo[] }> = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>{todo.text}</li>
    ))}
  </ul>
);
export default Todos;
