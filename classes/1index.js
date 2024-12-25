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







