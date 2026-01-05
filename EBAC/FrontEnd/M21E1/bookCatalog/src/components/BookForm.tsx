import { useState } from "react";
import type { FormEvent } from "react";
import type { Book, BookStatus } from "../types/Book";

interface BookFormProps {
  onAddBook: (book: Book) => void;
}

export function BookForm({ onAddBook }: BookFormProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState<BookStatus>("Não Lido");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onAddBook({ title, author, status });
    setTitle("");
    setAuthor("");
    setStatus("Não Lido");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value as BookStatus)}>
        <option value="Não Lido">Não Lido</option>
        <option value="Lido">Lido</option>
      </select>
      <button type="submit">Adcionar Livro</button>
    </form>
  );
}