import axios from "axios";
import type { Book } from "../types/Book";

const API_URL = "https://crudcrud.com/api/76de2f0dce564f8eb5705dc1b65ed283/books";

export const getBooks = async (): Promise<Book[]> => {
    const response = await axios.get<Book[]>(`${API_URL}`);
    return response.data;
};

export const addBook = async (book: Book): Promise<Book> => {
    const response = await axios.post<Book>(`${API_URL}`, book);
    return response.data;
}

export const deleteBook = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
}

export const updateBookStatus = async (id: string, status: Book["status"]): Promise<void> => {
    await axios.put(`${API_URL}/${id}`, { status });
}