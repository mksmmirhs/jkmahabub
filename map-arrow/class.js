class Car {
  make;
  model;
  year;
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getInfo() {
    return `${this.make} made ${this.model} in ${this.year}.`;
  }
}
let myCar = new Car('Toyota', 'Corolla', 2021);
console.log(myCar.getInfo());

class SportsCar extends Car {
  constructor(make, model, year, topSpeed) {
    super(make, model, year);
    this.topSpeed = topSpeed;
  }
  getInfo() {
    return `${super.getInfo()} Top speed ${this.topSpeed}`;
  }
}
const mySportsCar = new SportsCar('Ferrari', 'F2', 2019, 240);
console.log(mySportsCar.getInfo());
console.log(mySportsCar);
