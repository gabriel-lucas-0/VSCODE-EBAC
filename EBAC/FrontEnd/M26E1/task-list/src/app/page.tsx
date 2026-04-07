import { getTarefas } from "../lib/fakeApi";
import Lista from "../components/Lista";

export default async function Page() {
  const tarefas = await getTarefas();

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <Lista tarefas={tarefas} />
    </div>
  );
}