'use strict'

var fs = require('fs');
var md5 = require('js-md5');


function isValid(sortedDict, checksum)
{

}
var cnt = 0;
var ans = "";
const base = "uqwqemis";
const zeroes = "00000";
while (true)
{
	var hash = md5(base+cnt);

	if (hash.startsWith(zeroes))
	{
		console.log(hash[5]);
		ans = ans + hash[5];
	}
	if (ans.length === 8)
	{
		break;
	}
	cnt++;
}
console.log(ans);
