import React from "react";
import TaskItem from "./TaskItem";
import { useTasks } from "../context/TaskContext";

export default function TaskList() {
  const { filteredTasks } = useTasks();

  return (
    <ul className="task-list" aria-live="polite">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
