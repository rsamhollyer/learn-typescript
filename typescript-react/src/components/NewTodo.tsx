import { useRef } from 'react';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = ({
  onAddTodo,
}) => {
  const todoTextRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextRef.current?.value;

    if (enteredText?.trim()?.length === 0) {
      throw Error('You must enter a todo!');
    }
    if (enteredText) onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="todo">New Todo</label>
      <input id="todo" type="text" ref={todoTextRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
