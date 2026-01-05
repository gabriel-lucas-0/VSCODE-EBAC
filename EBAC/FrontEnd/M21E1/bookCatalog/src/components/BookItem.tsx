import React from 'react';
import type { Book } from '../types/Book';

interface BookItemProps {
  book: Book;
  onDelete: (id: string) => void;
  onToggleStatus: (id: string, status: Book["status"]) => void;
}

export function BookItem({ book, onDelete, onToggleStatus }: BookItemProps) {
    return (
        <li className="book-item">
            <div>
                <strong>{book.title}</strong>
                <p>Autor: {book.author}</p>
                <span>Status: {book.status}</span>
            </div>
            <div className="actions">
                <button onClick={() =>
                    onToggleStatus(book._id!, book.status === 'Lido' ? 'Não Lido' : 'Lido')
                } >Alternar Status</button>

                <button onClick={() =>
                    onDelete(book._id!)
                } >Remover</button>
            </div>
        </li>
    );
}