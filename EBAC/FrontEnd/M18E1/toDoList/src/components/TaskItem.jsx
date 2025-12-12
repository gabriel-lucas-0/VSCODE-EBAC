import React from "react";
import { useTasks } from "../context/TaskContext";

function TaskItem({ task }) {
  const { toggleTask, removeTask } = useTasks();

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <span className="task-text">{task.text}</span>

      <div className="task-actions">
        <button
          className="complete-btn"
          onClick={() => toggleTask(task.id)}
        >
          {task.completed ? "Desfazer" : "Concluir"}
        </button>

        <button
          className="delete-btn"
          onClick={() => removeTask(task.id)}
        >
          Remover
        </button>
      </div>
    </li>
  );
}

export default React.memo(TaskItem);
