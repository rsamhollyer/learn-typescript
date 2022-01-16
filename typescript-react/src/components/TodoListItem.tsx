/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import styles from './TodoItem.module.css';

const TodoListItem: React.FC<{ text: string; removeTodo: () => void }> = ({
  text,
  removeTodo,
}) => (
  <li className={styles.item} onClick={removeTodo}>
    {text}
  </li>
);

export default TodoListItem;
