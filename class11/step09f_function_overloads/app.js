"use strict";
// Overloads give us type-checked calls
// This is not part of the overload list, 
// So it has only three overloads
function add(arg1, arg2) {
    return arg1 + arg2;
}
// Calling 'add' with any other parameter types would cause an error except for the three options
console.log(add(1, 2)); // Calls option 2, output: 3
console.log(add("Hello", "World")); // Calls option 1, output: "HelloWorld"
console.log(add(true, false)); // Calls option 3, output: true
