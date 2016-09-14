'use strict';

function createArray() {
  return ["snickers", "hundred grand", "kitkat", "skittles"];
}

function addElementToArray(movies) {
  movies.push('A Christmas Story');
  return movies;
}

function accessElementFromArray(arr) {
  return arr[2]
}

function replaceElementInArray(arr) {
  return arr[2] = 'Carter'
}

function removeElementFromArray(arr) {
  arr.splice(2, 2, 'Roast Chicken')
  return arr
}

function iterateArray(nums) {
  var nums_2 = nums.map(function(num){ return num + 5 })
  return nums_2
}