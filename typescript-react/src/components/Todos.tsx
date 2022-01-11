import Todo from '../models/todo';
import TodoListItem from './TodoListItem';

const Todos: React.FC<{ todos: Todo[] }> = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <TodoListItem key={todo.id} text={todo.text} />
    ))}
  </ul>
);
export default Todos;
