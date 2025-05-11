export interface Borrowable {
    id : string;
    title: string;
    abailable: boolean;
    borrow(): void;
    return(): void;
}