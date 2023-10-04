function double(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}
const double2 = (arr) => arr.map((num) => num * 2);

//Refactor the above code to use two arrow functions. Turn it into a one-liner

//Replace all functions with arrow functions

function squareAndFindEvens(numbers) {
  var squares = numbers.map(function (num) {
    return num ** 2;
  });
  var evens = squares.filter(function (square) {
    return square % 2 === 0;
  });
  return evens;
}

//My hacked version
const squareAndFindEvens2 = (nums) =>
  nums
    .map((num) => (num % 2 === 0 ? num ** 2 : null))
    .filter((invals) => invals !== null);

//Solutions version
// const squareAndFindEvens2 = (nums) =>
// nums.map((num) => num ** 2).filter((square) => square % 2 === 0);
