// 1. Create a Promise that returns the string "Hello Async" after 2 seconds.
const promise1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log("Hello Async");
    },2000);
});