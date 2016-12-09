'use strict'

var fs = require('fs');

var input = fs.readFileSync("./input.txt").toString().split("\n");

var dictArray = [
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{}
];

var size = 8;

function getHighest(dict) {
	var sortedDict = [];
	for (var val in dict)
	    sortedDict.push([val, dict[val]])

	sortedDict.sort(function(a, b) {
		//If same count
		var order;
		if (b[1] - a[1] === 0) 
		{
			if (b[0] < a[0])
				order = 1;
			else if (b[0] === a[0])
				order = 0;
			else
				order = -1;
		}
		else
		{
	    	order = b[1] - a[1]
		}
		return -order;
	})
	return sortedDict[0][0];
}
for (var lineCount = 0; lineCount < input.length; lineCount++)
{
	var line = input[lineCount].trim();

	for (var i = 0; i < line.length; i++)
	{
		var c = line[i];

		if (c in dictArray[i])
		{
			dictArray[i][c] = dictArray[i][c] + 1;
		}
		else
		{
			dictArray[i][c] = 1;
		}
	}

	
	// if (isValid(sortedDict, checksum))
	// {
	// 	idTotal += secID;
	// }
}

for (var i = 0; i < size; i++)
{
	console.log(getHighest(dictArray[i]));
}
