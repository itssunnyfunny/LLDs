// practicing the class with some questions

//1 rectangle

class Rectangle {
    constructor(width, height){
        this.width = width
        this.height = height
    }

    area(){
        return this.width * this.height ;
    }
    //2 
    static isSquere(rectangle) {
        if (rectangle.height === rectangle.width) {
            return `it is a Squere`
        }
        return `it is not a Squere`
    }
}

const are = new Rectangle(55, 105)
const sque = new Rectangle(55,55)
// console.log(are.area());
// console.log(Rectangle.isSquere(are));
// console.log(Rectangle.isSquere(sque));


//3 Circle

class Circle {
    static PI = Math.PI

    constructor(radius){
        this.radius = radius 
    
    }
    circumference(){
      return  2* this.radius* Circle.PI 
    }
}
// Circle.PI because it belog to the class not the object created from it.

const cir = new Circle(12)
// console.log(cir);

// console.log(cir.circumference());


//4 Car 

class Car {
    constructor(Brand, Model){
        this.Brand = Brand
        this.Model = Model
    }
    getDetails(){
        return `this car's brand name is ${this.Brand} and ${this.Model} model`
    }
    // 5
    start(){
        return `Car is starting`
    }

}


const car = new Car('Tesla', 's-3')
// console.log(car);
// console.log(car.getDetails());
// console.log(car.start());

// Medium //


//6 extend Car class in to electric

class ElectricCar extends Car {
    constructor(Brand, Model,BatteryCapacity){
        super(Brand, Model)
        this.BatteryCapacity = BatteryCapacity
    }
    getRenge(){
        return this.BatteryCapacity * 5;
    }
   getDetails(){
    const getDetails = super.getDetails()
    return `${getDetails} brateryCapacity of ${this.BatteryCapacity}`
   }
}

const electric = new ElectricCar('Tata','nexon',20)

//7 age as a private property

class Person {
    
    constructor(name,age){
        this.name = name
        this._age = age
    }
    get age(){
        return `${this._age}`
    }
    set age(newAge){
        if (typeof newAge !== "number"|| newAge <=0) {
            return ` please provide age greater than 0`
        }
       this._age = newAge
    }
}

const myself = new Person('shani',111)
 myself.age = 12;
console.log(myself.name);
console.log(myself.age);






