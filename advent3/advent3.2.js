'use strict'

var fs = require('fs');

var input = fs.readFileSync("./input.txt").toString().split("\n");
//console.log(input.length);

var goodTriangles = 0;

function isValid(sides) {
	//console.log(sides[0] + " " + sides[1] + " " + sides[2]);
	for (var i = 0; i < 3; i++)
		sides[i] = parseInt(sides[i]);
	return (sides[0] + sides[1] > sides[2]) && (sides[0] + sides[2] > sides[1]) && (sides[1] + sides[2] > sides[0]);
}

for (var triCount = 0; triCount < input.length; triCount+=3)
{
	var triangle = input[triCount].trim().split(" ");
	var triangle1 = input[triCount+1].trim().split(" ");
	var triangle2 = input[triCount+2].trim().split(" ");

	for (var i = 0; i < 3; i++) {
		var newTriangle = [ triangle[i], triangle1[i], triangle2[i] ];
		//console.log("NEW TRIANGLE" + newTriangle);
		if (isValid( newTriangle ) )
		{
			goodTriangles++;	
		}
		else
		{
			//console.log("Invalid triangle" + input[triCount]);
		}
	}
	
}

console.log(goodTriangles);
   