const Todos: React.FC<{ todos: string[] }> = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo}>{todo}</li>
    ))}
  </ul>
);
export default Todos;
