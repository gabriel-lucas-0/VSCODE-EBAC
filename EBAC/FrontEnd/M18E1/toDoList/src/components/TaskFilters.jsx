import React, { useCallback } from "react";
import { useTasks } from "../context/TaskContext";

function TaskFiltersComponent() {
  const { filter, setFilter } = useTasks();

  const setAll = useCallback(() => setFilter("all"), [setFilter]);
  const setCompleted = useCallback(() => setFilter("completed"), [setFilter]);
  const setPending = useCallback(() => setFilter("pending"), [setFilter]);

  return (
    <div className="filters">
      <button className={filter === "all" ? "active" : ""} onClick={setAll}>Todas</button>
      <button className={filter === "completed" ? "active" : ""} onClick={setCompleted}>Concluídas</button>
      <button className={filter === "pending" ? "active" : ""} onClick={setPending}>Pendentes</button>
    </div>
  );
}

export default React.memo(TaskFiltersComponent);
