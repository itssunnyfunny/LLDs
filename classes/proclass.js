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
// static is method or property which is directly attached to class itself not with the objects
// which is created by the class and don't depent on the data - it remains same

class cars {
    constructor(model, color, buildIn){
        this.model = model
        this.color = color
        this.buildIn = buildIn
    }

    allAbout(){
        return `${this.model} is build in ${this.buildIn} with the ${this.color} in color`
    }
    static fact(){
        return 'first car company is Peugeot founded in 1810 '
    }
}

// private - # 
// if you what a property or method  is not directly modified or get but can be access within the class
// it helps in hiding the implementation of the class and internal details

  class employees {
    #salary;
    constructor(name, num){
           this.name = name
           this.num = num
           this.#salary = 10000
    } 

    promotion(percent){
       const increase =  this.#salary*percent/100
       this.#salary += increase
       return `${this.name} is promoted by ${percent}% now his salary is ${this.#salary}`
    }
  }

  const firstem = new employees('shani', 12,)

  
  