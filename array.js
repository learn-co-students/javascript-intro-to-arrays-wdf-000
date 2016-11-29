'use strict';

var createArray = function() {
  var candy_array = [ 'snickers', 'hundred grand', 'kitkat', 'skittles' ]
  return candy_array
}

function addElementToArray(array) {
  array.push("A Christmas Story")
  return array
}

function accessElementFromArray(array) {
  return array[2]
}

function replaceElementInArray(array) {
  array[1] = "Carter"
  return array[1]
}

function removeElementFromArray(array) {
  array.splice(2, 2, "Roast Chicken")
  return array
}

function iterateArray(nums) {
  var newNums = []
  nums.forEach(function(num, index) {
    newNums.push(nums[index] + 5);
  });
  return newNums;
}
