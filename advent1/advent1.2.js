'use strict'

var fs = require('fs');

var commands = fs.readFileSync("./input2.txt").toString().split(",");

const NORTH = 0;
const EAST = 1;
const SOUTH = 2;
const WEST = 3;

var visitedPositions = {};

function checkPos(x, y) {
	var key = x + "," + y;
	if (key in visitedPositions) {
		return true;
	}
	visitedPositions[key] = 1;
	return false;
}

function solution() {
	var x = 0;
	var y = 0;

	var direction = 0;

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
				for (var cnt = 1; cnt <= steps; cnt++) 
				{
					y++;
					if (checkPos(x, y)) 
					{
						return Math.abs(x) + Math.abs(y)
					}
				}
				break;
			case EAST:
				for (var cnt = 1; cnt <= steps; cnt++) 
				{
					x++;
					if (checkPos(x, y)) 
					{
						return Math.abs(x) + Math.abs(y)
					}
				}
				break;
			case SOUTH:
				for (var cnt = 1; cnt <= steps; cnt++) 
				{
					y--;
					if (checkPos(x, y)) 
					{
						return Math.abs(x) + Math.abs(y)
					}
				}
				break;
			case WEST:
				for (var cnt = 1; cnt <= steps; cnt++) 
				{
					x--;
					if (checkPos(x, y)) 
					{
						return Math.abs(x) + Math.abs(y)
					}
				}
				break;
		}
	}

}
console.log(solution());