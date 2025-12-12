import React, { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TaskFilters from "./components/TaskFilters";
import { useTasks } from "./context/TaskContext";

export default function App() {
  const { tasks } = useTasks();
  const [filter, setFilter] = useState("all");

  const filteredTasks =
    filter === "completed"
      ? tasks.filter((t) => t.completed)
      : filter === "pending"
      ? tasks.filter((t) => !t.completed)
      : tasks;

  return (
    <div className="app-container">
      <h1>To-Do List</h1>

      <AddTask />

      <TaskFilters filter={filter} setFilter={setFilter} />

      <TaskList tasks={filteredTasks} />
    </div>
  );
}
