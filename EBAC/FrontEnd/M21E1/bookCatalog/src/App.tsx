import { useEffect, useState } from "react";
import type { Book } from "./types/Book";
import { BookForm } from "./components/BookForm";
import { BookList } from "./components/BookList";
import {
  getBooks,
  addBook,
  deleteBook,
  updateBookStatus,
} from "./services/api";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const loadBooks = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const handleAddBook = async (book: Book) => {
    const newBook = await addBook(book);
    setBooks((prev) => [...prev, newBook]);
  };

  const handleDeleteBook = async (id: string) => {
    await deleteBook(id);
    setBooks((prev) => prev.filter((book) => book._id !== id));
  };
  
  const handleToggleStatus = async (id: string, status: Book["status"]) => {
    await updateBookStatus(id, status);
    setBooks((prev) =>
      prev.map((book) =>
        book._id === id ? { ...book, status } : book
      )
    );
  };

  return (
    <div className="container">
      <h1>Catálogo de Livros</h1>

      <BookForm onAddBook={handleAddBook} />

      <BookList
        books={books}
        onDelete={handleDeleteBook}
        onToggleStatus={handleToggleStatus}
      />
    </div>
  );
}

export default App;