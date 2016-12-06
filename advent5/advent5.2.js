'use strict'

var fs = require('fs');
var md5 = require('js-md5');


function isValid(sortedDict, checksum)
{

}
var cnt = 0;
var ans = [-1,-1,-1,-1,-1,-1,-1,-1];
var set = 0;
const base = "uqwqemis";
const zeroes = "00000";
while (true)
{
	var hash = md5(base+cnt);

	if (hash.startsWith(zeroes) )
	{
		var val = parseInt(hash[5]);
			console.log("VALUE FOUND" + hash[5]);
		if (val < 8 && ans[val] === -1)
		{

			console.log("VALUE Added" + hash[6]);
			ans[val] = hash[6]
			set++;
		}
	}
	if (set === 8)
	{
		break;
	}
	cnt++;
}
console.log(ans.join(''));
