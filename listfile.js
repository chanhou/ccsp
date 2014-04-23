//var http=require("http");
var fs=require("fs");
//var host="127.0.0.1";
//var port=5000;

fs.readdir('.', function (err, filenames) {
   if (err) { throw err; }
 
   filenames.forEach(function (filename) {
     console.log('try to getting stats of [' + filename + ']');
     fs.stat(filename, function (err, stats) {
       if (err) { throw err; }
       
       var printName = filename;
       if (stats.isDirectory()) { printName = filename.toUpperCase(); }
 
       console.log(printName + '(' + stats.size + ')');
    });
    });
});