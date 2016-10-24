'use strict';

function createArray() {
  var arrayStrings = ["snickers", "hundred grand", "kitkat", "skittles"];
  return arrayStrings;
}

function addElementToArray(array) {
  array.push("A Christmas Story");

  return array;
}

function accessElementFromArray(array) {
  return array[2];
}

function replaceElementInArray(array) {
  array[1] = "Carter";
  return array[1];
}

function removeElementFromArray(array) {
  var removedElements = array.splice(2,2, "Roast Chicken");
  return array;
}

function iterateArray(array) {
  var newNums = new Array();
  array.forEach(function(num) {
    newNums.push(num + 5);
  });
  return newNums;
}
