import { useState } from 'react';
import List from './List';

type Todo = {
  id: number;
  text: string;
};

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn TypeScript' },
    { id: 2, text: 'Build a Todo List' },
  ]);

  const addTodo = () => {
    const newTodo = {
      id: todos.length + 1, 
      text: `Todo created at ${new Date().toLocaleString()}`, 
    };
    setTodos([...todos, newTodo]); 
  };

  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={() => addTodo()}>Add Todo</button>
      <List 
        items={todos}
        renderItem={(todo) => <span>{todo.text}</span>} 
      />
    </div>
  );
};

export default TodoApp;
