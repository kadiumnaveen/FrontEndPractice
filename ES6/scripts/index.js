"use strict";
console.log("Hello Naveen");
/* Tutorial -5 */
greetPerson("Chandler");
greetlLetPerson("Chandler");
function greetPerson(name) {
    if (name === "Chandler") {
        greet = "Hello Chandler";
    }
    else {
        greet = "Hi there";
    }
    console.log("var " + greet);
    var greet;
}
/* let declaration cannot be hoisted uncomment line 28*/
function greetlLetPerson(name) {
    var greet;
    if (name === "Chandler") {
        greet = "Hello Chandler";
    }
    else {
        greet = "Hi there";
    }
    console.log("let " + greet);
    //let greet;
}
/* Tutorial -6 */
var a = 1;
var b = 2;
if (a === 1) {
    a = 10;
    var b_1 = 20;
    console.log(a); //10
    console.log(b_1); //20
}
console.log(a); //10
console.log(b); //2
/* same "var" can be redeclared in that scope */
var c = 1;
var c = 2;
/* where as same "let" cannot be redeclared in that particular block scope but can be declared in nested block scope. */
var d = 1;
//let d=2;
if (true) {
    var d_1 = 4;
}
else {
    var d_2 = 10;
}
//# sourceMappingURL=index.js.map