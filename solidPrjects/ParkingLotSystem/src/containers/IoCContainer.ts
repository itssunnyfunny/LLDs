import { CompactSpot } from "../models/CompactSpot";
import { ParkingService } from "../services/ParkingService";


class IoCContainer {
    private static instance: IoCContainer;
    public parkingService: ParkingService;

    private constructor(){
        const spots = [
          new CompactSpot("A1"), 
          new CompactSpot("A3"), 
          new CompactSpot("A2"), 
          new CompactSpot("A4"), 
            
        ];
        this.parkingService = new ParkingService(spots);
    }

    public static getInstance() {
        if(!IoCContainer.instance) IoCContainer.instance = new IoCContainer();
        return IoCContainer.instance;
    }
}

export default IoCContainer;