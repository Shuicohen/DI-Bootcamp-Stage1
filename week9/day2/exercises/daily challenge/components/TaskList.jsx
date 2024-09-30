import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/tasksSlice.js';

const TaskList = ({ tasks, day }) => {
    const dispatch = useDispatch();

    const handleDelete = (taskIndex) => {
        dispatch(deleteTask({ day, taskIndex }));
    };

    return (
        <ul className="task-list">
            {tasks.map((task, index) => (
             <li className="task-list-item" key={index}>
               <span>{task}</span>
               <button onClick={() => handleDelete(index)}>Delete</button>
             </li>
          ))}
        </ul>
    );
};

export default TaskList;