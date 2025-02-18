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

// const myself = new Person('shani',111)
//  myself.age = 12;
// console.log(myself.name);
// console.log(myself.age);


// 8 Factory method role changing
class User {
    constructor(username , role){
        this.username = username
        this.role = role
    }

    static createAdmin(username){
     return   new User(username,"admin")
    }

}

// const my  = new User('uganda','user');
// console.log(my);
// console.log();
// const upMy = User.createAdmin(my.username)
// console.log(upMy);


// 9 polymorphism of sounds

class Animal {
    speak(){
        return `generic sound of a animal`
    }
}

class Dog extends Animal{
    speak(){
        return `woof!`
    }
};

class Cat extends Animal{
    speak(){
        return 'Meow'
    }
}

function makeAnimalSpeack(animals) {
    for (const animal of animals) {
        console.log(animal.speak());
        
    }
};

const animals = [
    new Dog(),
    new Cat(),
    new Animal()
]

makeAnimalSpeack(animals) // i don't understand it property 


// 10 Bank Account Samulation

class Bank {
    constructor(name,balance){
        this.name  = name
        this._balance = balance
    }
    deposit(amount){
        this._balance += amount
        return `in th account of ${this.name} ${amount} is deposited`
    }
    withdraw(amount){
        this._balance -= amount
        return `in the account of ${this.name} ${amount} is withdraw`
    }

    get balance(){
        return this._balance
    }

    static transfer(fromAccount , toAccount , amount){
        fromAccount.withdraw(amount) 
        toAccount.deposit(amount)

        return `now ${fromAccount.name}'s account  have ${fromAccount._balance} and  ${toAccount.name} account have ${toAccount._balance}`
    }
};

const shani = new Bank('shani',100);
const ravi  = new Bank('ravi' , 100);

// console.log(shani, ravi);
// console.log(shani.deposit(100));
// console.log(ravi.withdraw(50));
// console.log(shani.balance, ravi.balance);
// console.log(Bank.transfer(shani, ravi,50));













