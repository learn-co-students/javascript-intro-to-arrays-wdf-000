'use strict';
function createArray() {
  var arr = ["snickers", "hundred grand", "kitkat", "skittles"];
  return arr;
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
  var new_arr = []
  arr.forEach(function(letter) {
    new_arr.push(letter + 5);
  });
  return new_arr;
}
