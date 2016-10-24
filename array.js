'use strict';
function createArray(){
  return [ 'snickers', 'hundred grand', 'kitkat', 'skittles' ];
}

function addElementToArray(ary){
  ary.push("A Christmas Story");
  return ary;
}

function accessElementFromArray(ary){
  return ary[2];
}

function replaceElementInArray(ary){
  return ary[1] = "Carter";
}

function removeElementFromArray(ary){
  ary.splice(2, 2, 'Roast Chicken');
  return ary;
}

function iterateArray(ary){
  var newNums = [];
  ary.forEach(function(number){
    newNums.push(number + 5);
  });
  return newNums;
}
