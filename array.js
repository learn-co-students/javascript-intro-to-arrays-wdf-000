'use strict';

function createArray() {
  var array = ["snickers", "hundred grand", "kitkat", "skittles"];
  return array;
}

function addElementToArray(arr) {
  arr.push("A Christmas Story");
  return arr;
}

function accessElementFromArray(arr) {
  return arr[2];
}

function replaceElementInArray(arr) {
  arr[1] = "Carter";
  return arr[1];
}

function removeElementFromArray(arr) {
  arr.splice(2, 2, "Roast Chicken");
  return arr;
}

function iterateArray(arr) {
  arr.forEach(function(num, i) {
    arr[i] = num + 5;
  });
  return arr;
}
