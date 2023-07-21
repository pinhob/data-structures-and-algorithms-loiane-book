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

  toString() {
    if (this.isEmpty()) {
      return undefined;
    }

    let objString = `${this.items[0]}`;

    for (let i = 1; i < this.count; i += 1) {
      objString = `${objString}, ${this.items[i]}`;
    }

    return objString;
  }
}

const stack = new Stack();

stack.push(5);
stack.push(8);
stack.push(11);

console.log(stack.size());
console.log(stack.toString());

// creating the class with WeakMap to have private atributes
const items = new WeakMap();
class StackWeakMap {
  constructor() {
    items.set(this, []); // creating the private atribute
  }

  push(element) {
    const s = items.get(this);
    s.push(element);
  }

  pop() {
    const s = items.get(this);
    return s.pop();
  }
}

const stackWeakMap = new StackWeakMap();
stackWeakMap.push(1);

console.log(Object.getOwnPropertyNames(stack));
console.log(Object.getOwnPropertyNames(stackWeakMap));


function decimalToBinary(decNumber) {
  const remStack = new Stack();
  let number = decNumber;
  let rem;
  let binaryString = '';
  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}

console.log(decimalToBinary(10));
