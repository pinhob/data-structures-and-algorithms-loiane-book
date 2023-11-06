export function defaultEquals(a, b) {
  return a === b;
}

export class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
  toString() {
    return `${this.element}`;
  }
}


export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = null;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element);
    let current;

    if (this.head == null) {
      console.log('test');
      this.head = node;
    } else {
      current = this.head;

      while (current.next !== undefined) {
        current = current.next;
      }

      current.next = node;
    }

    this.count += 1;
  }

  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node !== null; i++) {
        node = node.next;
      }

      return node;
    }

    return undefined;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;

      if (index === 0) {
        current = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count -= 1;
      return current.element;
    }

    return undefined;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);

      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }

      this.count += 1;
      return true;
    }

    return false;
  }

  indexOf(element) {
    let current = this.head;

    for (let i = 0; i < this.count && current !== null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }

    return -1;
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }
}

const list = new LinkedList();
list.push(10);
list.push(15);
list.push(20);
list.insert(30, 1);
list.insert(40, 1);
console.log(list.indexOf(20), list.remove(40), list.remove(30));
console.log(list);
