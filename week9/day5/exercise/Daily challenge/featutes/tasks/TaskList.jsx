import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTask, toggleTaskCompletion } from './state/taskSlice';

const TaskList = ({ selectedCategoryId }) => {
  const tasks = useSelector((state) => 
    state.taskReducer.tasks.filter((task) => task.categoryId === selectedCategoryId)
  );
  const dispatch = useDispatch();
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskName, setEditTaskName] = useState('');

  
  const handleEditTask = useCallback((id, name) => {
    dispatch(editTask({ id, updatedTask: { name } }));
    setEditTaskId(null); 
  }, [dispatch]);

  
  const handleToggleCompletion = useCallback((id) => {
    dispatch(toggleTaskCompletion(id));
  }, [dispatch]);

  return (
    <div>
      <h2>Tasks for Category {selectedCategoryId}</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {editTaskId === task.id ? (
              <input
                type="text"
                value={editTaskName}
                onChange={(e) => setEditTaskName(e.target.value)}
              />
            ) : (
              <span>
                {task.name} {task.completed ? '' : ''}
              </span>
            )}

            <button onClick={() => handleToggleCompletion(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>

            {editTaskId === task.id ? (
              <button onClick={() => handleEditTask(task.id, editTaskName)}>
                Save
              </button>
            ) : (
              <button onClick={() => {
                setEditTaskId(task.id);
                setEditTaskName(task.name);
              }}>
                Edit
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
