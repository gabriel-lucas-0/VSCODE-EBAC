import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Lista from "../components/Lista";

test("renderiza tarefas", () => {
  render(
    <Lista tarefas={[{ id: 1, titulo: "Teste tarefa" }]} />
  );

  expect(screen.getByText("Teste tarefa")).toBeInTheDocument();
});