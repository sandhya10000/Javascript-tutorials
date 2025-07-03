// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

//using .then or .catch
function fetchData(str) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (str === "patidev") resolve("patidev");
      else {
        reject("error");
      }
    }, 2000);
  });
}
fetchData("patidev")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//using async await
const fetchOne = async (str) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (str === "sandhya") resolve("success");
      else {
        reject("error Occure");
      }
    }, 2000);
  });
};

const fetchTwo = async (str) => {
  try {
    const result = await fetchOne(str);
    console.log(result, "resultt");
  } catch (error) {
    console.log("ERROR", error);
  }
};

fetchTwo("sanda");
