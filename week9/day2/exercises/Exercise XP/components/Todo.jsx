const Todo = ({ todo, toggleTodo, removeTodo }) => (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.text}
      <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </li>
);

export default Todo