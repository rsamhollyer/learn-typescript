import styles from './TodoItem.module.css';

const TodoListItem: React.FC<{ text: string }> = ({ text }) => (
  <li className={styles.item}>{text}</li>
);

export default TodoListItem;
