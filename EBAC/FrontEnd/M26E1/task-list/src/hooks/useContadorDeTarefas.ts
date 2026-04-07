import { useMemo } from "react";
import { Tarefa } from "../lib/fakeApi";

export function useContadorDeTarefas(tarefas: Tarefa[]) {
  return useMemo(() => tarefas.length, [tarefas]);
}