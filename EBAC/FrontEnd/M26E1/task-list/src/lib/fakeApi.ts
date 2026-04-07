export type Tarefa = { id: number; titulo: string };

let tarefas: Tarefa[] = [
  { id: 1, titulo: "Estudar Next.js" },
  { id: 2, titulo: "Escrever testes" },
];

export async function getTarefas(): Promise<Tarefa[]> {
  return Promise.resolve(tarefas);
}

export async function addTarefa(titulo: string): Promise<Tarefa> {
  const nova = { id: Date.now(), titulo };
  tarefas.push(nova);
  return Promise.resolve(nova);
}