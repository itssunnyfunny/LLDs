import { IRepository } from "./IRepository";
import { Book } from "../models/Book";


export class BookRepository implements IRepository<Book> {
    private store = new Map<string, Book>();
    getById(id: string): Book | null {
        return this.store.get(id) || null;
    }
    getAll(): Book[] {
        return Array.from(this.store.values());
    }
    save(book: Book): void {
        this.store.set(book.id, book);
    }
}