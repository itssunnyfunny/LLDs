export interface IRepository<T> {
    getById(id: string): T | null;
    getAll(): T[];
    save(item: T): void;
}