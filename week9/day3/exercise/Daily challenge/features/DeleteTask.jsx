import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "./tasksSlice";

const DeleteTask = ({ taskId }) => {
  const dispatch = useDispatch();
  const selectedDay = useSelector((state) => state.tasks.selectedDay);

  const handleDelete = () => {
    dispatch(deleteTask({ day: selectedDay, taskId }));
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteTask;
