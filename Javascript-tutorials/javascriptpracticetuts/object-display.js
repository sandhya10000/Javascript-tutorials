const person = {
  name: "John",
  age: 30,
  city: "New York",
};

// Stringify Object
let myString = JSON.stringify(person);

console.log(myString, "myString-----------");

// JSON string (data in text format)
let jsonString =
  '{"name": "Sandhya", "age": 25, "skills": ["JavaScript", "Node.js", "Angular"]}';

// Convert JSON string into JavaScript object
let userObject = JSON.parse(jsonString);

console.log(userObject);
console.log(userObject.name); // Output: Sandhya
console.log(userObject.age); // Output: 25
console.log(userObject.skills); // Output: ["JavaScript", "Node.js", "Angular"]

// Access an array element
console.log(userObject.skills[1]); // Output: Node.js

let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345);
console.log(y);

//Converting an Array to a String used tostring
const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.toString());

const fruit = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");
console.log(fruit);

// Without destructuring
let numbers = [10, 20, 30];
let first = numbers[0];
let second = numbers[1];
console.log(first, second); // 10 20

// With destructuring
let [a, b] = numbers;
console.log(a, b); // 10 20

//Hoisting
var aa; // Declaration moved to top
console.log(aa);
aa = 10; // Assignment stays in place
console.log(aa);

//
console.log(hoist, "hoist"); // ❌ ReferenceError: Cannot access 'b' before initialization
let hoist = 20;

//
