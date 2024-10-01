import { useSelector } from 'react-redux';
import DeleteTask from './DeleteTask';
import EditTask from './EditTask';
import { useState } from 'react';

const TaskList = () => {
  const selectedDay = useSelector((state) => state.tasks.selectedDay);
  const tasks = useSelector((state) => state.tasks.tasksByDay[selectedDay] || []);
  const [editingTaskId, setEditingTaskId] = useState(null); 

  if (!selectedDay) {
    return <div>Please select a day to view tasks.</div>;
  }

  const handleDoubleClick = (taskId) => {
    setEditingTaskId(taskId); 
  };

  const handleEditComplete = () => {
    setEditingTaskId(null); 
  };

  return (
    <div>
      <h3>Tasks for {selectedDay}</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} onDoubleClick={() => handleDoubleClick(task.id)}>
            {editingTaskId === task.id ? (
              <EditTask taskId={task.id} onEditComplete={handleEditComplete} />
            ) : (
              <span>{task.name}</span> 
            )}
            <DeleteTask taskId={task.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
