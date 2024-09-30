import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

const AddTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (text.trim()) {
        console.log('Todo text:', text); // Debugging log
        dispatch(addTodo(text)); // Dispatch the action to add the todo
        console.log('Dispatched addTodo action'); // Debugging log
        setText(''); // Clear the input field
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add Todo</button>
      </form>
    );
  };
  
  export default AddTodo;