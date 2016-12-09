'use strict'

var fs = require('fs');

var input = fs.readFileSync("./input.txt").toString().split("\n");

var totalAns = 0;



for (var lineCount = 0; lineCount < input.length; lineCount++)
{
	var line = input[lineCount];
	var ans = 0;
	for (var c = 0; c < line.length; c++)
	{
		if (line[c] === '(')
		{

			var endPos = line.indexOf(')', c);
			var marker = line.substring(c+1, endPos).split('x');

			var length = parseInt(marker[0]);
			var mult = parseInt(marker[1]);
			c = endPos;
			//console.log(c);
			// if (c + length >= input.length)
			// {
			// 	length = input.length - c;
			// }
			ans += length * mult;
			c = endPos + length;
			//console.log(c);

		}
		else
		{
			ans = ans + 1;
		}
	//console.log("end at " + c);
	}

	console.log(ans);
	totalAns += ans;
}
console.log("TOTAL IS " + totalAns);
