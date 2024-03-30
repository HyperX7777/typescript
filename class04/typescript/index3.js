"use strict";
// Learn Arrays Splice deep understanding
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
// At position 2, add 2 elements: 
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);
// You start with an array called fruits containing four elements: "Banana", "Orange", "Apple", and "Mango".
/*

The splice method is used on the fruits array. The parameters passed to splice are as follows:

2: This is the index at which the operation will begin. In this case, it's index 2, which corresponds to the element "Apple".
1: This is the number of elements to be removed from the array starting at the specified index. In this case, you're removing 1 element ("Apple").
"Lemon" and "Kiwi": These are the elements you want to insert at the specified index.
The result of this operation will be:

"Apple" is removed from the array since the deleteCount is 1.
"Lemon" and "Kiwi" are inserted at index 2 in place of the removed "Apple".
So, after the splice operation, the fruits array will be:

["Banana", "Orange", "Lemon", "Kiwi", "Mango"]
Note that "Orange" remains in place, "Lemon" and "Kiwi" are inserted, and "Mango" retains its original position.

*/
