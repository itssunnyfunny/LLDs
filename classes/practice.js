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
console.log(are.area());
console.log(Rectangle.isSquere(are));
console.log(Rectangle.isSquere(sque));





