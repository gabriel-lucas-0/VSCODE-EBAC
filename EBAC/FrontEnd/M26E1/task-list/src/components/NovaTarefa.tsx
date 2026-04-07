"use client";
import { useState } from "react";

type Props = {
  onAdd: (titulo: string) => void;
};

export default function NovaTarefa({ onAdd }: Props) {
  const [titulo, setTitulo] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!titulo.trim()) return;
    onAdd(titulo);
    setTitulo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nova tarefa"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}