import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./tasksSlice";

const AddTask = () => {
    const taskInputRef = useRef(null);
    const selectedDay = useSelector((state) => state.tasks.selectedDay);
    const dispatch = useDispatch();
  
    const handleAddTask = () => {
      const task = {
        id: Date.now(),
        name: taskInputRef.current.value,
        completed: false
      };
      dispatch(addTask({ day: selectedDay, task }));
      taskInputRef.current.value = '';
    };
  
    return (
      <div>
        <input type="text" ref={taskInputRef} placeholder="New Task" />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    );
  };
  
  export default AddTask;