const NewTodo = () => {
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="todo">New Todo</label>
      <input id="todo" type="text" />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
