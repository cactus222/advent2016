'use strict'

var fs = require('fs');

var passcodes = fs.readFileSync("./input.txt").toString().split("\n");

var col = 0;
var row = 2;

var panel = [
				['0','0','1','0','0'],
				['0','2','3','4','0'],
				['5','6','7','8','9'],
				['0','A','B','C','0'],
				['0','0','D','0','0']
			];
for (var passCount in passcodes)
{
	var passString = passcodes[passCount];
	for (var i = 0; i < passString.length; i++) 
	{
	  	var direction = passString[i];
	  	var undoRow = row;
	  	var undoCol = col;
	  	switch (direction) 
		{
			case 'U':
				row = Math.max(0, row - 1);
				break;
			case 'D':
				row = Math.min(4, row + 1);
				break;
			case 'L':
				col = Math.max(0, col - 1);
				break;
			case 'R':
				col = Math.min(4, col + 1);
				break;
		}

		if (panel[row][col] === '0')
		{
			row = undoRow;
			col = undoCol;
		}
		//console.log("col" + col + " row " + row);
	}


	console.log(panel[row][col]);// + " " + col + " " + row);
}
   

