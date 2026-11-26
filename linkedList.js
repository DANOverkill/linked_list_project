import Node from "./node.js";

class LinkedList {
  constructor(value) {
    this.head = null;
  }

  tail() {
    if (this.head === null) return undefined;
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    return current;
  }

  append(value) {
    if (this.tail() === undefined) return (this.head = new Node(value));
    else return (this.tail().next = new Node(value));
  }
}

export default LinkedList;
