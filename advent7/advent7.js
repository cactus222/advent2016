'use strict'

var fs = require('fs');

var input = fs.readFileSync("./input.txt").toString().split("\n");

var goodIPs = 0;

function isABBA(str, i)
{
	return str[i] === str[i + 3] && str[i+1] === str[i+2] && str[i] !== str[i+1];
}

function supportsTLS(line)
{
	var support = false;
	//console.log(line);
	var isHyper = false;
	for (var i = 0; i < line.length - 3; i++)
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

		if (isABBA(line, i))
		{
			if (isHyper)
			{
				//console.log("HYPER FOUND");
				return false;
			}
			else
			{
				//console.log("SUPPORTFOUND");
				support = true;
			}
		}
	}
	return support;
}
for (var lineCount = 0; lineCount < input.length; lineCount++)
{

	var line = input[lineCount];
	if (supportsTLS(line))
	{
		goodIPs++;
	}
}
console.log(goodIPs);

