const generateArray = (x) => {
  const array = [];
  let i;
  for (i = 1; i <= x; i++) {
    array.push(i);
  }
  return array;
};

const sumFirstAndLast = (myArray) => {
  const firstItem = myArray[0];
  const lastItem = myArray[myArray.length - 1];
  return firstItem + lastItem;
};

const getEvenNumbers = (myArray) => {
  const result = myArray.filter(number => number % 2 === 0);
  return result;
}

const sumArray = (myArray) => {
  let number = 0;

  myArray.forEach(arrayItem => {
    number = number + arrayItem;
  });

  return number;
}

const multiplyArrayValues = (myArray, multiple) => {
  const result = myArray.map(arrayItem => arrayItem * multiple);
  return result;
}

const getItemsOverNumber = (myArray, greaterThanNumber) => {
  const result = myArray.filter(number => number > greaterThanNumber);
  return result;
}

const removeDuplicates = (myArray) => {
  const duplicateItems = Array.from(new Set(myArray));
  return duplicateItems;
}
export {
  generateArray,
  sumFirstAndLast,
  getEvenNumbers,
  sumArray,
  multiplyArrayValues,
  getItemsOverNumber,
  removeDuplicates
};
