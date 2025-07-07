// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

//using .then or .catch
// function fetchData(str) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (str === "patidev") resolve("patidev");
//       else {
//         reject("error");
//       }
//     }, 2000);
//   });
// }
// fetchData("patidev")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// //using async await
// const fetchOne = async (str) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (str === "sandhya") resolve("success");
//       else {
//         reject("error Occure");
//       }
//     }, 2000);
//   });
// };

// const fetchTwo = async (str) => {
//   try {
//     const result = await fetchOne(str);
//     console.log(result, "resultt");
//   } catch (error) {
//     console.log("ERROR", error);
//   }
// };

// fetchTwo("sanda");

// const p1 = new Promise((resolve) => setTimeout(() => resolve("first"), 1500));
// const p2 = new Promise((resolve) => setTimeout(() => resolve("seconds"), 500));
// Promise.race([p1, p2]).then((result) => {
//   console.log(result);
// });

// const p1 = new Promise.resolve("success");
// const p2 = new Promise.reject("fail");
// const p3 = new Promise.resolve("done");

// Promise.allSettled([p1, p2, p3]).then((result) => {
//   console.log(result);
// });

function Sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumcallback) {
  sumcallback(a, b);
}
calculator(1, 2, (a, b) => {
  console.log(a + b);
});
