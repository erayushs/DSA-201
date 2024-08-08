//Defined using Class

class Node {
  constructor(data) {
    this.data = data;
    this.next = null; // address of the next node(It store reference/location of the next node)
  }
}

//this.next is used so to traverse through linked list

//In linked list we can only travel from left to right because this.next has only reference of next node not previous node;

class LinkedList {
  constructor() {
    this.head = null; // currently we do not have anything inside   head, when we have it would point to the first node of our linked list
  }

  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  addLast(data) {
    const newNode = new Node(data);
    newNode.next = null;
  }
}
