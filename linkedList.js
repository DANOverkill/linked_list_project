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
    let tail = this.tail();
    if (tail === undefined) this.head = new Node(value);
    else tail.next = new Node(value);
  }

  prepend(value) {
    let oldHead = this.head;
    this.head = new Node(value);
    this.head.next = oldHead;
  }

  size() {}

  head() {}

  at(n) {}

  contains(value) {}

  findIndex(value) {}

  toString() {}
}

export default LinkedList;
