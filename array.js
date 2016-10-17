'use strict';
function createArray() {
  return ['snickers', 'hundred grand', 'kitkat', 'skittles'];
}

function addElementToArray(array) {
  array.push('A Christmas Story');
  
  return array;
}

function accessElementFromArray(array) {
  return array[2];
}

function replaceElementInArray(array) {
  array.splice(1, 1, 'Carter');

  return array[1];
}

function removeElementFromArray(array) {
  array.splice(2, 2, 'Roast Chicken');

  return array;
}

function iterateArray(numbers) {
  const newNums = [];

  // arrow function breaks test although they pass in the browser... fun stuff lol
  // numbers.forEach(num => newNums.push(num + 5));

  numbers.forEach(function(num) {
    newNums.push(num + 5);
  });

  return newNums;
}
