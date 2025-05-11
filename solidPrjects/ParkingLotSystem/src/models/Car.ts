import { Vehicle } from "./Vehicle";


export class Car implements Vehicle {
    id: string;

    type: "car" = "car";
    constructor(id: string) {
        this.id = id;
    }
    size(): "motercycle" | "compact" | "large" {
        return "compact";
    } 
}