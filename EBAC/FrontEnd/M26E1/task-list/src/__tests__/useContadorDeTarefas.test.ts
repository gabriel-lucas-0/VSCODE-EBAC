import { renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "../hooks/useContadorDeTarefas";

test("deve contar corretamente", () => {
  const { result } = renderHook(() =>
    useContadorDeTarefas([{ id: 1, titulo: "A" }])
  );

  expect(result.current).toBe(1);
});