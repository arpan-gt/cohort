class Animal {
  constructor(name, legCount) {
    this.name = name;
    this.legCount = legCount;
  }

  static myType() {
    //  static means belongs to class iteself not to instance
    return console.log("Animal");
  }

  describe() {
    return `${this.name} has ${this.legCount} legs`;
  }
}

class car {
  constructor(brandName, type) {
    this.brandName = brandName;
    this.type = type;
  }
  describe() {
    return `this ${this.brandName} is ${this.type} car`;
  }
}

const car1 = new car("BMW", "supercar");
console.log("car class : ", car1.describe());
const A1 = new Animal("cow", 4);
console.log("Animal Class :", A1.describe());
const A2 = new Animal("dog", "4");
console.log(A2.describe());
console.log(Animal.myType());
