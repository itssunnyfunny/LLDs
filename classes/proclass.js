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

class studentPassed extends student {
    constructor(){
        this.ispassed = false
    }

   ispasses(passed){
         this.ispassed = passed
         return `${this.name} is passed`
    }
}

// super()
// is is specically used for using any logic which parent have to use in the child class
 class birds extends animal {
      constructor(name,color){
        
        super(name)
        this.color = color
        this.species = 'birds'
      }
   
    speciesof(){
        const info = super.info()
        return `${info} and ${this.color} in color`

    }
 }

// static
// static is methods which is directolly attached to class itself not with the objects
// which is created by the class

// private - # 