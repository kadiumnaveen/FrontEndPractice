  /* Tutorial -26 Introduction to Modules */
import {fname, lname, obj, default as n, greet, GreetMessage} from './moduleB.js'  // log Module B laoded
obj.name = "Ross";
console.log(obj.name);
console.log(`${fname} ${lname}`);


 /* Tutorial -27 Introduction to Modules */
 console.log("Tutorial -27 export default variables.");
 console.log(`value of default variable loaded is ${n}`);

/* Tutorial -28 Export functions and classes */
console.log("Tutorial -28 Export functions and classes.");

greet("Hello World");
 
let gm = new GreetMessage();
gm.greet();
 