import React, { useState } from 'react';
import Todo from '../models/todo';

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const setNewTodo = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos(prev => prev.concat(newTodo));
  };

  const removeTodoHandler = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const contextValue: TodosContextObj = React.useMemo(
    () => ({
      items: todos,
      addTodo: setNewTodo,
      removeTodo: removeTodoHandler,
    }),
    [todos]
  );

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
