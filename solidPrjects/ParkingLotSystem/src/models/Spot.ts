export interface Spot {
    id: string;
    size: "motercycle" | "compact" | "large"; 
    isfree(): boolean;
    park(vehicleId: string): void;
    leave(): void;
}