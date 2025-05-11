import { Spot } from "./Spot";

export class CompactSpot implements Spot {
    id: string;
    size: "compact" = "compact";
    private vehicleId: string | null = null;

    constructor(id: string) {
        this.id = id;
    }

    isfree(): boolean {
        return this.vehicleId === null;
    }

    park(vehicleId: string | null): void {
        if (this.isfree()) {
            this.vehicleId = vehicleId;
        } else {
            throw new Error("Spot is already occupied");
        }
    }

    leave(): void {
        if (!this.isfree()) {
            this.vehicleId = null;
        } else {
            throw new Error("Spot is already free");
        }
    }
}