import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, updateTaskProgress } from './tasksSlice';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleEditTask = useCallback((newName) => {
    dispatch(editTask({ id: task.id, updatedTask: { name: newName } }));
  }, [dispatch, task.id]);

  const handleToggleCompletion = useCallback(() => {
    dispatch(updateTaskProgress({ id: task.id, completed: !task.completed }));
  }, [dispatch, task.id, task.completed]);

  return (
    <div>
      <input
        type="text"
        value={task.name}
        onChange={(e) => handleEditTask(e.target.value)}
      />
      <button onClick={handleToggleCompletion}>
        {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
    </div>
  );
};

export default TaskItem;
