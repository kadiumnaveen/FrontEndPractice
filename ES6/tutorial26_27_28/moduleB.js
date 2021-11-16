  /* Tutorial -26 Introduction to Modules */
 console.log("Tutorial -26 export named variables");
 let fname = "Chandler";
 let lname = "Bing";


 let obj = {
     name: "Joey"
 };
console.log(`Module B loaded ${obj.name}`);
export {fname, lname, obj};

 /* Tutorial -27 Introduction to Modules */
let nickName = "chitti";
export default nickName;

 /* Tutorial -28 Export functions and classes */
export function greet(message){
    console.log(message);
};

export class GreetMessage{
    constructor(){
        console.log("Constructor");
    }
    greet(){
        console.log("Greet function");
    }
};
