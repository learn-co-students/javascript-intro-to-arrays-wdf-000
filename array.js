'use strict';

function createArray(){
	return ["snickers", "hundred grand", "kitkat", "skittles"]
}

function addElementToArray(array){
	array.push("A Christmas Story")
	return array
}

function accessElementFromArray(statesArr){
	return statesArr[2]
}

function replaceElementInArray(nameArr){
	return nameArr[1] = "Carter"
}

function removeElementFromArray(dishes){
	dishes.splice(2, 3, 'Roast Chicken')
	return dishes
}

function iterateArray(numbers){
	var newNums = [];
	numbers.forEach(function(num){
		newNums.push(num + 5);	
	});

	return newNums
}