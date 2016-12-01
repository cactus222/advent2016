'use strict'

var fs = require('fs');

var commands = fs.readFileSync("./input.txt").toString().split(",");

var x = 0;
var y = 0;

var direction = 0;

const NORTH = 0;
const EAST = 1;
const SOUTH = 2;
const WEST = 3;


for (var i in commands)
{
	var command = commands[i].trim();
	//console.log(command);
	var turn = command.charAt(0);
	var steps = parseInt(command.substr(1));

	if (turn === 'R')
	{
		direction = (direction + 1) % 4;
	} 
	else 
	{
		direction = ((direction - 1) + 4) % 4;
	}

	switch (direction) 
	{
		case NORTH:
			y += steps;
			break;
		case EAST:
			x += steps;
			break;
		case SOUTH:
			y -= steps;
			break;
		case WEST:
			x -= steps;
			break;
	}
}

console.log("Num steps " + (Math.abs(x) + Math.abs(y)));       