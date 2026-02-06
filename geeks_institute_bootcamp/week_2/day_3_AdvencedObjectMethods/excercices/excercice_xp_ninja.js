class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸");
    super();
  }
}

const pet = new Flamingo();
//new Flamingo() is called
//The Flamingo constructor starts
//First line runs: console.log("I'm pink. 🌸");
//Then super() is called, which invokes the Bird constructor
//The Bird constructor runs: console.log("I'm a bird. 🦢");
//Output:
//I'm pink. 🌸
//I'm a bird. 🦢