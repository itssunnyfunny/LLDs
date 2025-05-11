import { IRepository } from "../repositories/IRepository";
import { Borrowable } from "../models/Barrowable";


export class LoanService {
    constructor(private repository: IRepository<Borrowable>) {}

    borrowItem(id: string): void {
        const item = this.repository.getById(id);
        if (!item) {
            throw new Error("Item not found");
        }
        item.borrow();
        this.repository.save(item);
    }

    returnItem(id: string): void {
        const item = this.repository.getById(id);
        if (!item) {
            throw new Error("Item not found");
        }
        item.return();
        this.repository.save(item);
    }
}