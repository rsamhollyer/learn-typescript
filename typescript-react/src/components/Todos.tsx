import Todo from '../models/todo';
import TodoListItem from './TodoListItem';
import styles from './Todo.module.css';

const Todos: React.FC<{ todos: Todo[] }> = ({ todos }) => (
  <ul className={styles.todos}>
    {todos.map(todo => (
      <TodoListItem key={todo.id} text={todo.text} />
    ))}
  </ul>
);
export default Todos;
