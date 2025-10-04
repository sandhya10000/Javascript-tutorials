/**
 * find duplicate value from a string using js.
 */

const str = "sandhya";

let charCount = {};
let duplicate = [];

for (let char of str) {
  charCount[char] = (charCount[char] || 0) + 1;
}

for (let key in charCount) {
  if (charCount[key] > 1) {
    duplicate.push(key);
  } else {
  }
}
console.log(duplicate);

function run(rawArr) {
  let result = [];
  for (let item of rawArr) {
    if (Array.isArray(item)) {
      const array = run(item);
      result.push(...array);
    } else {
      result.push(item);
    }
  }
  return result;
}
let arr = [1, 2, [3, 4], 5, [6, 7], 8];
console.log(run(arr), "result");
