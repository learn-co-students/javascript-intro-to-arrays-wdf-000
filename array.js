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
	// return array[1] = "Carter";
	// or:
	array[1] = "Carter";
	return array[1];
}

function removeElementFromArray(array){
	array.splice(2, 2, "Roast Chicken");
	return array;
}

function iterateArray(array){
	// var newNums = [];
	// or:
	var newNums = new Array();
	array.forEach(function(number){
		newNums.push(number + 5);
	});
	return newNums;
}