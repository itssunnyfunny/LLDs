 import { Spot } from "../models/Spot";
 import { Vehicle } from "../models/Vehicle";


 export class ParkingService {
    private spots: Spot[];
    constructor (spots: Spot[]) {
        this.spots  = spots
    }

    park(vahicle: Vehicle): string {
        const spot = this.spots.find(s => s.isfree() && s.size === vahicle.size());
        if (!spot) throw new Error("No available spot");
        spot.park(vahicle.id);
        return spot.id;
    }
    unpark(spotId: String): void {
      const spot = this.spots.find(s => s.id === spotId);
      if (!spot) throw new Error("Invalid spot");
      spot.leave();
 }
 }