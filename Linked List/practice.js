class Car {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  appearance() {
    console.log(`Your car is ${this.name} and is of color ${this.color}`);
  }
}

let car = new Car("Volkswagen", "red");

// car.appearance();

console.log(car);
