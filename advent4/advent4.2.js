'use strict'

var fs = require('fs');

var input = fs.readFileSync("./input.txt").toString().split("\n");

var regex = /(\D*)(\d+)\[(.{5})\]/;

var idTotal = 0;

function isValid(sortedDict, checksum)
{
	for (var i = 0; i < 5; i++)
	{
		if (sortedDict[i][0] !== checksum[i])
			return false;
	}
	return true;
}
for (var roomCount in input)
{
	var room = input[roomCount];
	var match = regex.exec(room);

	var name = match[1];
	var decryptName = [];
	var secID = parseInt(match[2]);
	var checksum = match[3];
	var dict = {};
	
	var shift = secID % 26;

	var aValue = 'a'.charCodeAt();
	var zValue = 'z'.charCodeAt();
	for (var i = 0; i < name.length; i++)
	{
		if (name[i] === '-')
		{
			decryptName.push(' ');
			continue;
		}
		var c = name[i];

		if (c in dict)
		{
			dict[c] = dict[c] + 1;
		}
		else
		{
			dict[c] = 1;
		}

		//convert to 0 to 25, add sec id then mod 26
		decryptName.push(String.fromCharCode(((name[i].charCodeAt() - aValue + shift) % 26) + aValue));
	}

	var sortedDict = [];
	for (var val in dict)
	    sortedDict.push([val, dict[val]])

	sortedDict.sort(function(a, b) {
		//If same count
		if (b[1] - a[1] === 0) 
		{
			if (b[0] < a[0])
				return 1;
			else if (b[0] === a[0])
				return 0;
			else
				return -1;
		}
		else
		{
	    	return b[1] - a[1]
		}
	})

	if (isValid(sortedDict, checksum))
	{
		console.log(decryptName.join('') +" " + secID);
	}
}
