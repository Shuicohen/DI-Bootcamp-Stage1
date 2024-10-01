import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { editTask } from "./tasksSlice";

const EditTask = ({ taskId, onEditComplete }) => {
  const dispatch = useDispatch();
  const selectedDay = useSelector((state) => state.tasks.selectedDay);
  const task = useSelector((state) =>
    state.tasks.tasksByDay[selectedDay]?.find((task) => task.id === taskId)
  );
  const [taskName, setTaskName] = useState(task.name);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleEdit();
    }
  };

  const handleEdit = () => {
    dispatch(editTask({ day: selectedDay, taskId, updatedTask: { name: taskName } }));
    onEditComplete(); 
  };

  return (
    <input
      type="text"
      value={taskName}
      onChange={(e) => setTaskName(e.target.value)}
      onBlur={handleEdit} 
      onKeyPress={handleKeyPress} 
      autoFocus
    />
  );
};

export default EditTask;
