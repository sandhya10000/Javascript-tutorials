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
  }
}
console.log(duplicate);
