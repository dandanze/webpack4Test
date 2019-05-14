const fs = require('fs');
const process = require('process');
const fileName = process.argv[2];
fs.watch(fileName,(err) => 
{
	process.stdout.write(`${fileName} is changed!`)
}
);


