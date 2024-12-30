// classes
// blueprint for creating objects

class calculate {
  add(a,b){
   return a*b;
  }
}

// contructor
// automatically called when the new Class is intialized
class animal {
    constructor (name, species){
        this.name = name
        this.species = species
    }

    info(){
        return `${this.name} is species of ${this.species}`
    }
}

// properties
 // this.name and this.species is properties of that object

// methods
// add( ) and info() is methods for there own objects

// setter & getter
//getter and setter is a specific methods which is look like properties 
// and specifically used for geting and updating any properties( public & private)
 class student {
    constructor (name, rollNo){
        this.name = name
        this.rollNo = rollNo
    }

    get rollNo(){
        return this.rollNo
    }

    set rollNo(newNum){
         this.rollNo = newNum
    }
 }

// inheritance - extends 
// using the logic of a class and extends its properties and methods to build out new class

// super()
// is is specically used for using any logic which parent have to use in the child class


// static

// private - # 