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

/* Tutorial -17 Destructing an Array*/
console.log("Tutorial -17");

let employee2 = ["Chandler", "Bing"];

let [fname, lname, gender="Male"] = employee2;

console.log(fname);
console.log(lname);
console.log(gender);


employee2 = ["Chandler", "Bing","Female"];
let [, , gender2] = employee2;

console.log(gender2);

/* Tutorial -18 Alias and destructing an object */
console.log("Tutorial -18");

let employee3 = {
    fname3: "Chandler",
    lname3: "Bing",
    gender3: "Male"
};

let {fname3, lname3, gender3} = employee3;

console.log(fname);
console.log(lname);
console.log(gender);

// if any of the object atribute is slightly big so we can use alias for teh such atributes
 let {fname3: f, lname3: l, gender3: g} = employee3;
 
 console.log(f);
 console.log(l);
 console.log(g);

 /* Tutorial -19 String Templates */
console.log("Tutorial -19  String Templates");

 let user = "Chandler";

let greet = `Welcome 'single' "double" ${user} to ES2015
            This is the second line.
               Third and so          on.

`;

console.log(greet);


 /* Tutorial -20 forOf loop */
 console.log("Tutorial -20 forOf loop");

 let colors = ['Red', 'Blue', 'Green'];

 for(let index in colors){
     console.log(colors[index]);
     
 }
 
 for(let color of colors){
     console.log(color);
     
 }
 
 let letters = "ABC";
 
 for(let letter of letters){
     console.log(letter);
     
 }

  /* Tutorial -21 Class Declaration*/
  console.log("Tutorial -21 Class Declaration");
  //console.log(typeof Person);
  class Person{
    greet(){}
}
let p1 = new Person();
console.log(typeof Person);
console.log(typeof congo);
//classes are nothing but a function but it cannot be hoisted but the function() can. Uncomment line 388 to check it.
congo();
function congo(){
}
congo();
console.log(p1.greet === Person.prototype.greet);


  /* Tutorial -22 Class body and methods */
  console.log("Tutorial -22 Class body and methods");

  class Man{
      //even if we didn't give name atribute in this Man Object this.name is accessable with errors.
      //To check kindly comment the line 409
    name: string;
    constructor(name){
        this.name = name;
        console.log(this.name + " Constructor");
        
    }
    static staticMethod(){
        console.log("Static Method");

    }
    greetPerson(){
        console.log("Hello " + this.name);
        
    }

    getID(){
        return 10;
    }

    getAddress(){
        return 'Andra Pradesh';
    }
 }
 let m = new Man("Chandler");
 Man.staticMethod();
 m.greetPerson();
 console.log(m.getAddress());
 
 
   /* Tutorial -23 Class body and methods */
   console.log("Tutorial -23 Class body and methods");
 

class Employee extends Man{
    constructor(name){
        super(name);
        console.log(name + " Employee constructor");
        
    }
    getID(){
        return super.getID();
    }

    getAddress(){
        return 'Guntur';
    }
}

let e = new Employee("Chandler");
console.log(e.getID());
console.log(e.getAddress());
 
/* Tutorial -24 Introduction to Modules */
console.log("Tutorial -24 Introduction to Modules. Please refer the notes.");

/* Tutorial -25 Modules loader setup configuaration */
console.log("Tutorial -25 Modules loader setup configuaration.");

/* Tutorial -29 sets and maps */
console.log("Tutorial -29 sets and maps.");

let mySet = Object.create(null);
mySet.id = true;
if(mySet.id){
    console.log("true value id exists");
}
mySet.id = 0;
if(mySet.id){
    console.log("O Value id exists");  
}else{
    console.log("O Value id doesn't exists");  
}
mySet.id = 1;
if(mySet.id){
    console.log("1 value id exists");
}

let myMap = Object.create(null);
myMap.name ="Chandler";
let val = myMap.name;
console.log(val);

myMap[100] = "Hello";
console.log(`100 as string ${myMap["100"]}`);
console.log(`100 as number ${myMap[100]}`);

let ob1 = {};
let ob2 = {};

//myMap[ob1] = "World";
//console.log(myMap[ob2]);
//Above and below wo line work same but Vs code not accepting a object in index value.
myMap[ob1.toString()] = "World";
console.log(myMap[ob2.toString()]);

//objects in the attributes will always be taken as string, As ob1 and ob2 string values are same we are getting the 
//same values from the map.
console.log(ob1.toString());
console.log(ob2.toString());


/* Tutorial -30 Sets */
console.log("Tutorial -30 Sets.");

//run the below command to recognize the Set object by VS Code
//npm install @types/node --save-dev
//else Set object will not be recognised and will get an error while compiling.
let set = new Set();

set.add("Hello");
set.add(1);
set.add(ob1);
set.add(ob2);
 //objects cannot be same while add them into set.
 console.log(set.size);

 let newSet = new Set([1,2,3,4,4,4]);
 console.log(newSet.size);

 let chainSet = new Set().add("hello").add("world");
 console.log(chainSet.size);
 console.log(newSet.has(1));
 console.log(newSet.has(5));
 console.log(newSet.delete(1));
 console.log(newSet.size);
