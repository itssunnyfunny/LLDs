// start practicing the classes 
// go one after one

// bank Account

class Bank {
    constructor(Owner,balance){
        this.Owner = Owner
        this.balance =  balance 
    };

    credit(amount){
      this.balance += amount
      return `${amount} is diposited in the account of ${this.Owner} now his balance is ${this.balance}`;
    }

    debit(amount){
        if (this.balance>amount) {
          this.balance -= amount  
          return  `you removed ${amount} from ${this.Owner}'s account now his balance is ${this.balance}`;
        }
       return `${this.Owner}'s account have only ${this.balance} and you are trying to withdraw ${amount}`;
    }
}

const my = new Bank('shani',100)


// charactor

class Charactor {
  #health;
  constructor (name, type, power){
     this.name = name
     this.type = type
     this.#health = 200 
     this.power = power
  };
// get - getter function - for properties(both private/public) how its value is can be get
  get health(){
    return this.#health;
  }

  // set - setter function - for properties(both private/public) how its value can be set/modified
  set health (value) {
     throw new Error('what is this you can not change health directly')
  }

  attack(target) {
    target.#health -= this.power
    return `${this.name} attack on ${target.name} now the health of ${target.name} is ${target.#health}`
  }

  heal (target){
     this.#health += target

     return `${this.name} is healed by ${target} now his health is ${this.#health}`
  }
   

}

const hero = new Charactor('hero',' hero' , 50);
const villen = new Charactor('villen', 'villen', 70);












