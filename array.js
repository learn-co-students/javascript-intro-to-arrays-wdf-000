'use strict';

function createArray() {
  var array = ["snickers", "hundred grand", "kitkat", "skittles"];

  return array
}


function addElementToArray(array) {
  array.push("A Christmas Story")
  return array;
}


function accessElementFromArray(array) {
  return array[2];
}

function replaceElementInArray(array) {
  array[1] = "Carter";
  return array[1]
}

function removeElementFromArray(array) {
  array.splice(2, 3, "Roast Chicken")
  return array;
}

function iterateArray(array) {
  var newNums = [];
  array.forEach(function(number) {
    newNums.push(number + 5)
  });

  return newNums
}
