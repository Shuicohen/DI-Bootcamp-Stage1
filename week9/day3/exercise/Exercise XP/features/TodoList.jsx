import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector((state) => state.todoReducer.todos);

  return (
    <div>
      <h2>Todo List</h2>
      {todos.length === 0 ? (
        <p>No todos yet!</p>
      ) : (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} /> // Ensure key={todo.id} is unique
        ))
      )}
    </div>
  );
};

export default TodoList;