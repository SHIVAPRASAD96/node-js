var buf01 = new Buffer(50);
var buf02 = new Buffer(50);

var data01 = buf01.write("Data or string of Buffer 01");
var data02 = buf02.write("String of Buffer 02");

var buf03 = new Buffer.concat([buf01,buf02]);

console.log(buf03.toString(undefined,0,60));

console.log("\n The above Descripencies are due to using separate variable too enter the data for the tp Buffer\n Implementing it differently we have it as\n ");

var buf04 = new Buffer("This is 1st string\n");
var buf05 = new Buffer("\n2nd String is here");

var buf06 = Buffer.concat([buf04,buf05]);

console.log(buf06.toString("utf8"));


