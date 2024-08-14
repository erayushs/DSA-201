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

// REVERSE CONTIGUOUS EVEN NUMBERS

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseEvenSublists(head) {
  let dummyNode = new ListNode(0);
  dummyNode.next = head;
  let curr = head;

  while (curr) {
    if (curr.val % 2 == 0) {
      start = curr;
      let stack = [];

      while (curr && curr.val % 2 == 0) {
        stack.push(curr.val);
        curr = curr.next;
      }

      while (start && stack.length > 0) {
        start.val = stack.pop();
        start = start.next;
      }
    } else {
      curr = curr.next;
    }
  }

  return dummyNode.next;

  // if (head == null || head.next == null) return head;
  // let dummyNode = new ListNode(0);
  // dummyNode.next = head;
  // let curr = head;
  // while (curr) {
  //   if (curr.val % 2 === 0) {
  //     let stack = [];
  //     let start = curr;
  //     while (curr && curr.val % 2 == 0) {
  //       stack.push(curr.val);
  //       curr = curr.next;
  //     }
  //     while (start && stack.length > 0) {
  //       start.val = stack.pop();
  //       start = start.next;
  //     }
  //   } else {
  //     curr = curr.next;
  //   }
  // }
  // return dummyNode.next;
}

// Helper function to print the list
function printList(head) {
  let curr = head;
  while (curr) {
    process.stdout.write(curr.val + " ");
    curr = curr.next;
  }
  console.log();
}

// Example usage
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(4);
head.next.next.next.next.next = new ListNode(6);
head.next.next.next.next.next.next = new ListNode(8);
head.next.next.next.next.next.next.next = new ListNode(5);

console.log("Original list:");
printList(head);

head = reverseEvenSublists(head);

console.log("Modified list:");
printList(head);
