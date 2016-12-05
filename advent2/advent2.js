'use strict'

var fs = require('fs');

var passcodes = fs.readFileSync("./input.txt").toString().split("\n");

var col = 1;
var row = 1;

var panel = [
				[1,2,3],
				[4,5,6],
				[7,8,9]
			];
for (var passCount in passcodes)
{
	var passString = passcodes[passCount];
	for (var i = 0; i < passString.length; i++) 
	{
	  	var direction = passString[i];
	  	switch (direction) 
		{
			case 'U':
				row = Math.max(0, row - 1);
				break;
			case 'D':
				row = Math.min(2, row + 1);
				break;
			case 'L':
				col = Math.max(0, col - 1);
				break;
			case 'R':
				col = Math.min(2, col + 1);
				break;
		}
		//console.log("col" + col + " row " + row);
	}


	console.log(panel[row][col]);// + " " + col + " " + row);
}
   