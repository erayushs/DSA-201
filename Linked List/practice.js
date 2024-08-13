// class Car {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }

//   appearance() {
//     console.log(`Your car is ${this.name} and is of color ${this.color}`);
//   }
// }

// let car = new Car("Volkswagen", "red");

// // car.appearance();

// console.log(car);

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  addLast(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }
}

let obj = {};

obj.flag = true;

console.log(obj);
