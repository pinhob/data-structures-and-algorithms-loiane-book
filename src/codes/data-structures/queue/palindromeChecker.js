import Deque from './deque';

function palindromeChecker(aString) {
  if (aString === undefined || aString === null || (aString !== null && aString.length === 0)) {
    return false;
  }

  const word = new Deque();
  const lowerString = aString.toLocaleLowerCase().split(' ').join('');
  let isEqual = true;
  let firstChar;
  let lastChar;

  for (let i = 0; i < lowerString.length; i += 1) {
    word.addBack(lowerString.charAt(i));
  }

  while (word.size() > 1 && isEqual) {
    firstChar = word.removeFront();
    lastChar = word.removeBack();

    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }

  return isEqual;
}

console.log('a', palindromeChecker('a'));
console.log('aa', palindromeChecker('aa'));
console.log('kayak', palindromeChecker('kayak'));
console.log('level', palindromeChecker('level'));
console.log('Was it a car or a cat I saw', palindromeChecker('Was it a car or a cat I saw'));
console.log('Step on no pets', palindromeChecker('Step on no pets'));
