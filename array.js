'use strict';

function createArray(){
  return ["snickers", "hundred grand", "kitkat", "skittles"];
}

function addElementToArray(array){
  array.push("A Christmas Story");
  return array;
}

function accessElementFromArray(states){
  return states[2];
}

function replaceElementInArray(array){
  array[1] = "Carter";
  return array[1];
}

function removeElementFromArray(dishes){
  dishes.splice(2,2,"Roast Chicken");
  return dishes;
}

function iterateArray(numbers){
  var newNums = [];
  numbers.forEach(function (number){
    newNums.push(number + 5);
  });
  return newNums;
}
