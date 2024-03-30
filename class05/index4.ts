// The splice() method adds new items to an array.

let fruits1 = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits1);

fruits1.splice(2, 0, "Lemon", "Kiwi");

console.log(fruits1)

// adds elements to an array at 2nd index
// deleted 0 elements
// Adding a 1 at place of 0 in 2, 0, will delete one element after Kiwi which is apple and adding 2 will delete both apple and mango

// The slice() method slices out a piece of an array.

let fruits2 = ["Banana", "Orange", "Lemon", "Apple"];

console.log(fruits2);

const citrus = fruits2.slice(1); // [Orange,Lemon,Apple]

console.log(citrus);

// Notes: The slice() method creates a new array.