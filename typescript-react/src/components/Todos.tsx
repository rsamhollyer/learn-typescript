import Todo from '../models/todo';
import TodoListItem from './TodoListItem';
import styles from './Todo.module.css';

const Todos: React.FC<{ todos: Todo[]; removeTodo: (id: string) => void }> = ({
  todos,
  removeTodo,
}) => (
  <ul className={styles.todos}>
    {todos.map(todo => (
      <TodoListItem
        key={todo.id}
        text={todo.text}
        removeTodo={() => removeTodo(todo.id)}
      />
    ))}
  </ul>
);
export default Todos;
