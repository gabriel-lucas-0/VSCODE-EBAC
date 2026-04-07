import { render, screen, fireEvent } from "@testing-library/react";
import NovaTarefa from "../components/NovaTarefa";

test("deve adicionar tarefa via formulário", () => {
  const mockAdd = jest.fn();

  render(<NovaTarefa onAdd={mockAdd} />);

  const input = screen.getByPlaceholderText("Nova tarefa");
  const button = screen.getByRole("button", { name: /adicionar/i });

  fireEvent.change(input, { target: { value: "Teste" } });
  fireEvent.click(button);

  expect(mockAdd).toHaveBeenCalledWith("Teste");
});