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


//4 






