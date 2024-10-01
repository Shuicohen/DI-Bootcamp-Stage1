import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

const AddTodo = () => {
    const inputRef = useRef();
    const dispatch = useDispatch();

    return (
        <div>
            <input ref={inputRef}/>
            <button
                onClick={() => {
                    dispatch(addTodo(inputRef.current.value));
                    inputRef.current.value = "";
                }}
            >
                Add Todo
            </button>
        </div>
    );
};

export default AddTodo;