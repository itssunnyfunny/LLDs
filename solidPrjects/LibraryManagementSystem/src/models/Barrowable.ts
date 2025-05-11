export interface Borrowable {
    id : string;
    title: string;
    available: boolean;
    borrow(): void;
    return(): void;
}