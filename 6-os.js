//you can export the library look like this :- 
const { log } = require("console");
const os =require ("os");
//or is you want the thing specifice you can do that:-
const {freemem}=require ("os");

//so will you can do the object it contian the many things.

//to know the time :

console.log(`the time to uptime is ${os.uptime} secound`);

const THEOBJECT={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem,
}
console.log(THEOBJECT);

//user info,
const user=os.userInfo();

console.log(user);


































































