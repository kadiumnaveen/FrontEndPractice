/* Tutorial -5 */
console.log("Tutorial -5");

console.log("Hello Naveen");

greetPerson("Chandler");
greetlLetPerson("Chandler");

function greetPerson(name){
    
    if(name === "Chandler"){
        greet = "Hello Chandler";
    }else{
        greet = "Hi there";
    }
    console.log("var "+greet);
    var greet: string;
    
}

/* let declaration cannot be hoisted uncomment line 28*/
function greetlLetPerson(name){
    let greet;
    if(name === "Chandler"){
        greet = "Hello Chandler";
    }else{
        greet = "Hi there";
    }
    console.log("let "+greet);
    //let greet;
    
}

/* Tutorial -6 */
console.log("Tutorial -6");
var a=1;
var b=2;
if(a === 1){
    a=10;
    let b = 20;
    console.log(a); //10
    console.log(b); //20
}
console.log(a); //10
console.log(b); //2

/* same "var" can be redeclared in that scope */
var c=1;
var c=2;
/* where as same "let" cannot be redeclared in that particular block scope but can be declared in nested block scope. */
let d=1;
//let d=2;
if(true){
    let d=4;
}else{
    let d=10;
}

/* Tutorial -7 */
console.log("Tutorial -7 for loops executed at last ");

for(var i=1; i<=5; i++){
    setTimeout(function(){console.log(i);},1000);
    }
    
    for(let i=1; i<=5; i++){
    setTimeout(function(){console.log(i);},2000);
    }
    


/* Tutorial -8 */
console.log("Tutorial -8");

let num1;
const num2 = 10;

const obj1 = {
    name:"Codevolution"
};
console.log(obj1.name);

// obj1 = {}; Error

obj1.name = "Chandler";
console.log(obj1.name);



/* Naveen Tutorial -1 */
console.log("Naveen Tutorial -1");
var myVar

function myFunction() {
  myVar = setTimeout(function(){ alert("Hello") }, 3000);
}

function myStopFunction() {
  clearTimeout(myVar);
}

var c = 0;
var t;
var timer_is_on = 0;

function timedCount() {
    console.log("Timer : "+c);
  c = c + 1;
  t = setTimeout(timedCount, 1000);
}

function startCount() {
  if (!timer_is_on) {
    timer_is_on = 1;
    timedCount();
  }
}

function stopCount() {
  clearTimeout(t);
  timer_is_on = 0;
}

/* Tutorial -9 */
console.log("Tutorial -9");
const PI = 3.14;
const MAX_RADIUS = 10;
console.log("constants pi = "+ PI + " Max_radius = " + MAX_RADIUS);

//PI = {} ASSIGNMENT A CONSTANT AGAIN WILL GET AN ERROR

let x = 3;
let y = 5;

console.log("before swap : x="+x+" y="+y);

x=x+y;
y=x-y;
x=x-y;

console.log("after swap : x="+x+" y="+y);


/* Tutorial -10 */
console.log("Tutorial -10");

var getRegvalue = function(){
    return 10;
}
console.log(getRegvalue());

/*
const getArrowvalue = () => {
    return 10;
}

const getArrowvalue = m => {
    return m;
}

*/

const getArrowvalue = (m,bonus) => 10*m+bonus;

const getvalue = (m,bonus) =>{
    return 10*m+bonus;
}

const getvalue2 = function(m: number,bonus: number) {
    return 10*m+bonus;
}

console.log(getArrowvalue(5,50));
console.log(getvalue(14,50));
console.log(getvalue2(10,5));

console.log(typeof getArrowvalue);

/* Tutorial -11 */
console.log("Tutorial -11");

var employee = {
    id: 1,

    greet: function(){
        console.log("greet2 "+this.id);
     },

    greet1: function(){
        var self = this;
        //this kwy word is bounded to function braces if we use function() declaration.
        //if ""var self = this;"" was not there and then this key word in 
        //setTimeout(function() {console.log("greet "+this.id)}, 1000) ; //is not recognized.
        setTimeout(function() {console.log("greet1 "+self.id)}, 1000) ;
        //function() declaration will create its own context that is why the "this" keyword is not recognized inside the function closures.
     },

     greet2: function(){
        // use arrow function to avail accessebility of this keyword in nested functions.
           setTimeout(() => {console.log("greet "+this.id)}, 1000) ;
           //when we use arrow functions then "this" keyword is refered to the parent object
        },
    
};
employee.greet();
employee.greet1();
employee.greet2();

/* Tutorial -12 */
console.log("Tutorial -12");

let percentBonus = () => 0.1;
let getValue = function(value=10, bonus=value*percentBonus()){
    console.log(value+bonus);
    console.log(arguments.length);
};

getValue();
getValue(20);
getValue(20,30);
getValue(undefined,30);

/* Tutorial -13 */
console.log("Tutorial -13");

let message = "List of Colors"



let displayColors = function(){
    console.log(message);
    console.log(arguments);
    
    
   for(let i in arguments){
       console.log(arguments[i]);
       
   }
}

let displayColors2 = function(message, ...colors){

    console.log(message);
    console.log(colors);
    
    
   for(let i in colors){
       console.log(colors[i]);
       
   }
}

// displayColors(message, 'Red');
// displayColors(message, 'Red','Blue');
// displayColors(message, 'Red','Blue','Green');

//above scripts might run in javascript even we didn't declare parameters to the function.

displayColors2(message, 'Red');
displayColors2(message, 'Red','Blue');
displayColors2(message, 'Red','Blue','Green');

/* Tutorial -14 */
console.log("Tutorial -14");

let colorArray = ['Orange','Yellow','Indigo'];
displayColors2(message, ...colorArray)

/* Tutorial -15 */
console.log("Tutorial -15");

let firstname = "Chandler";
let lastname = "Bings";

let person = {
    firstname,// instead of assigning we can use directly the values in object literals
    lastname
};

console.log(person.firstname);
console.log(person.lastname);

function createPerson(firstname, lastname, age){
    let fullname = firstname + " " + lastname;
    return {
        firstname,
        lastname, 
        fullname,
        isSenior(){
            return age>60;
        }}
}

let p = createPerson("Ross","Geller", 62);
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());

/* Tutorial -16 */
console.log("Tutorial -16");

let ln = "last name";
let person2 = {
  "first name": "Chandler",
  [ln]: "Bing"
};
console.log(person2);
console.log(person2["first name"]);

/* Tutorial -17 */
console.log("Tutorial -17");

let employee2 = ["Chandler", "Bing"];

let [fname, lname, gender="Male"] = employee2;

console.log(fname);
console.log(lname);
console.log(gender);


employee2 = ["Chandler", "Bing","Female"];
let [, , gender2] = employee2;

console.log(gender2);

/* Tutorial -18 Alias */
console.log("Tutorial -18");

// let [{fname: f, lname: l, gender: g} = employee2;
// console.log(f);
// console.log(l);
// console.log(g);

