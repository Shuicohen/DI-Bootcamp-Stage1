import React, { useContext } from "react";
import { TaskContext, FILTER_TASKS } from "./TaskContext";

function TaskFilter() {
  const { dispatch } = useContext(TaskContext);

  return (
    <div>
      <button onClick={() => dispatch({ type: FILTER_TASKS, filter: "all" })}>
        Show All
      </button>
      <button onClick={() => dispatch({ type: FILTER_TASKS, filter: "active" })}>
        Show Active
      </button>
      <button onClick={() => dispatch({ type: FILTER_TASKS, filter: "completed" })}>
        Show Completed
      </button>
    </div>
  );
}

export default TaskFilter;
