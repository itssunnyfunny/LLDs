

export interface Vehicle {
    id: string;
    type: "motorcycle" |"car";
    size(): "motercycle" | "compact" | "large";      
}