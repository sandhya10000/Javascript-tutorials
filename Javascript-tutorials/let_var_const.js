/**
 * There are 7 different data types in Javascript
 * nn bb ss u
 * null number bolean bigInt symbol string undefined
 *
 * Non- primitive data type
 * Object
 *
 */

let a = null;
let b = 345;
let c = true;
let d = BigInt("567") + BigInt("5");
let e = "Harry";
let f = Symbol("I am sandhya");
let g = undefined;
console.log(typeof a);

//Non primitive data
const item = {
  harry: 10,
  subh: 20,
};
console.log(item["harry"]);

const obj1 = {
  name: "harry",
  age: 21,
};
const key = "name";
obj1[key] = "sandhya";
console.log(obj1);
