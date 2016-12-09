'use strict'

var fs = require('fs');

var input = fs.readFileSync("./input.txt").toString().split("\n");

var height = 6;
var width = 50;

// 0 == .
// 1 == #
var panel = [];

for (var i = 0; i < height; i++)
{
	var row = [];
	for (var j = 0; j < width; j++)
	{
		row.push(0);
	}
	panel.push(row);
}

for (var lineCount = 0; lineCount < input.length; lineCount++)
{

	var line = input[lineCount].trim().split(" ");
	var command = line[0];
	if (command === 'rect')
	{
		var dims = line[1].split("x");
		var boxWidth = dims[0];
		var boxHeight = dims[1];
		for (var row = 0; row < boxHeight; row++)
		{
			for (var col = 0; col < boxWidth; col++)
			{
				panel[row][col] = 1;
			}
		}

	}
	else
	{
		var dir = line[1];
		var colRow = parseInt(line[2].split("=")[1]);
		var shifts = parseInt(line[4]);

		if (dir === 'row')
		{

			var data = [];
			for(var i = 0; i < width; i++) {
				//console.log(i-shifts+width)
			    data.push(panel[colRow][(i-shifts+width) % width]);
			}
			panel[colRow] = data;
		}
		else 
		{
			var data = [];
			for(var i = 0; i < height; i++) {
			    data.push(panel[(i-shifts+height) % height][colRow]);
			}

			for (var i = 0; i < height; i++)
			{
				panel[i][colRow] = data[i];
			}
		}
	}

}

var total = 0;
for (var i = 0; i < height; i++)
{
	
	//console.log(panel[i]);
	for (var j = 0; j < width; j++)
	{
		process.stdout.write("" + panel[i][j]);
		total += panel[i][j];
		if (j % 5 == 4)
		{
			process.stdout.write(" ");
		}
	}
	process.stdout.write("\n");
}
console.log(total);
