var fs = require("fs");

console.log("Starting : \n");
var config= JSON.parse(fs.readFileSync("config.json");
console.log("contents: ", config);

fs.watchFile("config.json",function  (current,previous) {
	// body...
	console.log("config changed\n");
	config = JSON.parse(fs.readFileSync("config.json"));
	console.log("New config file:",config);
});