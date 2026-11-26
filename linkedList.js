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

  size() {
    let count = 0;
    let currentLoc = this.head;
    if (currentLoc === null) return count;
    else {
      while (currentLoc !== null) {
        count++;
        currentLoc = currentLoc.next;
      }
      return count;
    }
  }

  head() {
    if (this.head.value === null) return undefined;
    return this.head.value;
  }

  at(n) {
    if (n > this.size()) return undefined;
    let currentNode = this.head;
    for (let i = 0; i < n; i++) {
      currentNode = currentNode.next;
    }
    if (currentNode === null) return undefined;
    else return currentNode.value;
  }

  contains(value) {}

  findIndex(value) {}

  toString() {}
}

export default LinkedList;
