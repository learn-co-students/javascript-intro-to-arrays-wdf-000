'use strict';

function createArray(input) {
  return new Array('snickers', 'hundred grand', 'kitkat', 'skittles')
}

function addElementToArray(array, element) {
  array.push("A Christmas Story")
    return array
}

function accessElementFromArray(array) {
  return array[2]
}

function replaceElementInArray(array) {
  return array[1] = "Carter"
}

function removeElementFromArray(array) {
  array.splice(2, 2);
  array.push("Roast Chicken");
  return array
}

function iterateArray(array) {
  for (var i=0; i < array.length; i++) {
    array[i] += 5;
  }
  return array
}
