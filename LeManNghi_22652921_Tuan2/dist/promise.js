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
// 2. Write a function that returns a Promise resolving with the number 10 after 1 second.
function getNumberAfterOneSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}
const promise2 = getNumberAfterOneSecond();
promise2.then((value) => console.log(value));
