//function

function sumNum(x, y) {
  return 1 + (x + y) / 2;
}

let a = 1;
let b = 2;
let c = 3;

console.log(sumNum(a, b));

//Arrao function

const sum = (p, q) => {
  return p + q;
};
console.log(sum(1, 6));

//different way to print function

const hello = () => {
  console.log("Hi i am toh fine yaar");
  return "hi";
};
let v = hello();
console.log(v);
