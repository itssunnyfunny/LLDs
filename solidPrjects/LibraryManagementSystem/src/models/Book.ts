import { Borrowable } from "./Barrowable";

export class Book implements Borrowable {

    constructor(public id: string, public title: string, public available: boolean = true) {}

    borrow(): void {
        if (!this.available) {
         throw new Error("Book is not available for borrowing.");
        }
        this.available = false;
}

return(): void {
    this.available = true;
}
}