import React from "react";
import { TaskProvider } from "./components/TaskContext";
import TaskAdder from "./components/TaskAdder";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <h1>Enhanced Task Manager</h1>
        <TaskAdder />
        <TaskFilter />
        <TaskList />
      </TaskProvider>
    </div>
  );
}

export default App;
