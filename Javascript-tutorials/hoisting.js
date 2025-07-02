/* Javascript host only decalaration not initializations*/
/* Javascript are hoist the function , class and variable declaration on the top*/

console.log(a);
greet();

// const greet = () => {
//   console.log("Good Morning");
// }; // ReferenceError: Cannot access 'greet' before initialization

var greet = () => {
  console.log("Good Morning");
}; //
//let a; // Cannot access 'a' before initialization

var a; // undefined
