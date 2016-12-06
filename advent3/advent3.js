'use strict'

var fs = require('fs');

var input = fs.readFileSync("./input.txt").toString().split("\n");


var goodTriangles = 0;

function isValid(sides) {
	//console.log(sides[0] + " " + sides[1] + " " + sides[2]);
	for (var i = 0; i < 3; i++)
		sides[i] = parseInt(sides[i]);
	return (sides[0] + sides[1] > sides[2]) && (sides[0] + sides[2] > sides[1]) && (sides[1] + sides[2] > sides[0]);
}

for (var triCount in input)
{
	var triangle = input[triCount].trim().split(" ");
	if (isValid(triangle))
	{
		goodTriangles++;	
	}
	else
	{
		//console.log("Invalid triangle" + input[triCount]);
	}
}

console.log(goodTriangles);
   