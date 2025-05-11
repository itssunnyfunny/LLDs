import { Book } from "./models/Book";
import { BookRepository } from "./repositories/BookRepository";
import { BookService } from "./services/BookService";
import { LoanService } from "./services/LoanService";

// Setup
const bookRepo = new BookRepository();
const bookService = new BookService(bookRepo);
const loanService = new LoanService(bookRepo);

// Seed
bookService.addBook(new Book("B1", "1984"));
bookService.addBook(new Book("B2", "Animal Farm"));

// Borrow & Return
try {
  loanService.borrowItem("B1");
  console.log("Borrowed B1");
  loanService.returnItem("B1");
  console.log("Returned B1");
} catch (err) {
  console.error(err.message);
}