import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "./todoSlice";

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <input type="checkbox" checked={todo.completed} onChange={() => dispatch(toggleTodo(todo.id))} />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
        </div>
    );
};

export default TodoItem;