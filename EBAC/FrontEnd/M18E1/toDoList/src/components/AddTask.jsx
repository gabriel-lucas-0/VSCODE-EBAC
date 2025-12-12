import React, { useState, useCallback } from "react";
import { useTasks } from "../context/TaskContext";

function AddTaskComponent() {
  const [text, setText] = useState("");
  const { addTask } = useTasks();

  const handleChange = useCallback((e) => setText(e.target.value), []);
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    addTask(trimmed);
    setText("");
  }, [text, addTask]);

  return (
    <form onSubmit={handleSubmit} className="add-task">
      <input
        type="text"
        placeholder="Adicionar tarefa..."
        value={text}
        onChange={handleChange}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default React.memo(AddTaskComponent);