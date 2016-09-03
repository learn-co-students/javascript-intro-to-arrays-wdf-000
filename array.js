'use strict';

function createArray() {
  return ['snickers', 'hundred grand','kitkat','skittles'];
}

function addElementToArray(num) {
  num.push("A Christmas Story");
  return num
}

function accessElementFromArray(arr) {
  return arr[2];
}

function replaceElementInArray(arr) {
  arr[1] = 'Carter';
  return arr[1];
}

function removeElementFromArray(arr) {
  arr.splice(2,2,"Roast Chicken");
  return arr
}

function iterateArray(arr) {
  var newNums = [];
  arr.forEach(function(num) {
    newNums.push(num+5);
  });
  return newNums;
}
