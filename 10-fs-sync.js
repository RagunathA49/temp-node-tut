const { readFileSync, writeFileSync }  = require('fs')
console.log('start');
const first = fs.readFileSync('./content/first.txt','utf8');
const second = fs.readFileSync('./content/second.txt','utf8');

writeFileSync('./content/result-sync.txt',`Here is the result : ${first} , ${second}`,{flags:'a'});
console.log('done with this task');
console.log('Starting the next one');