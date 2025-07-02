// Always run and execute the function with their lexical environment refernce of the variable.
//examplle one
/*
function init() {
  var name = "Mozilla";

  function displayName() {
    console.log(name);
  }

  name = "Harry";
  return displayName;
}

let c = init();
c();
*/

function returnFunc() {
  const x = () => {
    let a = 1;
    console.log(a);
    const y = () => {
      let a = 2;
      console.log(a);
      const z = () => {
        let a = 3;
        console.log(a);
      };
      z();
    };
    a = 999;
    y();
  };
  return x;
}
let a = returnFunc();
a();
