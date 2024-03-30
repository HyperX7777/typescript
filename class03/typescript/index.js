"use strict";
// Undefined
var hx;
console.log(hx);
console.log("Undefined data type of end here");
// Template Literals for printing value of single value from variables
var myName = "Ali";
var hello = "Hello " + myName;
console.log(`${myName}`);
console.log("Template Literals end here");
// Checking type of variable
let testVariable = 1;
console.log(typeof testVariable);
console.log("Type of end here");
// We'll learn Arithemetic operators, Assignment operators, Comparison operators and Logical operators.
// Arithmetic Example
// Addition
let n1 = 1;
let n2 = 2;
console.log(n1 + n2); // 3
let str1 = '1';
let str2 = '2';
console.log(str1 + str2); // 12
console.log("Addition end here");
// Subtraction
let n3 = 5;
let n4 = 2;
console.log(n3 - n4); // 3
console.log("Subtraction end here");
// Multiplication
let n5 = 5;
let n6 = 2;
console.log(n5 * n6); // 10
console.log("Multiplication end here");
// Division
let n7 = 4;
let n8 = 2;
console.log(n7 / n8); // 2
console.log("Division end here");
// Exponentiation
let n9 = 5;
let n10 = 3;
console.log(n9 ** n10); // 125
console.log("Exponentiation end here");
// Modulus aka Remainder
let n11 = 10;
let n12 = 3;
console.log(n11 % n12); // 1
console.log("Modulus end here");
// Assignment Operator
let n = 5;
console.log(n); // 5
n += 5;
console.log(n); // 10
n -= 5;
console.log(n); // 5
n++;
console.log(n); // 6
n--;
console.log(n); // 5
console.log("Assignment Operator end here");
// Comparison operator
let a = 5;
console.log(a == 5); // True // Compares value
console.log(a === 5); // True // Compares value and type
console.log(a != 5); // False // command != meaning is not equal to
console.log(a > 8); // False // Greater than sign
console.log(a < 8); // True // Lesser than sign
console.log(a >= 8); // False // Greater or and equal to sign
console.log(a <= 8); // True // Less than or equal to sign 
console.log("Comparsion Operator end here");
// Logical operators
// This is && both should be true for true both should be false for false and if one is false then it'll be false too
// This is || used for or condition one of them should be true for true and one of them should be false for false
// This is ! used to reverse the answer/calculation ! means not
let b = 5;
console.log(b == 5 && b >= 5); // True
console.log(b >= 5 && b < 10); // True
console.log(b > 5 && b < 10); // False
console.log(b >= 5 || b < 10); // True
console.log(b > 5 || b < 10); // True
console.log(!(b < 10)); // False
console.log(!(b > 10)); // True
console.log("Logical opeartors end here");
// If, Else and Else If Statements & Examples
/*

Use if to specify a block of code to be executed, if a specified condition is true.
Use else to specify a block of code to be executed, if the same condition is false.
Use else if to specify a new condition to test, if the first condition is false.

*/
// If it is correct it'll print otherwise it won't
let z = 5;
if (z == 6) {
    console.log(z); // It will not print because it is not true/correct.
}
// If Example 2
let x = 5;
if (x == 5) {
    console.log(x); // It will print because it is true/correct.
}
console.log('If example end here');
// Else is used to show error or pop up if the answer is wrong or correct.
// Example of if and else used together
let w = 10;
if (w == 10) {
    console.log(w);
}
else {
    console.log("Not Correct");
}
if (w == 5) {
    console.log(w);
}
else {
    console.log("Not Correct");
}
// It will print 10 because the answer is correct
console.log('If and else used together example end here');
// Example of if else if
let v = 0; // This is condition and we use if else if to set a new condition and test if it works or not or which one works
// The above value will tell what the result will come and we can set as many else if conditions as we want.
if (v == 4) {
    console.log("v is 4th");
}
else if (v == 5) {
    console.log("v is 5th");
}
else if (v == 6) {
    console.log("v is 6th");
}
else if (v == 7) {
    console.log("v is 7th");
}
else { // There is no other condition and else means if there is anything else other than what has been mentioned above it'll show the message connected to else.
    console.log("Allah ka hukam");
}
console.log('If else if example end here');
