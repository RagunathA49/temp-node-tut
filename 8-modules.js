const os = require('os');
// CPU info
// console.log(os.cpus());

//info about current user 

console.log(os.userInfo());

// method return the system up time in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);


const currentOs = {
    name : os.type(),
    release : os.release(),
    totalMem :os.totalmem(),
    freeMem :os.freemem(),
}
console.log(currentOs)