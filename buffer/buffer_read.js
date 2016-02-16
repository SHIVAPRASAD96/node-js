var buf = Buffer(85);

for (var i = 0; i < 85; i++) {
    
     buf[i]= i+97;
 };
//#01 type
 console.log(buf.toString("ascii"));

 console.log("\n");
//#02 type 
 console.log(buf.toString("ascii",0,56));
 console.log("\n");
 //#03 type
 console.log(buf.toString("utf8",0,16));
 console.log("\n");
 //#04 type
 console.log(buf.toString(undefined,0,10));
 console.log("\n Thats all we read from the Buffer");