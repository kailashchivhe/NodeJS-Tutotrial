var fs = require("fs");

// Asynchronous File reading
fs.readFile( "sample.txt", "utf8", (err,data)=>{
    console.log("==========ASYNCHRONOUS===========");
    if( err ){
        console.log(err);
    }
    else{
        console.log(data);
    }
});

//Synchronous File reading
var data = fs.readFileSync( "sample.txt", "utf8" );
console.log("==========SYNCHRONOUS===========");
console.log( data );

// Asynchronous File writing
var content = "Hello Kailash";
fs.writeFile("temp.txt", content, "utf8", (err)=>{
    console.log("==========ASYNCHRONOUS===========");
    if( err ){
        console.log(err);
    }
    else{
        console.log("File write completed");
    }
});

// Synchronous File writing
fs.writeFileSync( "temp.txt", content, "utf8" );
console.log("==========SYNCHRONOUS===========");
console.log("File write completed");
