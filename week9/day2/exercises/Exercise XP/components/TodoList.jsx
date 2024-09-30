import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";
import { toggleTodo, removeTodo } from "../redux/actions";


const TodoList = () => {
    const todos = useSelector((state) => {
      console.log('State in TodoList:', state); // Debugging log
      return state.todoReducer.todos || [];
    });
    const dispatch = useDispatch();
  
    const handleToggleTodo = (id) => {
      dispatch(toggleTodo(id));
    };
  
    const handleRemoveTodo = (id) => {
      dispatch(removeTodo(id));
    };
  
    return (
      <ul>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              toggleTodo={handleToggleTodo}
              removeTodo={handleRemoveTodo}
            />
          ))
        ) : (
          <li>No todos available</li>
        )}
      </ul>
    );
  };
  
  export default TodoList;