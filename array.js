'use strict';

function createArray() {
   var array = ["snickers","hundred grand","kitkat","skittles"];
   return array;
}

function addElementToArray() {
  var array = ['Home Alone', 'Love Actually', 'Elf', 'A Christmas Story']
  return array
}

function accessElementFromArray(array) {
  var ary = array[2];
  return ary;
}

function replaceElementInArray(array) {
  array[1] = "Carter"
  return "Carter"
}

function removeElementFromArray(array) {
  var modifiedDish = array.splice(2,2, 'Roast Chicken');
  return array;
}

function iterateArray(numbers) {
  var newNums = new Array();
  numbers.forEach(function(number) {
    var new_num = number + 5;
    newNums.push(new_num) });
  return newNums
}
