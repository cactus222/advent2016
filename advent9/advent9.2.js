'use strict'

var fs = require('fs');

var input = fs.readFileSync("./input.txt").toString().split("\n");

var totalAns = 0;


function getLineLength(line)
{
	var ans = 0;
	for (var c = 0; c < line.length; c++)
	{
		if (line[c] === '(')
		{

			var endPos = line.indexOf(')', c);
			var marker = line.substring(c+1, endPos).split('x');

			var length = parseInt(marker[0]);
			var mult = parseInt(marker[1]);

			//console.log(line.substring(endPos+1, endPos+length+1));

			//instead of pure length, recurse
			ans += getLineLength(line.substring(endPos+1, endPos+length+1)) * mult;
			c = endPos + length;

		}
		else
		{
			ans = ans + 1;
		}
	}
	return ans;
}

for (var lineCount = 0; lineCount < input.length; lineCount++)
{
	var line = input[lineCount];
	totalAns += getLineLength(line);
}
console.log("TOTAL IS " + totalAns);
