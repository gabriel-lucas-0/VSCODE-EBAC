import type { Book } from '../types/Book';
import { BookItem } from './BookItem';

interface BookListProps {
  books: Book[];
  onDelete: (id: string) => void;
  onToggleStatus: (id: string, status: Book["status"]) => void;
}

export function BookList ({
    books,
    onDelete,
    onToggleStatus
}: BookListProps) {
    return (
        <ul className="book-list">
            {books.map(book => (
                <BookItem
                    key={book._id}
                    book={book}
                    onDelete={onDelete}
                    onToggleStatus={onToggleStatus}
                />
            ))}
        </ul>
    );
}