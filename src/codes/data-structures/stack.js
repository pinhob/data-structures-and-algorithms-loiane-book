class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count += 1;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count -= 1;
    const result = this.items[this.count];
    delete this.items[this.count];

    return result;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.count - 1];
  }

  clear() {
    this.items = {};
    this.count = 0;
  }
}

const stack = new Stack();

stack.push(5);
stack.push(8);

console.log(stack.size());
