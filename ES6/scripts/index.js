"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
/* Tutorial -5 */
console.log("Tutorial -5");
console.log("Hello Naveen");
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
console.log("Tutorial -6");
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
/* Tutorial -7 */
console.log("Tutorial -7 for loops executed at last ");
for (var i = 1; i <= 5; i++) {
    setTimeout(function () { console.log(i); }, 1000);
}
var _loop_1 = function (i_1) {
    setTimeout(function () { console.log(i_1); }, 2000);
};
for (var i_1 = 1; i_1 <= 5; i_1++) {
    _loop_1(i_1);
}
/* Tutorial -8 */
console.log("Tutorial -8");
var num1;
var num2 = 10;
var obj1 = {
    name: "Codevolution"
};
console.log(obj1.name);
// obj1 = {}; Error
obj1.name = "Chandler";
console.log(obj1.name);
/* Naveen Tutorial -1 */
console.log("Naveen Tutorial -1");
var myVar;
function myFunction() {
    myVar = setTimeout(function () { alert("Hello"); }, 3000);
}
function myStopFunction() {
    clearTimeout(myVar);
}
var c = 0;
var t;
var timer_is_on = 0;
function timedCount() {
    console.log("Timer : " + c);
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
var PI = 3.14;
var MAX_RADIUS = 10;
console.log("constants pi = " + PI + " Max_radius = " + MAX_RADIUS);
//PI = {} ASSIGNMENT A CONSTANT AGAIN WILL GET AN ERROR
var x = 3;
var y = 5;
console.log("before swap : x=" + x + " y=" + y);
x = x + y;
y = x - y;
x = x - y;
console.log("after swap : x=" + x + " y=" + y);
/* Tutorial -10 */
console.log("Tutorial -10");
var getRegvalue = function () {
    return 10;
};
console.log(getRegvalue());
/*
const getArrowvalue = () => {
    return 10;
}

const getArrowvalue = m => {
    return m;
}

*/
var getArrowvalue = function (m, bonus) { return 10 * m + bonus; };
var getvalue = function (m, bonus) {
    return 10 * m + bonus;
};
var getvalue2 = function (m, bonus) {
    return 10 * m + bonus;
};
console.log(getArrowvalue(5, 50));
console.log(getvalue(14, 50));
console.log(getvalue2(10, 5));
console.log(typeof getArrowvalue);
/* Tutorial -11 */
console.log("Tutorial -11");
var employee = {
    id: 1,
    greet: function () {
        console.log("greet2 " + this.id);
    },
    greet1: function () {
        var self = this;
        //this kwy word is bounded to function braces if we use function() declaration.
        //if ""var self = this;"" was not there and then this key word in 
        //setTimeout(function() {console.log("greet "+this.id)}, 1000) ; //is not recognized.
        setTimeout(function () { console.log("greet1 " + self.id); }, 1000);
        //function() declaration will create its own context that is why the "this" keyword is not recognized inside the function closures.
    },
    greet2: function () {
        var _this = this;
        // use arrow function to avail accessebility of this keyword in nested functions.
        setTimeout(function () { console.log("greet " + _this.id); }, 1000);
        //when we use arrow functions then "this" keyword is refered to the parent object
    },
};
employee.greet();
employee.greet1();
employee.greet2();
/* Tutorial -12 */
console.log("Tutorial -12");
var percentBonus = function () { return 0.1; };
var getValue = function (value, bonus) {
    if (value === void 0) { value = 10; }
    if (bonus === void 0) { bonus = value * percentBonus(); }
    console.log(value + bonus);
    console.log(arguments.length);
};
getValue();
getValue(20);
getValue(20, 30);
getValue(undefined, 30);
/* Tutorial -13 */
console.log("Tutorial -13");
var message = "List of Colors";
var displayColors = function () {
    console.log(message);
    console.log(arguments);
    for (var i_2 in arguments) {
        console.log(arguments[i_2]);
    }
};
var displayColors2 = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log(colors);
    for (var i_3 in colors) {
        console.log(colors[i_3]);
    }
};
// displayColors(message, 'Red');
// displayColors(message, 'Red','Blue');
// displayColors(message, 'Red','Blue','Green');
//above scripts might run in javascript even we didn't declare parameters to the function.
displayColors2(message, 'Red');
displayColors2(message, 'Red', 'Blue');
displayColors2(message, 'Red', 'Blue', 'Green');
/* Tutorial -14 */
console.log("Tutorial -14");
var colorArray = ['Orange', 'Yellow', 'Indigo'];
displayColors2.apply(void 0, __spreadArray([message], colorArray, false));
/* Tutorial -15 */
console.log("Tutorial -15");
var firstname = "Chandler";
var lastname = "Bings";
var person = {
    firstname: firstname,
    lastname: lastname
};
console.log(person.firstname);
console.log(person.lastname);
function createPerson(firstname, lastname, age) {
    var fullname = firstname + " " + lastname;
    return {
        firstname: firstname,
        lastname: lastname,
        fullname: fullname,
        isSenior: function () {
            return age > 60;
        }
    };
}
var p = createPerson("Ross", "Geller", 62);
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());
/* Tutorial -16 */
console.log("Tutorial -16");
var ln = "last name";
var person2 = (_a = {
        "first name": "Chandler"
    },
    _a[ln] = "Bing",
    _a);
console.log(person2);
console.log(person2["first name"]);
/* Tutorial -17 Destructing an Array*/
console.log("Tutorial -17");
var employee2 = ["Chandler", "Bing"];
var fname = employee2[0], lname = employee2[1], _b = employee2[2], gender = _b === void 0 ? "Male" : _b;
console.log(fname);
console.log(lname);
console.log(gender);
employee2 = ["Chandler", "Bing", "Female"];
var gender2 = employee2[2];
console.log(gender2);
/* Tutorial -18 Alias and destructing an object */
console.log("Tutorial -18");
var employee3 = {
    fname3: "Chandler",
    lname3: "Bing",
    gender3: "Male"
};
var fname3 = employee3.fname3, lname3 = employee3.lname3, gender3 = employee3.gender3;
console.log(fname);
console.log(lname);
console.log(gender);
// if any of the object atribute is slightly big so we can use alias for teh such atributes
var f = employee3.fname3, l = employee3.lname3, g = employee3.gender3;
console.log(f);
console.log(l);
console.log(g);
/* Tutorial -19 String Templates */
console.log("Tutorial -19  String Templates");
var user = "Chandler";
var greet = "Welcome 'single' \"double\" " + user + " to ES2015\n            This is the second line.\n               Third and so          on.\n\n";
console.log(greet);
/* Tutorial -20 forOf loop */
console.log("Tutorial -20 forOf loop");
var colors = ['Red', 'Blue', 'Green'];
for (var index in colors) {
    console.log(colors[index]);
}
for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
    var color = colors_1[_i];
    console.log(color);
}
var letters = "ABC";
for (var _c = 0, letters_1 = letters; _c < letters_1.length; _c++) {
    var letter = letters_1[_c];
    console.log(letter);
}
/* Tutorial -21 Class Declaration*/
console.log("Tutorial -21 Class Declaration");
//console.log(typeof Person);
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function () { };
    return Person;
}());
var p1 = new Person();
console.log(typeof Person);
console.log(typeof congo);
//classes are nothing but a function but it cannot be hoisted but the function() can. Uncomment line 388 to check it.
congo();
function congo() {
}
congo();
console.log(p1.greet === Person.prototype.greet);
/* Tutorial -22 Class body and methods */
console.log("Tutorial -22 Class body and methods");
var Man = /** @class */ (function () {
    function Man(name) {
        this.name = name;
        console.log(this.name + " Constructor");
    }
    Man.staticMethod = function () {
        console.log("Static Method");
    };
    Man.prototype.greetPerson = function () {
        console.log("Hello " + this.name);
    };
    Man.prototype.getID = function () {
        return 10;
    };
    Man.prototype.getAddress = function () {
        return 'Andra Pradesh';
    };
    return Man;
}());
var m = new Man("Chandler");
Man.staticMethod();
m.greetPerson();
console.log(m.getAddress());
/* Tutorial -23 Class body and methods */
console.log("Tutorial -23 Class body and methods");
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name) {
        var _this = _super.call(this, name) || this;
        console.log(name + " Employee constructor");
        return _this;
    }
    Employee.prototype.getID = function () {
        return _super.prototype.getID.call(this);
    };
    Employee.prototype.getAddress = function () {
        return 'Guntur';
    };
    return Employee;
}(Man));
var e = new Employee("Chandler");
console.log(e.getID());
console.log(e.getAddress());
/* Tutorial -24 Introduction to Modules */
console.log("Tutorial -24 Introduction to Modules. Please refer the notes.");
/* Tutorial -25 Modules loader setup configuaration */
console.log("Tutorial -25 Modules loader setup configuaration.");
/* Tutorial -29 sets and maps */
console.log("Tutorial -29 sets and maps.");
var mySet = Object.create(null);
mySet.id = true;
if (mySet.id) {
    console.log("true value id exists");
}
mySet.id = 0;
if (mySet.id) {
    console.log("O Value id exists");
}
else {
    console.log("O Value id doesn't exists");
}
mySet.id = 1;
if (mySet.id) {
    console.log("1 value id exists");
}
var myMap = Object.create(null);
myMap.name = "Chandler";
var val = myMap.name;
console.log(val);
myMap[100] = "Hello";
console.log("100 as string " + myMap["100"]);
console.log("100 as number " + myMap[100]);
var ob1 = {};
var ob2 = {};
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
var set = new Set();
set.add("Hello");
set.add(1);
set.add(ob1);
set.add(ob2);
//objects cannot be same while add them into set.
console.log(set.size);
var newSet = new Set([1, 2, 3, 4, 4, 4]);
console.log(newSet.size);
var chainSet = new Set().add("hello").add("world");
console.log(chainSet.size);
console.log(newSet.has(1));
console.log(newSet.has(5));
console.log(newSet.delete(1));
console.log(newSet.size);
//# sourceMappingURL=index.js.map