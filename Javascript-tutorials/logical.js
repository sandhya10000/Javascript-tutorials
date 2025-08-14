//Operators
console.log("5" + 3 && "5", "and operator"); // 5

console.log("5" + 3 || "5", "or operator"); //  53
/**
 * 
 * Operator	Example	Same As
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
**=	x **= y	x = x ** y
 */

let text1 = "20";
let text2 = "5";
let result = text1 < text2;
console.log(result, "result-----"); //true
/**
 * Let's compare "20" vs "5":

First character of "20" is '2'

First character of "5" is '5'

Now look at their Unicode values:

'2' → Unicode: 50

'5' → Unicode: 53

Since '2' < '5' (because 50 < 53), JavaScript concludes:
 */
let a = [5];
let b = [5];
console.log(a == b); // false - because a and b are different objects ..Its compare their

let c = a;
console.log(a == c); // true - same reference

// Task to generate random number between 15 and 20

const randomNum = (min, max) => {
  const randomNu = Math.random();
  console.log(randomNu);
  const removeDeci = Math.floor(Math.random() * (max - min) + min);
  //(0 * (20-15) +15) = 15
  console.log(removeDeci);
  console.log(max);
  console.log(min);
};
randomNum(15, 20);

//Object properties
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

delete person["age"];
console.log(person, "person-------");
//output:- { firstName: 'John', lastName: 'Doe', eyeColor: 'blue' } person-------

//Question:-
// Object properti

const person1 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person1.fullName());
//output:John Doe

//Object stingify
// Create an Object
const person2 = {
  name: "John",
  age: 30,
  city: "New York",
};

// Stringify Object
let myString = JSON.stringify(person2);
console.log(myString);

//output:- {"name":"John","age":30,"city":"New York"}

let number = 0.1 + 0.2;
console.log(number); //output: 0.1 + 0.2 === 0.30000000000000004

console.log(number == 0.3, "result-------");
/**
 * above error reason
 * The reason: Floating-point precision error
JavaScript uses binary floating-point (IEEE 754 standard), and some decimal numbers cannot be represented exactly in binary.

Just like how 1/3 can't be exactly represented in decimal (it's 0.3333... forever), 0.1 and 0.2 can't be perfectly stored in binary, which leads to a small error:

FLOATING POINT PRECESION
Floating point arithmetic is not always 100% accurate.

0.2 + 0.1 = 0.30000000000000004

 */
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON, "floating number"); // true
//For safely print true

//to find maximum minimum

const rndNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
console.log(rndNumber(15, 20));

//
sayHello(); // Output: Hello!

function sayHello() {
  console.log("Hello!");
}
//JavaScript Array join()

let joinArr = ["Mongo", "NodeJs", "Javascript"];

console.log(joinArr.join(" "));
