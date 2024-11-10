// Functions are a core part of JavaScript, and understanding them is essential as they allow you to create reusable blocks of code, 
// enabling modular programming and better code organization. Here’s a detailed overview:

/*This is the most common way to define a function. It has the function keyword, followed by the function name, parameters, and code block.*/

function greet(name) {
    return `Hello, ${name}!`;
}
// assign function in variable
const hello = function greet(name) {
    return `Hello, ${name}!`;
}
// Arrow functions offer a concise syntax, especially for simple operations. They also handle the this keyword differently, binding it to the scope in which the function was created.

const greet = (name) => `Hello, ${name}!`
// function with default parameter
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
greet(); // Hello, Guest!


5. Rest Parameters
Rest parameters allow functions to accept an indefinite number of arguments as an array. This replaces the older arguments object in most cases.

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
sum(1, 2, 3, 4); // 1

8. Immediately Invoked Function Expressions (IIFE)
IIFEs are functions that run as soon as they are defined. They are useful for creating isolated scopes to avoid polluting the global scope.

(function(){
    console.log("hello world")
} ())


 Higher-Order Functions
Functions that take other functions as arguments or return functions are called higher-order functions. Examples include map, filter, and reduce in JavaScript.
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]

//Callback Functions
//A callback function is passed as an argument to another function and executed at a certain point in the function’s execution.

function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched!");
    }, 1000);
}
fetchData(console.log); // Data fetched! (after 1 second)

11. Async Functions and Promises

Asynchronous functions (async functions) allow you to write asynchronous code in a cleaner, synchronous-like way, especially when combined with await.

async function fetchData() {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
}
