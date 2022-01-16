import { useContext } from 'react';
import TodoListItem from './TodoListItem';
import styles from './Todo.module.css';
import { TodosContext } from '../store/todos-context';

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={styles.todos}>
      {todosCtx.items.map(todo => (
        <TodoListItem
          key={todo.id}
          text={todo.text}
          removeTodo={() => todosCtx.removeTodo(todo.id)}
        />
      ))}
    </ul>
  );
};
export default Todos;
