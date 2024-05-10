const names = require('./4-names');
const sayHi = require('./5-utilis');
const data = require('./6-alternative-flavour')
require('./7-mind-grenade')

console.log(data)
console.log(data.items[1])
sayHi(data.singlePerson.name)

sayHi('johnny');
sayHi(names.peter);
sayHi(names.john);