
import { Book } from "../models/Book";
import { IRepository } from "../repositories/IRepository";

export class BookService {
    constructor(private repository: IRepository<Book>) {}

    addBook(book: Book): void {
        this.repository.save(book);
    }

    getBookById(id: string): Book | null {
        return this.repository.getById(id);
    }

    getAllBooks(): Book[] {
        return this.repository.getAll();
    }
}