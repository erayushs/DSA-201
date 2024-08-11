/*


ListNode {
    val: 1,
    next: ListNode { val: 2, next: ListNode { val: 3, next: [ListNode] } }
  }
  ListNode {
    val: 2,
    next: ListNode { val: 3, next: ListNode { val: 4, next: [ListNode] } }
  }
  ListNode {
    val: 3,
    next: ListNode { val: 4, next: ListNode { val: 5, next: null } }
  }
  ListNode { val: 4, next: ListNode { val: 5, next: null } }
  ListNode { val: 5, next: null }


*/

class Node {
  constructor(data) {
    this.value = data;
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
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

let myList = new LinkedList();

myList.addFirst(10);
myList.addFirst(20);
myList.addFirst(30);
myList.addFirst(40);
myList.addFirst(50);
myList.addLast(60);
