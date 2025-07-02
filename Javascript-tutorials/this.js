/**
 * this keyword
 * this refers to the object that is executing from current function */

const user = {
  name: "sandhya",
  greet() {
    console.log("Hello  " + this.name);
  },
};

user.greet();

/**
 * call keyword
 * Call function we we
 */
function greet() {
  console.log("Hello " + this.name + " " + this.age);
}

const person = {
  name: "sandhya",
  age: 24,
};
greet.call(person);
