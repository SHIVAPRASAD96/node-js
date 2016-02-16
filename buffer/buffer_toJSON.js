var buf = Buffer (56);

var len=buf.write("simple program on json");

var json = buf.toJSON(len);

console.log(json);