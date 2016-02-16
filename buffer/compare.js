var buf01 = new Buffer("String");
var buf02 = new Buffer("String");
var buf03 = new Buffer("To String");

console.log("String 01 : -",buf01.toString("utf8"));

console.log("\nString 02 : -",buf02.toString("utf8"));

console.log("\nString 03 :-",buf03.toString("utf8"));

var result01 = buf01.compare(buf02);
var result02 = buf02.compare(buf03);

if (result01 < 0) {
	console.log("String 1 and 2 are Not Equal\n");
}
else if (result01 == 0) {
	console.log("String 1 and 2 are Equal\n ")
};
if (result02 < 0) {
	console.log("2 and 3 are not Equal\n");
}
else if (result02==0) {
	console.log("2 and 3 are Equal\n");
};
