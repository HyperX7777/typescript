"use strict";
// Functions are the primary means of passing data around in TypeScript. TypeScript allows you to specify the types of both the input and output values of functions.
// Example 1
function testFunc() {
    // Block of code here
    console.log("Hello from HyperX");
}
// Calling function
testFunc();
// Example 2
// Normal Sum
let a = 7;
let b = 5;
let sum1 = a * b;
console.log(sum1);
// Help of Function
// (num1:number, num2:number) This is parameter and we use it to expect data from user while calling the function the calculation is done based on the info we get in parameters
function sum2(num1, num2) {
    let sum2 = num1 * num2;
    console.log(`The multiplication of ${num1} and ${num2} is ${sum2}`); // Using Template literals with back ticks over here
}
sum2(10, 20); // Whichever values we write here will multiply with each other and we can call the function as many times as we want and can change values according to ourselves
sum2(3, 30);
// Example 3
function greet(name) {
    console.log("Hello, " + name.toUpperCase() + " Brother");
}
greet("Ali");
greet("Mana");
greet("Jaja");
