// creating a method to insert a new value to the first position of an array
Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length; i >= 0; i -= 1) {
    this[i] = this[i - 1];
  }

  this[0] = value;
};


let numbers = [0, 1, 2];
numbers.insertFirstPosition(-1);
console.log('Add new value to first position', numbers);

// or we can use the method unshift, that is similar
numbers.unshift(-3, -2);
console.log('Add new value using unshift', numbers);

// remove first value in array manually; overwriting all values
for (let i = 0; i < numbers.length; i += 1) {
  numbers[i] = numbers[i + 1];
};

console.log('Remove first value manually', numbers);

// manually remove first value and pass to a new array 
Array.prototype.reIndex = function (arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== undefined) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

Array.prototype.removeFirstPosition = function (arr) {
  for (let i = 0; i < arr.length; i += 1) {
    this[i] = this[i + 1];
  }

  return this.reIndex(this);
};

numbers = numbers.removeFirstPosition(numbers);
console.log('removeFirstPosition', numbers);

// with shift
numbers.shift();
console.log('with shift', numbers);