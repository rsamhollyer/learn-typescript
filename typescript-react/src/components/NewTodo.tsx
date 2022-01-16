import { useContext, useRef } from 'react';
import { TodosContext } from '../store/todos-context';
import styles from './NewTodo.module.css';

const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodosContext);
  const todoTextRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextRef.current?.value;

    if (enteredText?.trim()?.length === 0) {
      throw Error('You must enter a todo!');
    }
    if (enteredText) {
      todoCtx.addTodo(enteredText);
    }
  };
  if (todoTextRef && todoTextRef.current && todoTextRef.current.value) {
    todoTextRef.current.value = '';
  }
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label htmlFor="todo">New Todo</label>
      <input id="todo" type="text" ref={todoTextRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
