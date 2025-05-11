import IoCContainer from "./containers/IoCContainer";
import { Car } from "./models/Car";


const container = IoCContainer.getInstance();

try {
   const spotId  = container.parkingService.park(new Car("CAR-123"));
   console.log(`Parked at spot ${spotId}`);
   container.parkingService.unpark(spotId);
   console.log(`Unparked from  spot ${spotId}`);
} catch (error) {
    console.error(error.message);
    
}