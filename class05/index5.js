"use strict";
// Loops
/*

Loops are handy, if you want to run the same code over and over again, each time with a different value.

Syntax:
for (expression 1; expression 2; expression 3) {
   code block to be executed
}

From the example above, you can read
Expression 1 sets a variable before the loop starts (let i = 0).
Expression 2 defines the condition for the loop to run (i must be less than 5).
Expression 3 increases a value (i++) each time the code block in the loop has been executed.

*/
// Example 1
for (let hx = 0; hx < 5; hx++) {
    console.log('HyperX');
}
// In above problem we set the start value first which is 0 then we set condition that when the code will stop which is at 5 and then we set what the script will do to reach the condition and stop loop.
// Example 2
for (let xx = 0; xx < 4; xx++) {
    console.log("Hello World", xx);
}
// In this the code also prints the value changing and increasing until it reaches 4.
// Loop 1 + Problem
const cleanestCities = ["Karachi", "Lahore", "Sialkot", "Peshawar", "Islamabad", ""];
console.log("In 1st Loop"); // In this code it will keep checking and printing until it finds the answer
for (let x = 0; x <= 5; x++) {
    if ("Sialkot" === cleanestCities[x]) {
        console.log("It's one of the cleanest cities");
        break;
    }
    else {
        console.log("No cleanest city found");
    }
}
// Loop 2 Solution
console.log("In 2nd Loop"); // In this it will check all and print only one answer if it finds it or an error if it doesn't
let matchFound = false;
for (let i = 0; i <= 4; i++) {
    if ("Sialkot" === cleanestCities[i]) {
        console.log("It's one of the cleanest cities");
        matchFound = true;
        break;
    }
}
if (matchFound === false) {
    console.log("No cleanest city found");
}
;
