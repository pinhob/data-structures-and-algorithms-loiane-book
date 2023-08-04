export default class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  addFront(element) {
    // jogar todos os elementos de count pra frente, iterando sobre ele
    // adicionar o element em lowestCount
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount -= 1;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i -= 1) {
        this.items[i] = this.items[i - 1];
      }

      this.count += 1;
      this.lowestCount = 0;
      this.items[this.lowestCount] = element;
    }
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count += 1;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }

    const item = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount += 1;
    return item;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count -= 1;
    const item = this.items[this.count];
    delete this.items[this.count];
    return item;
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.lowestCount];
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear() {
    this.items = {};
    this.items = 0;
    this.lowestCount = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let stringQueue = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i += 1) {
      const currItem = this.items[i];

      stringQueue = `${stringQueue}, ${currItem}`;
    }
    return stringQueue;
  }
}

const deque = new Deque();
console.log(deque.isEmpty());
deque.addBack('Carlos');
deque.addBack('Daniel');
console.log(deque.toString());
console.log(deque.removeFront());
deque.addBack('Sofia');
deque.addBack('Ligia');
console.log(deque.toString());
console.log(deque.removeBack());
console.log(deque.toString());
console.log(deque.peekFront());
console.log(deque.peekBack());
