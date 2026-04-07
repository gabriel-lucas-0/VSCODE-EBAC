"use client";

import { useState } from "react";
import NovaTarefa from "./NovaTarefa";
import { Tarefa, addTarefa } from "../lib/fakeApi";
import { useContadorDeTarefas } from "../hooks/useContadorDeTarefas";

export default function Lista({ tarefas }: { tarefas: Tarefa[] }) {
  const [lista, setLista] = useState(tarefas);
  const count = useContadorDeTarefas(lista);

  async function handleAdd(titulo: string) {
    const nova = await addTarefa(titulo);
    setLista((prev) => [...prev, nova]);
  }

  return (
    <div>
      <p className="total">Total: {count}</p>

      <ul>
        {lista.map((t) => (
          <li key={t.id}>{t.titulo}</li>
        ))}
      </ul>

      <NovaTarefa onAdd={handleAdd} />
    </div>
  );
}