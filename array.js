'use strict';

function createArray(){
	return ["snickers", "hundred grand", "kitkat", "skittles"];
}

function addElementToArray(array){
  array.push("A Christmas Story");
  return array;
}

function accessElementFromArray(array){
  return array[2];
}

function replaceElementInArray(array){
  array[1] = "Carter";
  return array[1];
}

function removeElementFromArray(arr){
  arr.splice(2, 2, "Roast Chicken");
  return arr;
}

function iterateArray(arr){
  var newNums = [];
  arr.forEach(function(number, i){
    newNums.push(number + 5);
  });
  return newNums
}