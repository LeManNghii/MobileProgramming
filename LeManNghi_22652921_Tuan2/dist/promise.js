"use strict";
// 1. Create a Promise that returns the string "Hello Async" after 2 seconds.
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000);
});
promise1.then(value => {
    console.log(value);
});
