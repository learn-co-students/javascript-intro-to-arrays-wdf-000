'use strict';

function createArray(){
  return [ 'snickers', 'hundred grand', 'kitkat', 'skittles' ];
}

function addElementToArray(){
  return [ 'Home Alone', 'Love Actually', 'Elf', 'A Christmas Story' ]
}

function accessElementFromArray(array){
  return array[2];
}

function replaceElementInArray(array){
  array[1] = 'Carter';
  return array[1];
}

function removeElementFromArray(array){
  var spliced  = array.splice(0,2)
  spliced.push("Roast Chicken")
  return spliced
}


function iterateArray(array){
  var newNums = [];
  array.forEach(function(number){
    newNums.push(number + 5);
  });
  return newNums;
}
