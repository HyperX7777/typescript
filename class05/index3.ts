// Removing, inserting, and extracting elements // shift, unshift, splice and slice

var pets = [];

pets[0] = "dog"; // adds “dog” to an array at 0 index
pets[1] = "cat"; // adds “cat” to an array at index 1

pets.shift(); // removes the first element of an array which is dog in our case

pets.unshift("parrot"); // adds a new element to an array (at the beginning)

console.log(pets);