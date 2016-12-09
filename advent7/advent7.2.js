'use strict'

var fs = require('fs');

var input = fs.readFileSync("./input.txt").toString().split("\n");

var goodIPs = 0;

function isABA(str, i)
{
	return str[i] === str[i + 2] && str[i] !== str[i+1] && str[i+1] !== '[' && str[i+1] !== ']';
}

function supportsSSL(line)
{
	var isHyper = false;

	var supportDict = {};
	var invertDict = {};

	console.log(line);
	for (var i = 0; i < line.length - 2; i++)
	{
		if (line[i] === '[')
		{
			isHyper = true;
			continue;
		} else if (line[i] === ']')
		{
			isHyper = false;
			continue;
		}

		if (isABA(line, i))
		{
			var key = line[i] + line[i+1];
			var invertKey = line[i+1] + line[i];
			if (isHyper)
			{
				if (invertKey in supportDict)
				{
					//console.log("DONE on invery " + invertKey);
					return true;
				}
				else
				{
					//console.log("Added invert key " + invertKey);
					invertDict[invertKey] = 1;
				}
			}
			else
			{
				if (key in invertDict)
				{
					//console.log("DONE on "+ key);
					return true;
				}
				else
				{
					//console.log("Added key " + key);
					supportDict[key] = 1;
				}
			}
		}
	}
	return false;
}
for (var lineCount = 0; lineCount < input.length; lineCount++)
{

	var line = input[lineCount];
	if (supportsSSL(line))
	{
		goodIPs++;
	}
}
console.log(goodIPs);

