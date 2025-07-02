// {
//   let a = 20;
//   console.log(a);
// } // this is Block scope variable

// FUNCTION SCOPES VARIABLE
// Variables declared with var, let, or const inside a function:

// Exist only within that function

// Cannot be accessed from outside

// function ab() {
//   var a = 30;
//   console.log(a);
// }
// ab();
// console.log(a);

// const FunA = () => {
//   let id = 10;
// };

// const FunB = () => {
//   let id = 20;
// };

// function ab() {
//   var a = 30;
//   console.log(a); // 30
//   return a;
// }
// var result = ab();
// console.log(result); // 30

// let a = 200;
// {
//   let b = 400;
// }

// var b = a;
// {
//   let b = -400;
// }
// console.log(b);

let name = "sandhya";
let uniquename = [];
if (!uniquename) {
  uniquename.push(item);
}
console.log(uniquename);
