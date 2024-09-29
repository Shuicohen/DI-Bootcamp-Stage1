import React, { useContext, useState } from "react";
import { TaskContext, COMPLETE_TASK, REMOVE_TASK, EDIT_TASK } from "./TaskContext";

const TaskList = () => {
    const { state, dispatch } = useContext(TaskContext);
    const { tasks, filter } = state;

    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editText, setEditText] = useState("");

    const handleCompleteTask = (id) => {
        dispatch({ type: COMPLETE_TASK, id });
    };

    const handleRemoveTask = (id) => {
        dispatch({ type: REMOVE_TASK, id });
    };

    const handleEditTask = (id, currentText) => {
      setEditingTaskId(id);
      setEditText(currentText);
    };
  
    const handleSaveEdit = (id) => {
      dispatch({ type: EDIT_TASK, id, newText: editText });
      setEditingTaskId(null); 
    };

    const filteredTasks = tasks.filter((task) => {
        if(filter === "completed") return task.completed;
        if(filter === "active") return !task.completed;
        return true;
    });
    
    return (
      <div>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCompleteTask(task.id)}
            />
            {editingTaskId === task.id ? (
              // Render input field when in editing mode
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onBlur={() => handleSaveEdit(task.id)} // Save edit when input loses focus
              />
            ) : (
              // Display task text when not in editing mode
              <span
                style={{ textDecoration: task.completed ? "line-through" : "none" }}
                onDoubleClick={() => handleEditTask(task.id, task.text)}
              >
                {task.text}
              </span>
            )}
            <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
    );
};

export default TaskList