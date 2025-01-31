class Animal {
  //defina class Animal
  constructor() {
    console.log("This is constructor from Animal Class"); //Executes as soon as the a variable of this class is created
  }

  moves = true; //should not have definition like var, let, const
}
 
class Rabbit extends Animal {
  //define class Rabbit, "extend" is used to inherit propeties from other class
  constructor() {
    super(); //when a class uses inheritance, both the classes must have constructor and super must be called for executing the super constructor.
    console.log("This is constructor from Rabbit Class"); //Executes as soon as the a variable of this class is created
  }

  eates = true;
}

class Squireel extends Rabbit {
    //define class Rabbit, "extend" is used to inherit propeties from other class
    constructor() {
      super(); //when a class uses inheritance, both the classes must have constructor and super must be called for executing the super constructor.
      console.log("This is constructor from Squireel Class"); //Executes as soon as the a variable of this class is created
    }
  
    eates = true;
  }

console.log("Before Creating ANimal Object")
let a1 = new Animal(); // create a new class Animal for variable a1
console.log(a1.moves); //OP : true

console.log("Before Creating Rabbit Object")
let a2 = new Rabbit(); //creates a new class Rabbit for varialble a2

console.log("Before Creating Squireel Object")
let a3 = new Squireel(); //creates a new class Rabbit for varialble a2

console.log(a2.moves); //true
console.log(a2.eates); //true
console.log(a3.eates); //true
