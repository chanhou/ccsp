var fs = require('fs');

fs.readFile('package.json', function (err, data) {
if (err) { throw err; }
data=data.toString("utf8");
//console.log(data);
console.log('Your project name is ' + data.name + ' with version ' + data.version);
console.log('---');
console.log(data);
});