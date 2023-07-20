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

// remove by index range with splice
numbers.splice(5, 3);
console.log('splice to remove', numbers);

// remove and add new itens with splice
numbers.splice(5, 0, 2, 3, 4) // without removing anything
numbers.splice(5, 3, 2, 3, 4) // removing 3 index before add new ones
console.log('splice to add', numbers);

// matriz: multidimensional array
let averageTemp = [];
averageTemp[0] = [65, 73, 75, 70, 68];
averageTemp[0] = [73, 75, 78, 72, 74];

const matrix3x3x3 = [];
for (let i = 0; i < 3; i += 1) {
  matrix3x3x3[i] = [];
  for (let j = 0; j < 3; j += 1) {
    matrix3x3x3[i][j] = [];
    for (let z = 0; z < 3; z += 1) {
      matrix3x3x3[i][j][z] = i + j + z;
    }
  }
}

console.log('matrix 3x3x3', matrix3x3x3);

// merging arrays with concat
const zero = 0;
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];
numbers = negativeNumbers.concat(zero, positiveNumbers);

console.log('concat', numbers);

// iterate with every to find any false
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const isEven = (number) => number % 2 === 0;

console.log('every', numbers.every(isEven));

// iterate with some to find any true
console.log('some', numbers.some(isEven));